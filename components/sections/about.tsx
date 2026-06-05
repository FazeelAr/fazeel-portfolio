'use client';

import { motion } from 'framer-motion';
import { aboutHighlights } from '@/lib/data';

const bio = `I'm a third-year Software Engineering student at PUCIT, University of the Punjab (2023–2027), with a GPA of 3.30/4.00. I build things across the full stack — from responsive Next.js frontends to Django and ASP.NET Core backends — but my deepest interest lies in AI: agents, automation pipelines, and systems that actually think.

I've shipped real applications for real clients — a recipe generator for a Lithuanian startup, a POS system for a local wholesale business, SaaS platforms during my internship at Xonfo Solutions. I also teach AI to 50+ university students every week as a Teaching Assistant, which keeps me sharp.

When I'm not coding, I'm competing in national quiz championships (Top 3 nationally), organizing ICPC rounds, or reading about whatever's new in LLMs.`;

export default function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Bio Text */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="space-y-4 text-muted leading-relaxed">
                {bio.split('\n\n').map((para, idx) => (
                  <p key={idx}>{para}</p>
                ))}
              </div>
            </motion.div>

            {/* Avatar Placeholder */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center justify-center"
            >
              <div className="relative w-64 h-64 rounded-full border-2 border-accent bg-gradient-to-br from-accent/20 to-accent2/20 flex items-center justify-center">
                <div className="text-8xl">👨‍💻</div>
              </div>
            </motion.div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-3 gap-4">
            {aboutHighlights.map((highlight, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-card border border-border rounded-xl hover:border-accent hover:shadow-glow transition-all"
              >
                <div className="text-4xl mb-3">{highlight.icon}</div>
                <h3 className="font-semibold text-foreground mb-2">
                  {highlight.label}
                </h3>
                <p className="text-sm text-muted">{highlight.value}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
