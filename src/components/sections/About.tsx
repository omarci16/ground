"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

function reveal(delay = 0) {
  return {
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.9, delay, ease: EASE },
  };
}

function Line({ delay = 0 }: { delay?: number }) {
  return (
    <motion.div
      className="h-px w-full"
      style={{ background: "rgba(240,232,216,0.08)", originX: 0 }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      transition={{ duration: 1, delay, ease: EASE }}
    />
  );
}

export default function About() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section
      ref={ref}
      id="rolunk"
      className="py-28 md:py-40 px-6 md:px-12 lg:px-20 bg-ink overflow-hidden"
      aria-label="Miért mi?"
    >
      <div className="max-w-6xl mx-auto">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div>
            {inView && (
              <motion.p
                className="font-space-mono text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "#E8694A" }}
                {...reveal(0)}
              >
                Miért mi?
              </motion.p>
            )}
            {inView && (
              <motion.h2
                className="font-cormorant font-light text-cream"
                style={{ fontSize: "clamp(2.8rem,6vw,5.5rem)", lineHeight: 1 }}
                {...reveal(0.1)}
              >
                Nem egy átlagos
                <br />
                <em>fodrászat.</em>
              </motion.h2>
            )}
          </div>
          {inView && (
            <motion.p
              className="font-space-mono text-[10px] tracking-[0.2em] uppercase max-w-[12rem] text-right hidden md:block"
              style={{ color: "rgba(240,232,216,0.2)" }}
              {...reveal(0.3)}
            >
              Debrecen,<br />Magyarország
            </motion.p>
          )}
        </div>

        {/* Top divider */}
        {inView && <Line delay={0.2} />}

        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-12 lg:gap-24 mt-16 md:mt-20">
          {/* Left — decorative element */}
          {inView && (
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              {/* Abstract warm rectangle */}
              <div
                className="w-full aspect-[3/4] rounded-sm relative overflow-hidden"
                style={{ background: "#1C1915" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 100% 80% at 30% 70%, rgba(232,105,74,0.15) 0%, transparent 60%)",
                  }}
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(ellipse 80% 60% at 80% 20%, rgba(86,99,232,0.08) 0%, transparent 50%)",
                  }}
                />
                {/* Vertical label */}
                <div className="absolute bottom-6 left-6">
                  <p
                    className="font-space-mono text-[10px] tracking-[0.25em] uppercase"
                    style={{
                      color: "rgba(240,232,216,0.2)",
                      writingMode: "vertical-rl",
                    }}
                  >
                    Ground Barber
                  </p>
                </div>
                {/* Corner accent */}
                <div
                  className="absolute top-6 right-6 w-8 h-8 border"
                  style={{ borderColor: "rgba(232,105,74,0.3)" }}
                />
              </div>
            </motion.div>
          )}

          {/* Right — prose */}
          <div className="flex flex-col justify-center gap-8">
            {inView && (
              <>
                <motion.p
                  className="font-cormorant text-xl md:text-2xl font-light leading-relaxed"
                  style={{ color: "rgba(240,232,216,0.85)" }}
                  {...reveal(0.3)}
                >
                  Volt egy pont, amikor rájöttem, hogy nem azért járok vissza
                  ide, mert közel van — hanem mert itt minden egyes alkalommal
                  van valami, ami miatt érdemes. Hogy az ajtón belépve már
                  kérdezik, kérsz-e kávét, az nem marketing. Csak ennyiek.
                </motion.p>

                <motion.p
                  className="font-inter text-base leading-loose"
                  style={{ color: "rgba(240,232,216,0.5)" }}
                  {...reveal(0.45)}
                >
                  A Ground nem próbál nagynak látszani. Nincs túldesignolt
                  enteriőr, nincs fehér márvánnyal borított recepció. Van viszont
                  egy tér, ahol a zenét te is ismered, ahol a fiúk emlékeznek
                  arra, hogyan szereted a hajadat, és ahol nem érzed azt, hogy
                  valakinek útban vagy.
                </motion.p>

                <motion.p
                  className="font-inter text-base leading-loose"
                  style={{ color: "rgba(240,232,216,0.5)" }}
                  {...reveal(0.55)}
                >
                  Debrecenben ritkán találsz ilyet: profi munkát, barátságos
                  arcokkal. Általában az egyik ott van, a másik nem. Itt mindkettő
                  alapértelmezett.
                </motion.p>

                {/* Stats row */}
                <motion.div
                  className="grid grid-cols-3 gap-6 pt-6 border-t"
                  style={{ borderColor: "rgba(240,232,216,0.08)" }}
                  {...reveal(0.65)}
                >
                  {[
                    { n: "5+", label: "Év tapasztalat" },
                    { n: "2\u202Fezer+", label: "Elégedett vendég" },
                    { n: "100%", label: "Visszatérő arány" },
                  ].map(({ n, label }) => (
                    <div key={label}>
                      <p
                        className="font-cormorant text-3xl md:text-4xl font-light text-cream"
                      >
                        {n}
                      </p>
                      <p
                        className="font-space-mono text-[10px] tracking-[0.15em] uppercase mt-1"
                        style={{ color: "rgba(240,232,216,0.3)" }}
                      >
                        {label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
