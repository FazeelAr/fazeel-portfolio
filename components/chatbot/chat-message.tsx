'use client';

import { Message } from '@/lib/data';
import { motion } from 'framer-motion';

interface ChatMessageProps {
  message: Message;
}

export default function ChatMessage({ message }: ChatMessageProps) {
  const isUser = message.role === 'user';

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`max-w-xs px-4 py-2 rounded-lg text-sm ${
          isUser
            ? 'bg-accent text-white'
            : 'bg-card border border-border text-muted'
        }`}
      >
        {message.content}
      </div>
    </motion.div>
  );
}
