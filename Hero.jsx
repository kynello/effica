'use client';
import { motion } from 'framer-motion';

const avatars = [
  'https://framerusercontent.com/images/G3S93NVRBOPBVRHvuiD7v8mUec.jpg?width=75&height=75',
  'https://framerusercontent.com/images/AxkRNnDGOBIp7ssXlvfLRssOBsI.jpg?width=75&height=75',
  'https://framerusercontent.com/images/rIoYytoloWw5l32qBj1FRQtOUI.jpg?width=75&height=75',
  'https://framerusercontent.com/images/KWxDguvOOnQPeXxMf68OhIFwLY.jpg?width=75&height=75',
  'https://framerusercontent.com/images/AZyCsbeyJ3cYlMEBl91DwbIRc.jpg?width=75&height=75',
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-end overflow-hidden">
      {/* Top announcement bar */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="absolute top-20 left-0 right-0 flex justify-center z-10 px-6"
      >
        <a
          href="#contact"
          className="flex items-center gap-2 px-4 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] backdrop-blur-sm text-white/60 text-xs hover:border-white/20 hover:text-white/80 transition-all duration-300"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          A 30-minute call to clarify your next steps. Zero obligations
          <svg className="w-3 h-3 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </a>
      </motion.div>

      {/* Hero portrait image */}
      <div className="absolute right-0 top-0 bottom-0 w-[45%] overflow-hidden hidden lg:block">
        <motion.div
          initial={{ scale: 1.05, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="h-full"
        >
          <img
            src="https://framerusercontent.com/images/VRwQ9uHPGoSubtzvWBwjE2utUDU.jpg?width=902&height=1206"
            alt="AI consultant portrait"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        </motion.div>
      </div>

      {/* Hero content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 pb-24 pt-40 w-full">
        <div className="max-w-[640px]">
          {/* Social proof */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center gap-3 mb-10"
          >
            <div className="flex -space-x-2">
              {avatars.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt="client"
                  className="w-8 h-8 rounded-full border-2 border-[#0a0a0a] object-cover"
                />
              ))}
            </div>
            <div>
              <div className="flex items-center gap-1 text-sm font-medium text-white">
                <span>★★★★★</span>
                <span className="ml-1">4.9/5</span>
              </div>
              <p className="text-[11px] text-white/40">Based on 230 verified reviews</p>
            </div>
          </motion.div>

          {/* Main heading */}
          <div className="overflow-hidden mb-4">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-[64px] sm:text-[80px] lg:text-[88px] font-medium leading-[0.95] tracking-[-0.03em] text-white"
            >
              A Clear AI Plan
            </motion.h1>
          </div>
          <div className="overflow-hidden mb-8">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-[64px] sm:text-[80px] lg:text-[88px] font-medium leading-[0.95] tracking-[-0.03em] text-white/30"
            >
              for your business
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="text-white/50 text-lg leading-relaxed mb-10 max-w-[480px]"
          >
            We help businesses apply AI where it actually matters — without the noise.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="px-6 py-3.5 rounded-full bg-white text-black text-sm font-medium hover:bg-white/90 active:scale-95 transition-all duration-200"
            >
              Schedule a free assessment
            </a>
            <a
              href="#how"
              className="px-6 py-3.5 rounded-full border border-white/[0.12] text-white/70 text-sm font-medium hover:border-white/25 hover:text-white transition-all duration-200"
            >
              See how it works
            </a>
          </motion.div>
        </div>

        {/* Bottom scroll hint */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="absolute bottom-8 right-6 hidden lg:flex items-center gap-2 text-white/20 text-xs"
        >
          <div className="w-px h-10 bg-white/10" />
          <span className="rotate-90 origin-left translate-y-5 text-[10px] tracking-widest uppercase">Scroll</span>
        </motion.div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
    </section>
  );
}
