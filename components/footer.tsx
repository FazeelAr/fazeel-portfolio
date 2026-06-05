'use client';

import { siteData, socialLinks } from '@/lib/data';
import Link from 'next/link';
import { Github, Linkedin, Mail } from 'lucide-react';

const IconMap: Record<string, React.ReactNode> = {
  'github.com/FazeelAr': <Github size={20} />,
  'linkedin.com/in/muhammad-fazeel-48484a264': <Linkedin size={20} />,
  'mailto:muhammad.fazeel8904@gmail.com': <Mail size={20} />,
};

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-accent mb-2">{siteData.name}</h3>
            <p className="text-sm text-muted">
              Building at the intersection of AI and software.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'About', href: '#about' },
                { label: 'Projects', href: '#projects' },
                { label: 'Contact', href: '#contact' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4 text-foreground">Connect</h4>
            <div className="flex gap-4">
              <a
                href={siteData.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-border hover:bg-accent hover:text-background rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href={siteData.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-border hover:bg-accent hover:text-background rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={`mailto:${siteData.email}`}
                className="p-2 bg-border hover:bg-accent hover:text-background rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted">
            <p>&copy; 2025 Muhammad Fazeel. All rights reserved.</p>
            <p>Built with Next.js, Tailwind CSS & Framer Motion</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
