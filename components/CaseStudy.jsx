'use client';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, FadeInStagger, fadeInItem } from './FadeIn';

const projects = [
  { title: 'FinEdge Advisors', year: '2025', img: 'https://framerusercontent.com/images/vTF38nIULuOC9L0kUyVtYKOjxY.jpg?width=1334&height=750' },
  { title: 'BrightPath International Logistics', year: '2025', img: 'https://framerusercontent.com/images/h2AhWtN9l4FSdpd8rdbtk5KLWk.jpg?width=1334&height=750' },
  { title: 'Norse Star', year: '2025', img: 'https://framerusercontent.com/images/wSSi5QqI6FKfkpunJ76YhUf14.jpg?width=1334&height=750' },
  { title: 'EduCore Learning', year: '2025', img: 'https://framerusercontent.com/images/xc3JwQyNE0EcHd5xTwp27Ax5Cbs.jpg?width=1334&height=750' },
  { title: 'CraftWorks Manufacturing', year: '2025', img: 'https://framerusercontent.com/images/aIhvHr5AkuOOk6pZbiSHnTyM.jpg?width=1334&height=750' },
  { title: 'HealthFirst Clinics', year: '2024', img: 'https://framerusercontent.com/images/Y4IdL64jDBdXfChbWUnB9ESXk.jpg?width=1334&height=750' },
];

export function CaseStudySection() {
  const scrollRef = useRef(null);

  return (
    <section className="py-28 border-t border-white/[0.06]" id="work">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="mb-10">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">06</span>
            <span className="section-label">Results</span>
          </div>
        </FadeIn>

        {/* Featured case study */}
        <FadeIn>
          <div className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111] relative mb-10">
            <img
              src="https://framerusercontent.com/images/tTnUarcDGbJHyHnu6aahGScqPHw.jpg?width=2045&height=1665"
              alt="Case study"
              className="w-full h-[300px] md:h-[400px] object-cover opacity-60"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-8">
              <p className="section-label mb-3">Case study</p>
              <h2 className="text-2xl md:text-3xl font-medium mb-4 max-w-[600px] leading-snug">
                LocalRent Co. partnered with Effica to streamline order intake and customer support across 18 locations.
              </h2>

              <div className="flex flex-wrap gap-6 mb-6">
                <div>
                  <p className="text-white/30 text-xs mb-1">Date:</p>
                  <p className="text-white text-sm">Mar 2025</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-1">Industry:</p>
                  <p className="text-white text-sm">Retail & E-commerce</p>
                </div>
                <div>
                  <p className="text-white/30 text-xs mb-1">Challenge:</p>
                  <p className="text-white text-sm">Manual order management & customer support delays</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-8 mb-6">
                <div>
                  <p className="text-4xl font-medium text-white">50+</p>
                  <p className="text-white/40 text-xs mt-1">hours saved monthly</p>
                </div>
                <div>
                  <p className="text-4xl font-medium text-white">+15%</p>
                  <p className="text-white/40 text-xs mt-1">increase in retention</p>
                </div>
              </div>

              {/* Quote */}
              <div className="border-l-2 border-white/20 pl-4 mb-6">
                <p className="text-white/60 text-sm italic leading-relaxed max-w-[520px]">
                  "They didn&apos;t overwhelm us with jargon or endless options. Just a clear plan, executed quickly. We saw measurable results in the first month."
                </p>
                <div className="flex items-center gap-2 mt-3">
                  <img
                    src="https://framerusercontent.com/images/VJa2hrCQ3Nx82HOqQCvk8NvidY.jpg?width=63&height=63"
                    alt="Andrew W."
                    className="w-7 h-7 rounded-full object-cover border border-white/10"
                  />
                  <div>
                    <p className="text-white text-xs font-medium">Andrew W.</p>
                    <p className="text-white/40 text-[11px]">CEO of LocalRent Co.</p>
                  </div>
                </div>
              </div>

              <a href="#" className="inline-flex items-center gap-2 text-sm text-white/60 hover:text-white transition-colors duration-200">
                Read the full story
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </div>
        </FadeIn>

        {/* More projects */}
        <FadeIn>
          <p className="text-white/30 text-xs uppercase tracking-widest mb-5">More projects</p>
        </FadeIn>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((p, i) => (
            <motion.a
              key={i}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07, duration: 0.5 }}
              className="flex-shrink-0 w-64 rounded-xl overflow-hidden border border-white/[0.08] bg-[#111] group"
            >
              <div className="aspect-[16/10] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-1">
                  <p className="text-white text-sm font-medium leading-snug">{p.title}</p>
                  <span className="text-white/25 text-xs">{p.year}</span>
                </div>
                <p className="text-white/40 text-xs mt-2 flex items-center gap-1 group-hover:text-white/60 transition-colors">
                  Read more
                  <svg className="w-2.5 h-2.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                  </svg>
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

const team = [
  {
    role: 'AI Consultant',
    name: 'Alex Carter',
    bio: '15 years in tech strategy',
    tags: ['AI Strategy Development', 'Data Visualization', 'Business Process Analysis'],
    img: 'https://framerusercontent.com/images/sByOEhLZl0z8xDNRK04UwBQo.jpg?width=960&height=960',
  },
  {
    role: 'Implementation Specialist',
    name: 'Emma Lee',
    bio: 'workflow automation expert',
    tags: ['Workflow Automation', 'No-Code Tool Integration', 'User Onboarding'],
    img: 'https://framerusercontent.com/images/kSk9k4eq6Cm05sikzmEEVdr35U.jpg?width=960&height=960',
  },
  {
    role: 'AI Systems Engineer',
    name: 'Kevin D.',
    bio: 'backend & integrations',
    tags: ['Machine Learning Models', 'Backend Development', 'API & System Integrations'],
    img: 'https://framerusercontent.com/images/YKLsQIEQLd2UFQT4KbFSuMeqgxQ.jpg?width=960&height=960',
  },
  {
    role: 'Client Relations',
    name: 'Laura Stern',
    bio: 'your favorite contact',
    tags: ['Project Coordination', 'Technical Documentation', 'Client Communication'],
    img: 'https://framerusercontent.com/images/paw2WHoyD94wwiLTLTiE5N4E.jpg?width=960&height=960',
  },
];

export function TeamSection() {
  return (
    <section className="py-28 border-t border-white/[0.06]" id="team">
      <div className="max-w-[1200px] mx-auto px-6">
        <FadeIn className="mb-12">
          <div className="flex items-center gap-3 mb-5">
            <span className="section-label">07</span>
            <span className="section-label">Who we are</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-medium tracking-[-0.025em] leading-[1.1]">The team</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {team.map((member, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="rounded-2xl overflow-hidden border border-white/[0.08] bg-[#111] p-5"
            >
              <div className="aspect-square rounded-xl overflow-hidden mb-4">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <p className="text-white/30 text-[11px] uppercase tracking-wider mb-1">{member.role}</p>
              <p className="text-white font-medium mb-0.5">{member.name}</p>
              <p className="text-white/40 text-xs mb-4">{member.bio}</p>
              <div className="flex flex-col gap-1.5">
                {member.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block text-[11px] text-white/35 bg-white/[0.04] rounded-full px-3 py-1 border border-white/[0.06] w-fit"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <FadeIn delay={0.3} className="mt-10 flex items-center gap-4 flex-wrap">
          <p className="text-white/40 text-sm">No salespeople. No bots. You&apos;ll speak directly with us.</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-white/[0.12] text-white/60 text-sm hover:border-white/25 hover:text-white transition-all duration-200"
          >
            Start Your Project
            <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </FadeIn>
      </div>
    </section>
  );
}
