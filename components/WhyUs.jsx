'use client';
import { useRef, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { FadeIn, FadeInStagger, fadeInItem } from './FadeIn';

function CountUp({ target, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1800;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setVal(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, target]);

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const advantages = [
  { num: '01', label: 'Clear, Actionable', sub: 'Strategy' },
  { num: '02', label: 'Proven', sub: 'AI Frameworks' },
  { num: '03', label: 'Hands-On', sub: 'Implementation' },
  { num: '04', label: 'Transparent', sub: 'Costs' },
];

const stats = [
  { value: 12, suffix: 'x', label: 'Faster Approvals' },
  { value: 99.9, suffix: '%', label: 'Uptime' },
  { value: 40, prefix: '+', suffix: '%', label: 'Faster Responses' },
];

export function WhyUsSection() {
  return (
    <section className="py-28 border-t border-white/[0.06]" id="why">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <span className="section-label">03</span>
                <span className="section-label">Why us?</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-3">
                WHY COMPANIES<br />CHOOSE Effica®
              </h2>
              <p className="text-white/40 text-sm mb-10">We make AI adoption simple, strategic, and measurable.</p>
            </FadeIn>

            <FadeInStagger className="space-y-0">
              {advantages.map((adv, i) => (
                <motion.div
                  key={i}
                  variants={fadeInItem}
                  className="flex items-center gap-5 py-4 border-b border-white/[0.06]"
                >
                  <span className="text-white/20 text-xs tracking-wider w-6">{adv.num}</span>
                  <div>
                    <p className="text-white text-sm font-medium">{adv.label}</p>
                    <p className="text-white/40 text-xs">{adv.sub}</p>
                  </div>
                </motion.div>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.3} className="mt-8">
              <p className="text-white/20 text-[11px] tracking-wider uppercase">Source: Client Feedback & Project Data · Apr 2025</p>
            </FadeIn>
          </div>

          {/* Right: stats + phone mockup */}
          <div>
            <FadeInStagger className="grid grid-cols-3 gap-4 mb-10" stagger={0.1}>
              {stats.map((s, i) => (
                <motion.div
                  key={i}
                  variants={fadeInItem}
                  className="p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]"
                >
                  <p className="text-3xl font-medium tracking-tight mb-1 text-white">
                    <CountUp target={typeof s.value === 'number' && s.value % 1 !== 0 ? Math.floor(s.value) : s.value} prefix={s.prefix || ''} suffix={s.suffix} />
                  </p>
                  <p className="text-white/40 text-xs leading-snug">{s.label}</p>
                </motion.div>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.2}>
              <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111] relative p-6">
                <div className="absolute inset-0 opacity-40">
                  <img
                    src="https://framerusercontent.com/images/0iIr9plKeMJd8dBb4O7iHnWw.png?scale-down-to=512&width=676&height=563"
                    alt="gradient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="relative z-10 text-center">
                  <p className="text-white/40 text-xs uppercase tracking-wider mb-2">Real-time AI Control</p>
                  <h3 className="text-xl font-medium mb-3">Your AI, Always in Your Pocket</h3>
                  <p className="text-white/40 text-sm leading-relaxed max-w-[300px] mx-auto mb-6">
                    Run your business smarter — track performance, approve automations, and get instant insights right from your phone.
                  </p>
                  <div className="flex justify-center">
                    <img
                      src="https://framerusercontent.com/images/Weho9bJSdqKf4BiYBpy8LWWY7o.png?width=530&height=762"
                      alt="Phone mockup"
                      className="w-32 drop-shadow-2xl"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  { num: '01/', text: 'Understand your workflow — No jargon, just clear analysis' },
  { num: '02/', text: 'Spot automation opportunities — Specific, relevant use cases' },
  { num: '03/', text: 'We handle integration and ensure smooth operation.' },
  { num: '04/', text: 'Implement & optimize — We handle setup & integration' },
];

const delays = [
  { num: '01/', label: 'Operational tasks stay manual', pct: '+83%', unit: '/workload' },
  { num: '02/', label: 'Competitors move faster', pct: '+55%', unit: '/growth' },
  { num: '03/', label: 'Missed automation opportunities', pct: '+66%', unit: '/opportunities' },
  { num: '04/', label: 'Time wasted on repetitive work', pct: '+32%', unit: '/Time' },
];

export function HowSection() {
  return (
    <section className="py-28 border-t border-white/[0.06]" id="how">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left: process */}
          <div>
            <FadeIn>
              <div className="flex items-center gap-3 mb-5">
                <span className="section-label">05</span>
                <span className="section-label">How we do it</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-3">
                The Fast Track<br />to AI Success
              </h2>
              <p className="text-white/40 text-sm mb-10">No generic advice. No complex dashboards. Just practical improvements.</p>
            </FadeIn>

            <FadeInStagger className="space-y-0 mb-10">
              {steps.map((step, i) => (
                <motion.div
                  key={i}
                  variants={fadeInItem}
                  className="flex items-start gap-4 py-4 border-b border-white/[0.06] group"
                >
                  <span className="text-white/25 text-xs font-medium w-8 flex-shrink-0 mt-0.5">{step.num}</span>
                  <p className="text-white/70 text-sm group-hover:text-white transition-colors duration-200">{step.text}</p>
                </motion.div>
              ))}
            </FadeInStagger>

            <FadeIn delay={0.4}>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 transition-all duration-200"
              >
                Start AI Journey
              </a>
              <p className="mt-4 text-white/30 text-xs">On average, our clients reduce manual work by 35% in the first month.</p>
            </FadeIn>
          </div>

          {/* Right: why delay hurts */}
          <FadeIn delay={0.15}>
            <div className="pt-20 lg:pt-24">
              <p className="text-white/30 text-xs font-medium uppercase tracking-widest mb-6">WHY DELAY HURTS</p>
              <p className="text-white/50 text-sm mb-8 leading-relaxed">The longer you wait, the more expensive it becomes to catch up.</p>

              <div className="space-y-0">
                {delays.map((d, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-white/[0.06]">
                    <div className="flex items-start gap-3">
                      <span className="text-white/20 text-xs w-7">{d.num}</span>
                      <p className="text-white/55 text-sm">{d.label}</p>
                    </div>
                    <div className="text-right flex-shrink-0 ml-4">
                      <span className="text-red-400/80 text-sm font-medium">{d.pct}</span>
                      <span className="text-white/20 text-xs ml-1">{d.unit}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
