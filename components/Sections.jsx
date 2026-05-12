'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeIn, FadeInStagger, fadeInItem } from './FadeIn';

const services = [
  {
    num: '/01',
    title: 'ai consulting & strategy',
    desc: 'Whether you\'re just exploring possibilities or looking to scale existing tools, we build a clear plan that aligns with your goals.',
    tags: ['#AIConsulting', '#BusinessAutomation'],
    img: 'https://framerusercontent.com/images/UKGJ4gmkBLqWP9b5Vv956x2SBUE.jpg?width=642&height=411',
  },
  {
    num: '/02',
    title: 'workflow automation',
    desc: 'We design and deploy automation systems that take repetitive tasks off your plate — from handling emails and reports to streamlining admin and customer service processes.',
    tags: ['#SaveTime', '#WorkSmarter', '#NoMoreManualWork'],
    img: 'https://framerusercontent.com/images/ccp0pE8ilBYIbeVuKUhSOVV59A.jpg?width=642&height=411',
  },
  {
    num: '/03',
    title: 'custom ai tools & integrations',
    desc: 'Need something more specific? We develop lightweight AI solutions tailored to your operations — from data analysis tools to smart assistants.',
    tags: ['#AITools', '#TailoredTech'],
    img: 'https://framerusercontent.com/images/icTEZPIceOE8cIBqYuyzrKolpA.jpg?width=642&height=411',
  },
  {
    num: '/04',
    title: 'team onboarding & training',
    desc: 'AI only works when your team knows how to use it. We offer simple onboarding, documentation, and ongoing support to make sure everyone feels confident — even without a technical background.',
    tags: ['#AITraining'],
    img: 'https://framerusercontent.com/images/taRJD9jIexSaQfL0zpQqcW0G3I.jpg?width=642&height=411',
  },
];

export function AboutSection() {
  return (
    <section className="py-28 border-t border-white/[0.06]" id="about">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: video/image card */}
          <FadeIn>
            <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111] relative aspect-[4/3]">
              <img
                src="https://framerusercontent.com/images/vx8WxNyfbJ4SPAtU4jwNDArkh1Q.jpg?width=642&height=428"
                alt="How we work"
                className="w-full h-full object-cover"
              />
              {/* overlay badge */}
              <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-sm border border-white/[0.1]">
                <div className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-2.5 h-2.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
                <span className="text-white/70 text-xs">2:30</span>
              </div>
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-white text-sm font-medium leading-snug">How we help you use AI without the hype</p>
              </div>
            </div>
          </FadeIn>

          {/* Right: text */}
          <FadeIn delay={0.1}>
            <div className="pt-2">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-white/25 text-xs font-medium tracking-[0.12em] uppercase">how we work</span>
              </div>

              <div className="space-y-10">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="section-label">01</span>
                    <div className="h-px flex-1 bg-white/[0.06]" />
                  </div>
                  <h3 className="text-xl font-medium mb-3">Who we are</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    We&apos;re a hands-on team of AI consultants focused on helping small and mid-size businesses use automation where it matters most. We cut through the noise and implement it with no disruption.
                  </p>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-white/[0.03] border border-white/[0.06]">
                  <img
                    src="https://framerusercontent.com/images/rPovAy2J6Q4sllGf3hH7aT3fCk.jpg?width=63&height=63"
                    alt="Jessica Burns"
                    className="w-10 h-10 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="text-white text-sm font-medium">Jessica Burns</p>
                    <p className="text-white/40 text-xs">Client Success Manager</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  const [active, setActive] = useState(0);

  return (
    <section className="py-28 border-t border-white/[0.06]" id="services">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">02</span>
            <span className="section-label">Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-4">
            turning repetitive work<br />into time-saving systems
          </h2>
          <p className="text-white/40 text-base max-w-[500px] leading-relaxed">
            We provide practical AI consulting and automation services for companies that want results — not just theory.
          </p>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          {/* List */}
          <div className="space-y-0">
            {services.map((svc, i) => (
              <motion.div
                key={i}
                className={`group cursor-pointer py-5 border-b border-white/[0.06] ${active === i ? 'border-white/[0.12]' : ''}`}
                onClick={() => setActive(i)}
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-white/25 text-[11px] font-medium tracking-wider">{svc.num}</span>
                      <motion.h3
                        className={`text-base font-medium transition-colors duration-200 ${active === i ? 'text-white' : 'text-white/60 group-hover:text-white/80'}`}
                      >
                        {svc.title}
                      </motion.h3>
                    </div>
                    <AnimatePresence>
                      {active === i && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-white/45 text-sm leading-relaxed mb-3">{svc.desc}</p>
                          <div className="flex flex-wrap gap-2">
                            {svc.tags.map((tag) => (
                              <span key={tag} className="text-[11px] text-white/30 font-medium">{tag}</span>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex-shrink-0 flex items-center justify-center mt-0.5 transition-all duration-200 ${active === i ? 'border-white/40 bg-white/5' : 'border-white/10'}`}>
                    <motion.div
                      animate={{ rotate: active === i ? 90 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <svg className="w-2.5 h-2.5 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                      </svg>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Image */}
          <div className="hidden lg:block sticky top-24">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.02 }}
                transition={{ duration: 0.4 }}
                className="rounded-2xl overflow-hidden aspect-[3/2] border border-white/[0.08]"
              >
                <img
                  src={services[active].img}
                  alt={services[active].title}
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <FadeIn className="mt-10">
          <a href="#about" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors duration-200">
            About us
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
