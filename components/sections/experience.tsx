'use client';

import { motion } from 'framer-motion';
import { experienceItems } from '@/lib/data';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-16 text-center">
            Experience
          </h2>

          {/* Timeline */}
          <div className="space-y-8">
            {experienceItems.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="relative pl-8 pb-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-2 w-4 h-4 bg-accent rounded-full border-2 border-background" />

                {/* Timeline line */}
                {idx !== experienceItems.length - 1 && (
                  <div className="absolute left-1.5 top-6 w-0.5 h-24 bg-gradient-to-b from-accent to-accent/20" />
                )}

                {/* Content */}
                <motion.div
                  className="bg-background border border-border p-6 rounded-xl hover:border-accent transition-colors"
                  whileHover={{ x: 10 }}
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-accent">
                        {exp.role}
                      </h3>
                      <p className="text-muted">{exp.company}</p>
                      <p className="text-sm text-muted/70">
                        {exp.location} • {exp.duration}
                      </p>
                    </div>
                    <div className="inline-block px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent font-medium whitespace-nowrap">
                      {exp.type}
                    </div>
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-4">
                    {exp.bullets.map((bullet, bidx) => (
                      <li key={bidx} className="flex gap-3 text-muted text-sm">
                        <span className="text-accent mt-1">→</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tidx) => (
                      <span
                        key={tidx}
                        className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
