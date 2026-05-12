'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInStagger, fadeInItem } from './FadeIn';

const articles = [
  {
    date: 'September 18, 2025',
    title: '5 Common Mistakes Businesses Make When Adopting AI',
    img: 'https://framerusercontent.com/images/BZAExfDpbmkr5kWGH7F2Whd6lk.jpg',
    href: '#',
  },
  {
    date: 'September 18, 2025',
    title: 'How to Spot AI Automation Opportunities in Your Workflow',
    img: 'https://framerusercontent.com/images/VRwQ9uHPGoSubtzvWBwjE2utUDU.jpg?width=200',
    href: '#',
  },
  {
    date: 'September 3, 2025',
    title: 'How a Small Retail Business Saved 50+ Hours per Month with AI',
    img: 'https://framerusercontent.com/images/vx8WxNyfbJ4SPAtU4jwNDArkh1Q.jpg?width=200',
    href: '#',
  },
  {
    date: 'August 6, 2025',
    title: 'Top 10 AI Tools Every Business Should Consider',
    img: 'https://framerusercontent.com/images/UKGJ4gmkBLqWP9b5Vv956x2SBUE.jpg?width=200',
    href: '#',
  },
];

export function NewsSection() {
  return (
    <section className="py-28 border-t border-white/[0.06]" id="blog">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="flex items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label">11</span>
              <span className="section-label">about AI for business</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em]">News</h2>
          </div>
          <a href="#" className="hidden md:flex items-center gap-2 text-white/40 text-sm hover:text-white transition-colors duration-200">
            All articles
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeIn>

        <FadeInStagger className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {articles.map((a, i) => (
            <motion.a
              key={i}
              href={a.href}
              variants={fadeInItem}
              className="group flex gap-4 p-4 rounded-2xl border border-white/[0.06] hover:border-white/[0.12] bg-white/[0.02] transition-all duration-300"
            >
              <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                <img src={a.img} alt={a.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex flex-col justify-between">
                <p className="text-white/30 text-xs mb-2">{a.date}</p>
                <p className="text-white/75 text-sm font-medium leading-snug group-hover:text-white transition-colors duration-200">{a.title}</p>
              </div>
            </motion.a>
          ))}
        </FadeInStagger>

        {/* Newsletter */}
        <FadeIn delay={0.2} className="mt-10 p-6 rounded-2xl border border-white/[0.08] bg-white/[0.02]">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            <div>
              <p className="text-white font-medium mb-1">Newsletter</p>
              <p className="text-white/40 text-sm">We send occasional updates about new case studies and useful tips.</p>
            </div>
            <div className="flex gap-2 w-full md:w-auto">
              <input
                type="email"
                placeholder="Your Email"
                className="flex-1 md:w-64 px-4 py-2.5 rounded-full bg-white/[0.05] border border-white/[0.1] text-white text-sm placeholder-white/25 focus:outline-none focus:border-white/25 transition-colors"
              />
              <button className="px-5 py-2.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200 flex-shrink-0">
                Get weekly tips
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

const timeline = [
  { year: '2020', event: 'Founded to rethink how technology solves real problems' },
  { year: '2023', event: 'Launched our first scalable platform' },
  { year: '2024', event: 'Released Fourpoints, our AI framework' },
  { year: '2025', event: 'Introduced Shutterframe for creative industries' },
];

export function ManifestoSection() {
  return (
    <section className="py-28 border-t border-white/[0.06]" id="manifesto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: portrait */}
          <FadeIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] relative">
              <img
                src="https://framerusercontent.com/images/m49yaXnwiPnLxR2XpI0F7YhoOxo.jpg?width=668&height=921"
                alt="Laura Stern"
                className="w-full object-cover"
                style={{ maxHeight: '520px', objectPosition: 'top' }}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
                <p className="text-white font-medium">Laura Stern</p>
                <p className="text-white/40 text-sm">Founder & AI Consultant</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: manifesto + timeline */}
          <FadeIn delay={0.1}>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label">10</span>
              <span className="section-label">What we believe</span>
            </div>

            <p className="text-2xl md:text-3xl font-medium tracking-[-0.02em] leading-[1.3] mb-6 text-white">
              We didn&apos;t build this company to chase trends. We built it to solve real problems — clearly, quietly, and without wasting your time.
            </p>
            <p className="text-white/40 text-base leading-relaxed mb-10">
              AI can be useful, but only if it&apos;s done right. We&apos;re here to make AI work in the real world — without noise, hype, or distractions.
            </p>

            <div className="space-y-0">
              {timeline.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5 }}
                  className="flex items-start gap-5 py-4 border-b border-white/[0.06]"
                >
                  <span className="text-white/25 text-xs font-medium w-10 flex-shrink-0 mt-0.5">{item.year}</span>
                  <p className="text-white/60 text-sm">{item.event}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

const navLinks = ['Home', 'About', 'Case Studies', 'News', 'Careers', 'Contact'];

export function ContactFooter() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name && email) setSubmitted(true);
  };

  return (
    <section className="border-t border-white/[0.06]" id="contact">
      {/* Gradient top */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-30">
          <img
            src="https://framerusercontent.com/images/VulBQhVJJgXCyTIKKvhsZMa5TU.png?width=2244&height=715"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>

        <div className="max-w-[1200px] mx-auto px-6 py-28 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left */}
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <span className="section-label">13</span>
                <span className="section-label">Ready to start?</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-medium tracking-[-0.03em] leading-[1.05] mb-4">Get in touch</h2>
              <p className="text-white/40 text-base mb-10">Whether you have questions or just want to explore options, we&apos;re here.</p>

              {/* Nav links in footer */}
              <div className="flex flex-wrap gap-x-6 gap-y-3 mb-10">
                {navLinks.map((link) => (
                  <a key={link} href="#" className="text-white/40 text-sm hover:text-white transition-colors duration-200">
                    {link}
                  </a>
                ))}
              </div>

              <div className="space-y-3">
                <p className="text-white/30 text-sm">We are Based in London</p>
                <a href="tel:3125552468" className="block text-white/55 text-sm hover:text-white transition-colors duration-200">(312) 555-2468</a>
                <a href="mailto:hello@effica.com" className="block text-white/55 text-sm hover:text-white transition-colors duration-200">Hello@effica.com</a>
              </div>

              <div className="flex items-center gap-4 mt-8">
                {['fb', 'ig', 'be', 'x'].map((social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-8 h-8 rounded-full border border-white/[0.1] flex items-center justify-center text-white/40 hover:border-white/25 hover:text-white transition-all duration-200 text-xs font-medium"
                  >
                    {social}
                  </a>
                ))}
              </div>
            </FadeIn>

            {/* Right: form */}
            <FadeIn delay={0.1}>
              {submitted ? (
                <div className="flex flex-col items-start justify-center h-full py-10">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-6">
                    <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-medium mb-2">Thanks, {name}!</h3>
                  <p className="text-white/40 text-sm">We&apos;ll be in touch shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="section-label block mb-2">Name</label>
                    <input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Your full name"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <div>
                    <label className="section-label block mb-2">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="hello@yourcompany.com"
                      className="w-full px-5 py-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] text-white text-sm placeholder-white/20 focus:outline-none focus:border-white/20 transition-colors"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl bg-white text-black text-sm font-medium hover:bg-white/90 active:scale-[0.99] transition-all duration-200"
                  >
                    Let&apos;s talk
                  </button>
                  <p className="text-white/20 text-xs text-center">
                    By submitting, you agree to our{' '}
                    <a href="#" className="underline hover:text-white/40 transition-colors">Terms</a>
                    {' '}and{' '}
                    <a href="#" className="underline hover:text-white/40 transition-colors">Privacy Policy</a>.
                  </p>
                </form>
              )}
            </FadeIn>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-[1200px] mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/25 text-xs">© 2025 Effica® Studio. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Privacy Policy</a>
            <a href="#" className="text-white/25 text-xs hover:text-white/50 transition-colors">Terms of Service</a>
            <a
              href="#"
              onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
              className="text-white/25 text-xs hover:text-white/50 transition-colors flex items-center gap-1"
            >
              Back to top
              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
