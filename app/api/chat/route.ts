'use server';

import { NextRequest, NextResponse } from "next/server";
import { knowledgeBaseText } from "../../../lib/data";
import { ChatGoogleGenerativeAI } from "@langchain/google-genai";

type KnowledgeChunk = { pageContent: string };

// Global cache for knowledge base chunks to avoid recomputing
let cachedChunks: KnowledgeChunk[] | null = null;

// Simple embedding function using a lightweight approach
// In production, you'd use @xenova/transformers for sentence-transformers
async function getEmbedding(text: string): Promise<number[]> {
  // Fallback: use a simple hash-based embedding
  // For production: integrate @xenova/transformers or call a proper embedding API
  const embedding: number[] = [];
  for (let i = 0; i < 384; i++) {
    let hash = 0;
    for (let j = 0; j < text.length; j++) {
      const char = text.charCodeAt(j);
      hash = (hash << 5) - hash + char;
      hash = hash & hash;
    }
    embedding.push(Math.sin(hash / (i + 1)) * 0.5 + 0.5);
  }
  return embedding;
}

function cosineSimilarity(a: number[], b: number[]): number {
  let dotProduct = 0;
  let normA = 0;
  let normB = 0;
  for (let i = 0; i < a.length; i++) {
    dotProduct += a[i] * b[i];
    normA += a[i] * a[i];
    normB += b[i] * b[i];
  }
  return dotProduct / (Math.sqrt(normA) * Math.sqrt(normB) || 1);
}

async function getRelevantChunks(query: string, chunks: KnowledgeChunk[], topK = 3) {
  const queryEmbedding = await getEmbedding(query);
  
  const similarities = await Promise.all(
    chunks.map(async (chunk) => {
      const chunkEmbedding = await getEmbedding(chunk.pageContent);
      const similarity = cosineSimilarity(queryEmbedding, chunkEmbedding);
      return { chunk, similarity };
    })
  );

  return similarities
    .sort((a, b) => b.similarity - a.similarity)
    .slice(0, topK)
    .map((item) => item.chunk);
}

function splitTextIntoChunks(text: string, chunkSize = 500, chunkOverlap = 50): KnowledgeChunk[] {
  const chunks: KnowledgeChunk[] = [];
  let start = 0;

  while (start < text.length) {
    const end = Math.min(start + chunkSize, text.length);
    const chunkText = text.slice(start, end);
    chunks.push({ pageContent: chunkText });

    if (end === text.length) break;
    start = Math.max(end - chunkOverlap, start + 1);
  }

  return chunks;
}

async function initializeKnowledgeBase() {
  if (cachedChunks) return cachedChunks;

  cachedChunks = splitTextIntoChunks(knowledgeBaseText, 500, 50);
  return cachedChunks;
}

export async function POST(request: NextRequest) {
  try {
    const { message } = await request.json();

    if (!message || typeof message !== "string") {
      return NextResponse.json(
        { error: "Message is required and must be a string" },
        { status: 400 }
      );
    }

    // Initialize chunks
    const chunks = await initializeKnowledgeBase();

    // Retrieve relevant chunks
    const relevantChunks = await getRelevantChunks(message, chunks);

    // Combine retrieved context
    const context = relevantChunks.map((chunk) => chunk.pageContent).join("\n\n");

    // Initialize Gemini
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: "GOOGLE_API_KEY environment variable is not set" },
        { status: 500 }
      );
    }

    const model = new ChatGoogleGenerativeAI({
      apiKey,
      model: "gemini-2.5-flash",
      temperature: 0.7,
    });

    const systemPrompt = `You are Fazeel's personal AI assistant embedded in his portfolio website.
Your ONLY purpose is to answer questions about Muhammad Fazeel — his projects, experience, skills, education, achievements, and availability.

CRITICAL RULE: If any question is outside the scope of Fazeel or not relevant to him, respond with EXACTLY:
"I cannot answer this question. It is not relevant to the person"

Do NOT attempt to answer general knowledge questions, unrelated topics, or anything not about Fazeel.
Be conversational, concise, and friendly when answering Fazeel-related questions. Keep answers under 150 words unless detail is needed.
Use the provided context to answer questions accurately.
Never make up information.

Context about Fazeel:
${context}`;

    const response = await model.invoke([
      { role: "system", content: systemPrompt },
      { role: "user", content: message },
    ]);

    const answer = typeof response === "string" ? response : response.text ?? response.content ?? String(response);

    return NextResponse.json({
      response: answer,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Chat API error:", error);
    return NextResponse.json(
      {
        error: "Failed to process your message",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
