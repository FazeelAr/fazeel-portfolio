'use client';

import { motion } from 'framer-motion';
import { skillGroups } from '@/lib/data';

export default function Skills() {
  // Flatten all skills for the scrolling ticker
  const allSkills = skillGroups.flatMap((group) => group.skills);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Tech Stack
          </h2>

          {/* Scrolling Ticker */}
          <div className="mb-16 overflow-hidden">
            <motion.div
              className="flex gap-8 whitespace-nowrap py-8"
              animate={{ x: [0, -2000] }}
              transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            >
              {[...allSkills, ...allSkills].map((skill, idx) => (
                <div
                  key={idx}
                  className="px-4 py-2 bg-accent/10 border border-accent/30 rounded-lg text-accent font-medium min-w-max text-sm"
                >
                  {skill}
                </div>
              ))}
            </motion.div>
          </div>

          {/* Categorized Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="p-6 bg-background border border-border rounded-xl hover:border-accent transition-colors"
              >
                <h3 className="text-lg font-bold text-accent mb-4">
                  {group.category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill, sidx) => (
                    <span
                      key={sidx}
                      className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
