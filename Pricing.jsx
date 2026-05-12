'use client';
import { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import { FadeIn, FadeInStagger, fadeInItem } from './FadeIn';

function CountUp({ target, suffix = '', prefix = '' }) {
  const [val, setVal] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const started = useRef(false);

  if (inView && !started.current) {
    started.current = true;
    let startTime = null;
    const duration = 1600;
    const animate = (ts) => {
      if (!startTime) startTime = ts;
      const progress = Math.min((ts - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      setVal(current);
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }

  return <span ref={ref}>{prefix}{val}{suffix}</span>;
}

const roiStats = [
  { label: 'ROI Timeline', desc: 'Most clients recover their investment within 1.5 months.', value: 45, unit: 'Avg. ROI in', suffix: ' days' },
  { label: 'Time saved', desc: 'On average, clients reduce manual work by 35 hours/month.', value: 35, unit: 'Hours saved every month', suffix: '+' },
  { label: 'Workflow Impact', desc: 'We help businesses automate up to 60% of repetitive workflows.', value: 60, unit: '% of routine tasks automated', suffix: '' },
];

export function StatsSection() {
  return (
    <section className="py-28 border-t border-white/[0.06]" id="metrics">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="mb-14">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">08</span>
            <span className="section-label">Why us?</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1]">Why us</h2>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {roiStats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]"
            >
              <p className="text-white/30 text-xs uppercase tracking-wider mb-2">{s.label}</p>
              <p className="text-white/50 text-sm leading-relaxed mb-5">{s.desc}</p>
              <p className="text-5xl font-medium tracking-tight text-white">
                {s.suffix === '+' ? (
                  <><CountUp target={s.value} />{s.suffix}</>
                ) : s.suffix === ' days' ? (
                  <><CountUp target={s.value} />{s.suffix}</>
                ) : (
                  <><CountUp target={s.value} suffix="%" /></>
                )}
              </p>
              <p className="text-white/30 text-xs mt-2">/{s.unit}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const plans = [
  {
    name: 'Starter Plan',
    sub: 'For small teams or first-time AI users',
    price: '$990',
    features: [
      'AI application plan (PDF)',
      'Implementation of 1 AI automation',
      'Post-setup checklist',
      'Email support for 14 days',
    ],
    cta: 'Get Starter Plan',
    popular: false,
    img: 'https://framerusercontent.com/images/CcAE89d5WvJvlkQvyh3LfLe4wc.jpg?width=444&height=237',
  },
  {
    name: 'Growth Plan',
    sub: 'For companies ready to automate multiple workflows',
    price: '$2,490',
    features: [
      'Full workflow analysis',
      'Roadmap with 3+ AI recommendations',
      'Implementation of up to 3 automations',
      'Staff onboarding materials',
      'Priority support for 30 days',
      'Monthly performance report',
    ],
    cta: 'Book Free Assessment',
    popular: true,
    img: 'https://framerusercontent.com/images/TchfZN3eteASHrO0aCKo2TrwYE.png?width=592&height=446',
  },
  {
    name: 'Custom Enterprise Plan',
    sub: 'For teams with 50+ employees or advanced needs',
    price: 'Custom',
    features: [
      'Full AI strategy',
      'Technical implementation',
      'Maintenance & optimization',
      'Dedicated manager',
      '24/7 support',
    ],
    cta: 'Get Enterprise Plan',
    popular: false,
    img: 'https://framerusercontent.com/images/CcAE89d5WvJvlkQvyh3LfLe4wc.jpg?width=444&height=237',
  },
];

export function PricingSection() {
  const [annual, setAnnual] = useState(false);

  return (
    <section className="py-28 border-t border-white/[0.06]" id="pricing">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="mb-14">
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-3">Pricing.</h2>
          <p className="text-white/40 text-base">You only pay for what you need — after we show you the plan.</p>

          {/* Toggle */}
          <div className="flex items-center gap-3 mt-8">
            <button
              onClick={() => setAnnual(false)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${!annual ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setAnnual(true)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${annual ? 'bg-white text-black' : 'text-white/40 hover:text-white'}`}
            >
              Annual
              <span className="text-[11px] bg-emerald-500/20 text-emerald-400 px-2 py-0.5 rounded-full">Save 20%</span>
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`rounded-2xl overflow-hidden border flex flex-col ${plan.popular ? 'border-white/20 bg-white/[0.05]' : 'border-white/[0.08] bg-[#111]'}`}
            >
              {plan.popular && (
                <div className="bg-white text-black text-xs font-medium text-center py-2 tracking-wide">Popular</div>
              )}

              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden">
                <img src={plan.img} alt={plan.name} className="w-full h-full object-cover opacity-70" />
              </div>

              <div className="p-6 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-lg font-medium text-white mb-1">{plan.name}</h3>
                  <p className="text-white/40 text-sm">{plan.sub}</p>
                </div>

                <div className="mb-6">
                  <span className="text-4xl font-medium text-white tracking-tight">
                    {plan.price === 'Custom' ? 'Custom' : annual ? plan.price.replace(/\$(\d+),?(\d*)/, (_, a, b) => `$${Math.floor(parseInt(a + b.replace(',', '')) * 0.8).toLocaleString()}`) : plan.price}
                  </span>
                  {plan.price !== 'Custom' && <span className="text-white/30 text-sm ml-1">/month</span>}
                </div>

                <div className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, fi) => (
                    <div key={fi} className="flex items-start gap-3">
                      <svg className="w-4 h-4 text-white/40 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/55 text-sm">{f}</span>
                    </div>
                  ))}
                </div>

                <a
                  href="#contact"
                  className={`w-full text-center py-3 rounded-full text-sm font-medium transition-all duration-200 ${plan.popular ? 'bg-white text-black hover:bg-white/90' : 'border border-white/[0.12] text-white/60 hover:border-white/25 hover:text-white'}`}
                >
                  {plan.cta}
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: 'How far in advance should I book?',
    a: 'No. Our process is built for business owners and teams who have no technical background. We explain every step in plain language and handle all technical setup and integrations for you.',
  },
  {
    q: 'How much does the service cost, and what is included?',
    a: 'Pricing depends on your needs and project scope. Each plan includes audit, setup, implementation, and ongoing support. No hidden fees — you\'ll always know what\'s included.',
  },
  {
    q: "What if I don't have a technical team or any technical knowledge?",
    a: "No worries. We handle the entire process from start to finish, so you don't need any technical background. Just share your goals — we'll do the rest.",
  },
  {
    q: 'What happens if I want to cancel the subscription?',
    a: "You can cancel anytime. No long-term lock-ins, and everything we've built for you stays yours.",
  },
  {
    q: "What if I'm not satisfied with the result?",
    a: "We aim for measurable results. If you're not satisfied, we'll adjust the solution or provide a refund depending on the project stage.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-28 border-t border-white/[0.06]" id="faq">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <FadeIn>
            <div className="flex items-center gap-3 mb-5">
              <span className="section-label">12</span>
              <span className="section-label">Help & Info</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1] mb-6">FAQ</h2>

            <div className="flex items-center gap-3 p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06]">
              <img
                src="https://framerusercontent.com/images/rPovAy2J6Q4sllGf3hH7aT3fCk.jpg?width=63&height=63"
                alt="Jessica"
                className="w-10 h-10 rounded-full object-cover border border-white/10 flex-shrink-0"
              />
              <div>
                <p className="text-white/50 text-sm leading-relaxed italic">"My role is to make sure every client feels supported from day one."</p>
                <p className="text-white text-xs font-medium mt-2">Jessica Burns <span className="text-white/30 font-normal">— Client Success Manager</span></p>
              </div>
            </div>

            <div className="mt-8">
              <p className="text-white/30 text-sm mb-4">Still unsure?</p>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.12] text-white/60 text-sm hover:border-white/25 hover:text-white transition-all duration-200"
              >
                Ask a question
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </FadeIn>

          <FadeIn delay={0.1}>
            <div className="space-y-0">
              {faqs.map((faq, i) => (
                <div key={i} className="border-b border-white/[0.06]">
                  <button
                    className="w-full flex items-start justify-between py-5 text-left gap-4"
                    onClick={() => setOpen(open === i ? null : i)}
                  >
                    <span className={`text-sm font-medium transition-colors duration-200 ${open === i ? 'text-white' : 'text-white/65 hover:text-white'}`}>
                      {faq.q}
                    </span>
                    <motion.div
                      animate={{ rotate: open === i ? 45 : 0 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-5 h-5 rounded-full border border-white/[0.15] flex items-center justify-center mt-0.5"
                    >
                      <svg className="w-2.5 h-2.5 text-white/50" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                      </svg>
                    </motion.div>
                  </button>
                  <AnimatePresence>
                    {open === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <p className="text-white/45 text-sm leading-relaxed pb-5">{faq.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
