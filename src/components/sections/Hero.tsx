"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import BookingModal from "@/components/booking/BookingModal";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function fadeUp(delay: number) {
  return {
    initial: { opacity: 0, y: 28 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.8, delay, ease: EASE },
  };
}

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <section
        className="relative min-h-screen flex flex-col items-start justify-end overflow-hidden"
        aria-label="Hero"
      >
        {/* ── Atmospheric background ────────────────────────────── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 30% 40%, #2A1F1A 0%, #131210 65%)",
          }}
          aria-hidden="true"
        />

        {/* ── Warm vignette ─────────────────────────────────────── */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 120% 100% at 70% 100%, rgba(232,105,74,0.06) 0%, transparent 60%)",
          }}
          aria-hidden="true"
        />

        {/* ── Grain texture ─────────────────────────────────────── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
            opacity: 0.5,
          }}
          aria-hidden="true"
        />

        {/* ── Nav ───────────────────────────────────────────────── */}
        <nav className="absolute top-0 left-0 right-0 flex items-center justify-between px-6 md:px-12 pt-8 z-10">
          <motion.span
            className="font-space-mono text-xs tracking-[0.25em] uppercase"
            style={{ color: "rgba(240,232,216,0.5)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.6 }}
          >
            Ground
          </motion.span>
          <motion.button
            onClick={() => setModalOpen(true)}
            className="font-space-mono text-xs tracking-[0.2em] uppercase transition-colors duration-300"
            style={{ color: "rgba(240,232,216,0.4)" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.6 }}
            aria-label="Időpontfoglalás"
          >
            Foglalás
          </motion.button>
        </nav>

        {/* ── Main content ──────────────────────────────────────── */}
        <div className="relative z-10 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-4xl">
          {/* Location label */}
          <motion.p
            className="font-space-mono text-xs tracking-[0.25em] uppercase mb-6 md:mb-8"
            style={{ color: "#E8694A" }}
            {...fadeUp(0.2)}
          >
            Debrecen
          </motion.p>

          {/* Headline */}
          <motion.h1
            className="font-cormorant leading-[0.95] font-light text-cream mb-6 md:mb-8"
            style={{ fontSize: "clamp(3.2rem, 8vw, 7rem)" }}
            {...fadeUp(0.4)}
          >
            Ahol mindenki
            <br />
            <em>otthon van.</em>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="font-inter text-base md:text-lg leading-relaxed max-w-md mb-10 md:mb-14"
            style={{ color: "rgba(240,232,216,0.55)" }}
            {...fadeUp(0.6)}
          >
            Őszintén szólva, Debrecenben nem sok helyről mondhatom el, hogy
            kávéval kínálnak még mielőtt leülnék. Ez az a hely.
          </motion.p>

          {/* CTA */}
          <motion.div {...fadeUp(0.8)}>
            <button
              onClick={() => setModalOpen(true)}
              className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden"
              style={{ background: "#5663E8", borderRadius: "2px" }}
            >
              {/* Hover fill */}
              <span
                className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                style={{
                  background: "#E8694A",
                  transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
                }}
                aria-hidden="true"
              />
              <span className="relative font-space-mono text-xs tracking-[0.25em] uppercase text-cream">
                Időpontfoglalás
              </span>
              <span
                className="relative font-space-mono text-xs text-cream/60 group-hover:text-cream/80 transition-colors duration-300"
                aria-hidden="true"
              >
                →
              </span>
            </button>
          </motion.div>
        </div>

        {/* ── Bottom rule ───────────────────────────────────────── */}
        <motion.div
          className="absolute bottom-0 left-6 md:left-12 right-6 md:right-12 h-px"
          style={{ background: "rgba(240,232,216,0.06)", originX: 0 }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.4, duration: 1, ease: EASE }}
          aria-hidden="true"
        />

        {/* ── Scroll indicator ──────────────────────────────────── */}
        <motion.div
          className="absolute bottom-8 right-6 md:right-12 flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.6 }}
          aria-hidden="true"
        >
          <span
            className="font-space-mono text-[10px] tracking-[0.2em] uppercase"
            style={{
              color: "rgba(240,232,216,0.25)",
              writingMode: "vertical-rl",
            }}
          >
            Görgetés
          </span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, rgba(240,232,216,0.25), transparent)",
            }}
          />
        </motion.div>
      </section>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
