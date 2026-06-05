'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { siteData } from '@/lib/data';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

export default function Hero() {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const titles = siteData.typingTitles;
    const currentTitle = titles[currentIndex];
    const typingSpeed = isDeleting ? 50 : 100;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < currentTitle.length) {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % titles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute w-96 h-96 bg-accent/20 rounded-full blur-3xl"
          animate={{ x: [0, 100, 0], y: [0, 50, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          style={{ top: '10%', left: '10%' }}
        />
        <motion.div
          className="absolute w-96 h-96 bg-accent2/20 rounded-full blur-3xl"
          animate={{ x: [0, -100, 0], y: [0, -50, 0] }}
          transition={{ duration: 25, repeat: Infinity }}
          style={{ bottom: '10%', right: '10%' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid md:grid-cols-2 items-center gap-8">
            <div className="text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
                {siteData.name}
              </h1>

              <p className="text-xl md:text-2xl text-accent mb-6 h-10">
                {displayText}
                <span className="animate-pulse">|</span>
              </p>

              <p className="text-lg text-muted mb-8 max-w-2xl mx-auto md:mx-0">
                {siteData.subtitle}
              </p>

              <p className="text-muted mb-12">{siteData.location}</p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-12">
                <motion.button
                  onClick={() => scrollToSection('projects')}
                  className="flex items-center justify-center gap-2 px-8 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all hover:shadow-glow"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View My Work
                  <ArrowRight size={20} />
                </motion.button>

                <motion.a
                  href={siteData.resume}
                  download="Muhammad_Fazeel_Resume.pdf"
                  className="flex items-center justify-center gap-2 px-8 py-3 border border-accent text-accent hover:bg-accent hover:text-white rounded-lg font-semibold transition-all"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Download size={20} />
                  Download CV
                </motion.a>
              </div>

              {/* Social Links */}
              <motion.div
                className="flex justify-center md:justify-start gap-6 pb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
              >
                {[
                  { label: 'GitHub', href: siteData.github, icon: Github },
                  { label: 'LinkedIn', href: siteData.linkedin, icon: Linkedin },
                  { label: 'Email', href: `mailto:${siteData.email}`, icon: Mail },
                ].map((link) => {
                  const IconComponent = link.icon;
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.label !== 'Email' ? '_blank' : undefined}
                      rel={link.label !== 'Email' ? 'noopener noreferrer' : undefined}
                      className="p-3 bg-card border border-border hover:border-accent hover:bg-accent/10 rounded-lg transition-all hover:scale-110 text-accent"
                      title={link.label}
                    >
                      <IconComponent size={24} />
                    </a>
                  );
                })}
              </motion.div>
            </div>

            {/* Avatar */}
            <div className="flex justify-center md:justify-end">
              <div className="w-44 h-44 md:w-56 md:h-56 rounded-full ring-4 ring-accent overflow-hidden bg-gradient-to-br from-accent/10 to-accent2/10">
                <Image
                  src="/PXL_20260418_131756903.PORTRAIT.jpg.jpeg"
                  alt={`${siteData.name} profile`}
                  width={224}
                  height={224}
                  className="object-cover w-full h-full"
                  priority
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
