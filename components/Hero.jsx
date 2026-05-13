'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

/* ─── Each letter animates up from below the clip ─── */
function AnimatedWord({ word, delay = 0, dimmed = false }) {
  return (
    <span
      className="inline-flex"
      aria-label={word}
      style={{
        color: dimmed ? 'rgba(255,255,255,0.15)' : '#ffffff',
        WebkitTextStroke: dimmed ? '1px rgba(255,255,255,0.06)' : 'none',
      }}
    >
      {word.split('').map((char, i) => (
        <span key={i} className="inline-block overflow-hidden leading-none">
          <motion.span
            className="inline-block"
            initial={{ y: '105%' }}
            animate={{ y: '0%' }}
            transition={{
              duration: 0.9,
              delay: delay + i * 0.045,
              ease: [0.16, 1, 0.3, 1],
            }}
            style={{ willChange: 'transform' }}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/* ─── Live clock ─── */
function LiveClock() {
  const [time, setTime] = useState('--:--');
  useEffect(() => {
    const tick = () => {
      const t = new Date();
      setTime(t.toLocaleTimeString('it-IT', { hour: '2-digit', minute: '2-digit' }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);
  return <span className="tabular-nums">{time}</span>;
}

const avatars = [
  'https://framerusercontent.com/images/G3S93NVRBOPBVRHvuiD7v8mUec.jpg?width=75&height=75',
  'https://framerusercontent.com/images/AxkRNnDGOBIp7ssXlvfLRssOBsI.jpg?width=75&height=75',
  'https://framerusercontent.com/images/rIoYytoloWw5l32qBj1FRQtOUI.jpg?width=75&height=75',
  'https://framerusercontent.com/images/KWxDguvOOnQPeXxMf68OhIFwLY.jpg?width=75&height=75',
];

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col bg-[#080808] overflow-hidden">

      {/* ── Background: grain + vignette ── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#080808] via-[#090807] to-[#080808]" />
        {/* Film grain */}
        <div
          className="absolute inset-0 opacity-[0.4] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
            backgroundSize: '200px',
          }}
        />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_50%,transparent_40%,rgba(0,0,0,0.55)_100%)]" />
        {/* Subtle warm light in center-right */}
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[400px] rounded-full bg-white/[0.015] blur-[120px]" />
      </div>

      {/* ── Topbar / Navbar ── */}
      <motion.div
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="relative z-20 flex items-center justify-between px-5 md:px-8 h-14"
      >
        {/* Logo */}
        <a href="#" className="font-bold text-white text-sm tracking-wide">Effica®</a>

        {/* Center: location + clock */}
        <div className="hidden md:flex items-center gap-1 text-white/30 text-xs font-medium tracking-wide">
          <span>Milano (IT)</span>
          <span className="mx-2 text-white/10">—</span>
          <LiveClock />
        </div>

        {/* Right */}
        <div className="flex items-center gap-5">
          <a href="#work" className="hidden md:block text-white/35 text-xs font-medium hover:text-white/70 transition-colors tracking-wide">
            Our Work <span className="text-white/15">[12]</span>
          </a>
          {/* Hamburger lines */}
          <button aria-label="Menu" className="flex flex-col gap-[5px] group">
            <span className="block w-[20px] h-px bg-white/50 group-hover:bg-white transition-colors duration-200" />
            <span className="block w-[12px] h-px bg-white/50 group-hover:bg-white transition-colors duration-200" />
          </button>
        </div>
      </motion.div>

      {/* ── Giant title ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-between px-4 md:px-6 xl:px-8">
        <div className="mt-2 select-none">
          {/* Line 1 — white */}
          <div
            className="font-black uppercase tracking-[-0.03em] leading-[0.88]"
            style={{ fontSize: 'clamp(68px, 15.5vw, 195px)' }}
          >
            <AnimatedWord word="A CLEAR" delay={0.25} />
          </div>

          {/* Line 2 — dimmed / ghost like Mugen's "STUDIO" */}
          <div
            className="font-black uppercase tracking-[-0.03em] leading-[0.88]"
            style={{ fontSize: 'clamp(68px, 15.5vw, 195px)' }}
          >
            <AnimatedWord word="AI PLAN" delay={0.6} dimmed />
          </div>
        </div>

        {/* ── Bottom triptych: left | card | right ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-end gap-6 pb-8 md:pb-10 pt-4">

          {/* LEFT — social proof + since */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.15, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="self-end"
          >
            <div className="flex items-center gap-2.5 mb-5">
              <div className="flex -space-x-2">
                {avatars.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt=""
                    className="w-7 h-7 rounded-full border-2 border-[#080808] object-cover"
                  />
                ))}
                <div className="w-7 h-7 rounded-full border-2 border-[#080808] bg-white/10 flex items-center justify-center text-[9px] text-white/40 font-medium">
                  You?
                </div>
              </div>
              <div>
                <div className="text-white text-[11px] font-medium">★★★★★ 4.9 / 5</div>
                <div className="text-white/25 text-[10px]">100+ Happy clients</div>
              </div>
            </div>
            <p className="text-white/20 text-xs tracking-widest font-medium">© Since — 2020</p>
          </motion.div>

          {/* CENTER — manager card */}
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 1.05, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="w-full max-w-[240px] mx-auto md:mx-0 rounded-2xl overflow-hidden border border-white/[0.1] bg-[#111]/80 backdrop-blur-md shadow-[0_32px_64px_rgba(0,0,0,0.5)]"
          >
            {/* Portrait */}
            <div className="relative overflow-hidden" style={{ height: 160 }}>
              <img
                src="https://framerusercontent.com/images/VRwQ9uHPGoSubtzvWBwjE2utUDU.jpg?width=902&height=1206"
                alt="Jessica Burns"
                className="w-full h-full object-cover object-top"
                style={{ filter: 'grayscale(15%) brightness(0.85)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111]/60 to-transparent" />

              {/* Slots badge */}
              <div className="absolute top-2.5 left-2.5 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/65 backdrop-blur-sm border border-white/[0.08]">
                <div className="flex items-end gap-[2px]">
                  {[3, 4, 2, 4].map((h, i) => (
                    <span
                      key={i}
                      className={`block w-[2px] rounded-full ${i < 2 ? 'bg-white/80' : 'bg-white/15'}`}
                      style={{ height: h * 2 }}
                    />
                  ))}
                </div>
                <span className="text-[10px] font-semibold text-white">2 slots open</span>
                <span className="text-[10px] text-white/35">Jun&apos;26</span>
              </div>
            </div>

            {/* Body */}
            <div className="p-3.5 border-t border-white/[0.06]">
              <p className="text-white text-sm font-semibold leading-tight">Jessica Burns</p>
              <p className="text-white/35 text-[11px] mb-3">Client Success Manager</p>

              <div className="flex items-center justify-between py-2 border-t border-white/[0.06] mb-3">
                <span className="text-white/35 text-[11px]">First call</span>
                <span className="text-white text-xs font-medium">Free →</span>
              </div>

              <a
                href="#contact"
                className="flex items-center justify-between w-full px-3.5 py-2.5 rounded-xl bg-white text-black text-xs font-bold hover:bg-white/90 active:scale-[0.98] transition-all duration-150"
              >
                Book a 15-Min Call
                <svg className="w-3.5 h-3.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* RIGHT — tagline + CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="self-end"
          >
            <p className="text-sm md:text-[15px] leading-relaxed text-white/55 max-w-[300px] mb-5">
              <span className="text-white font-semibold">We&apos;ve reimagined how AI consulting works.</span>{' '}
              No jargon. No generic advice. Just practical improvements that deliver real results.
            </p>
            <div className="flex flex-wrap gap-2">
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-full bg-white text-black text-xs font-bold hover:bg-white/90 transition-all duration-200 active:scale-95"
              >
                Schedule a free assessment
              </a>
              <a
                href="#how"
                className="px-5 py-2.5 rounded-full border border-white/[0.12] text-white/45 text-xs font-medium hover:border-white/25 hover:text-white/80 transition-all duration-200"
              >
                See how it works
              </a>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Bottom separator */}
      <motion.div
        initial={{ scaleX: 0, originX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.6, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 h-px bg-white/[0.06]"
      />
    </section>
  );
}
