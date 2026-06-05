'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectItems } from '@/lib/data';
import { ExternalLink, Github } from 'lucide-react';

const categories = ['All', 'AI / LLM', 'Full Stack', 'Web', 'AI / LLM + Full Stack'];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProjects =
    activeCategory === 'All'
      ? projectItems
      : projectItems.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Projects
          </h2>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition-all ${
                  activeCategory === cat
                    ? 'bg-accent text-white'
                    : 'bg-card border border-border text-muted hover:border-accent'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, idx) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="group bg-card border border-border rounded-xl p-6 hover:border-accent hover:shadow-glow transition-all"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-sm text-muted">{project.year}</p>
                    </div>
                    <div className="px-3 py-1 bg-accent/10 border border-accent/30 rounded-full text-xs text-accent">
                      {project.category}
                    </div>
                  </div>

                  <p className="text-muted text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {project.highlights.length > 0 && (
                    <ul className="space-y-1 mb-4 text-xs text-muted/70">
                      {project.highlights.slice(0, 2).map((h, i) => (
                        <li key={i} className="flex gap-2">
                          <span>•</span> {h}
                        </li>
                      ))}
                    </ul>
                  )}

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-accent/10 border border-accent/30 rounded text-xs text-accent"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.links.live && (
                      <a
                        href={project.links.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-accent hover:bg-accent/90 text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live
                      </a>
                    )}
                    {project.links.github && (
                      <a
                        href={project.links.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-accent text-accent hover:bg-accent hover:text-white rounded-lg text-sm font-medium transition-colors"
                      >
                        <Github size={16} />
                        Code
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
