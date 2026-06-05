'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { siteData, contactLinks } from '@/lib/data';
import { Mail, Linkedin, Github, MapPin, Check } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Using Formspree or email service
      const response = await fetch('https://formspree.io/f/xvgjzrgd', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitted(true);
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setSubmitted(false), 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
            Let's Build Something
          </h2>
          <p className="text-center text-muted mb-12">
            Open to internships, freelance projects, and collaborations.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-accent focus:shadow-glow transition-all"
              />

              <input
                type="email"
                name="email"
                placeholder="your@email.com"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-accent focus:shadow-glow transition-all"
              />

              <textarea
                name="message"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground placeholder-muted/50 focus:outline-none focus:border-accent focus:shadow-glow transition-all resize-none"
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-accent hover:bg-accent/90 text-white rounded-lg font-semibold transition-all hover:shadow-glow disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitted ? (
                  <>
                    <Check size={20} />
                    Message Sent!
                  </>
                ) : loading ? (
                  'Sending...'
                ) : (
                  'Send Message'
                )}
              </button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              {/* Availability Badge */}
              <div className="p-4 bg-accent/10 border border-accent rounded-lg">
                <p className="text-sm text-accent font-semibold">
                  ✅ {siteData.availability}
                </p>
              </div>

              {/* Contact Cards */}
              <div className="space-y-3">
                <a
                  href={`mailto:${siteData.email}`}
                  className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-accent hover:shadow-glow transition-all group"
                >
                  <Mail size={24} className="text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="font-semibold text-foreground">{siteData.email}</p>
                  </div>
                </a>

                <a
                  href={siteData.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-accent hover:shadow-glow transition-all group"
                >
                  <Linkedin size={24} className="text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted">LinkedIn</p>
                    <p className="font-semibold text-foreground">Muhammad Fazeel</p>
                  </div>
                </a>

                <a
                  href={siteData.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg hover:border-accent hover:shadow-glow transition-all group"
                >
                  <Github size={24} className="text-accent group-hover:scale-110 transition-transform" />
                  <div>
                    <p className="text-sm text-muted">GitHub</p>
                    <p className="font-semibold text-foreground">@FazeelAr</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-lg">
                  <MapPin size={24} className="text-accent" />
                  <div>
                    <p className="text-sm text-muted">Location</p>
                    <p className="font-semibold text-foreground">{siteData.location}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
