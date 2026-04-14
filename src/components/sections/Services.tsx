"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BookingModal from "@/components/booking/BookingModal";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface ServiceItem {
  name: string;
  description: string;
  duration: number;
  price: number;
  highlight?: boolean;
}

const services: ServiceItem[] = [
  {
    name: "Hajvágás",
    description: "Klasszikus vagy modern vágás, géppel és ollóval.",
    duration: 30,
    price: 4500,
  },
  {
    name: "Skin Fade",
    description: "Presztízs-fade, nulláról fokozatosan felfelé.",
    duration: 40,
    price: 5500,
    highlight: true,
  },
  {
    name: "Hajvágás + Szakáll",
    description: "Teljes átalakítás — fej és arc egyszerre.",
    duration: 50,
    price: 6500,
    highlight: true,
  },
  {
    name: "Szakáll igazítás",
    description: "Formázás, egyenesítés, kontúrok élezése.",
    duration: 20,
    price: 2500,
  },
  {
    name: "Gyerek (–12 év)",
    description: "Türelemmel, figyelemmel, és az ő saját tempójukban.",
    duration: 25,
    price: 3000,
  },
  {
    name: "Ifjúsági (12–18 év)",
    description: "Mindaz, amit egy felnőtt vágás, kedvezményesebb áron.",
    duration: 30,
    price: 3500,
  },
  {
    name: "Mosás + szárítás",
    description: "Kiegészítő kezelés bármely vágás mellé.",
    duration: 15,
    price: 1500,
  },
];

export default function Services() {
  const [modalOpen, setModalOpen] = useState(false);
  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null);

  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-5%" });

  return (
    <>
      <section
        ref={ref}
        id="szolgaltatasok"
        className="py-28 md:py-40 bg-ink overflow-hidden"
        aria-label="Szolgáltatások"
      >
        <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 md:mb-20">
            <div>
              {inView && (
                <motion.p
                  className="font-space-mono text-xs tracking-[0.25em] uppercase mb-4"
                  style={{ color: "#E8694A" }}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, ease: EASE }}
                >
                  Szolgáltatások
                </motion.p>
              )}
              {inView && (
                <motion.h2
                  className="font-cormorant font-light text-cream"
                  style={{
                    fontSize: "clamp(2.8rem,6vw,5.5rem)",
                    lineHeight: 1,
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.1, ease: EASE }}
                >
                  Áraink.
                </motion.h2>
              )}
            </div>
            {inView && (
              <motion.p
                className="font-inter text-sm max-w-xs"
                style={{ color: "rgba(240,232,216,0.4)" }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Az árak tartalmazzák a mosást és szárítást, ha szükséges.
                Minden foglalás megerősítést kap.
              </motion.p>
            )}
          </div>

          {/* Service list */}
          <div
            className="divide-y"
            style={{ borderColor: "rgba(240,232,216,0.07)" }}
          >
            {/* Column headers */}
            {inView && (
              <motion.div
                className="hidden md:grid grid-cols-[1fr_auto_auto_auto] gap-8 pb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <p
                  className="font-space-mono text-[10px] tracking-[0.2em] uppercase"
                  style={{ color: "rgba(240,232,216,0.25)" }}
                >
                  Szolgáltatás
                </p>
                <p
                  className="font-space-mono text-[10px] tracking-[0.2em] uppercase text-right"
                  style={{ color: "rgba(240,232,216,0.25)" }}
                >
                  Idő
                </p>
                <p
                  className="font-space-mono text-[10px] tracking-[0.2em] uppercase text-right"
                  style={{ color: "rgba(240,232,216,0.25)" }}
                >
                  Ár
                </p>
                <p
                  className="font-space-mono text-[10px] tracking-[0.2em] uppercase text-right"
                  style={{ color: "rgba(240,232,216,0.25)" }}
                >
                  &nbsp;
                </p>
              </motion.div>
            )}

            {services.map((service, i) => (
              <motion.div
                key={service.name}
                className="group grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-3 md:gap-8 py-6 md:py-7 cursor-default relative"
                onMouseEnter={() => setHoveredIdx(i)}
                onMouseLeave={() => setHoveredIdx(null)}
                initial={{ opacity: 0, y: 12 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.06, ease: EASE }}
              >
                {/* Hover highlight */}
                <motion.div
                  className="absolute inset-0 -mx-4 md:-mx-6 rounded-sm pointer-events-none"
                  animate={{
                    opacity: hoveredIdx === i ? 1 : 0,
                    background: service.highlight
                      ? "rgba(86,99,232,0.04)"
                      : "rgba(240,232,216,0.02)",
                  }}
                  transition={{ duration: 0.2 }}
                />

                {/* Name + desc */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-3">
                    <p
                      className="font-cormorant text-xl md:text-2xl font-light transition-colors duration-200"
                      style={{
                        color:
                          hoveredIdx === i
                            ? "#F0E8D8"
                            : service.highlight
                            ? "rgba(240,232,216,0.9)"
                            : "rgba(240,232,216,0.7)",
                      }}
                    >
                      {service.name}
                    </p>
                    {service.highlight && (
                      <span
                        className="font-space-mono text-[9px] tracking-[0.2em] uppercase px-2 py-0.5 rounded-sm"
                        style={{
                          background: "rgba(86,99,232,0.15)",
                          color: "#5663E8",
                        }}
                      >
                        Népszerű
                      </span>
                    )}
                  </div>
                  <p
                    className="font-inter text-sm"
                    style={{ color: "rgba(240,232,216,0.35)" }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Duration */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:gap-0">
                  <p
                    className="md:hidden font-space-mono text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: "rgba(240,232,216,0.25)" }}
                  >
                    Idő
                  </p>
                  <p
                    className="font-space-mono text-xs text-right"
                    style={{ color: "rgba(240,232,216,0.4)" }}
                  >
                    {service.duration} perc
                  </p>
                </div>

                {/* Price */}
                <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-2 md:gap-0">
                  <p
                    className="md:hidden font-space-mono text-[10px] tracking-[0.15em] uppercase"
                    style={{ color: "rgba(240,232,216,0.25)" }}
                  >
                    Ár
                  </p>
                  <p
                    className="font-cormorant text-xl font-light text-right text-cream"
                  >
                    {service.price.toLocaleString("hu-HU")} Ft
                  </p>
                </div>

                {/* Book button */}
                <div className="flex items-center justify-end">
                  <button
                    onClick={() => setModalOpen(true)}
                    className="font-space-mono text-[10px] tracking-[0.2em] uppercase transition-all duration-200 opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0"
                    style={{ color: "#5663E8" }}
                  >
                    Foglalás →
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Bottom CTA */}
          {inView && (
            <motion.div
              className="mt-16 flex flex-col sm:flex-row items-start sm:items-center gap-6 pt-10 border-t"
              style={{ borderColor: "rgba(240,232,216,0.08)" }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: EASE }}
            >
              <p
                className="font-inter text-sm max-w-sm"
                style={{ color: "rgba(240,232,216,0.4)" }}
              >
                Minden időpont online foglalható. Megerősítő üzenetet küldünk.
              </p>
              <button
                onClick={() => setModalOpen(true)}
                className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden shrink-0"
                style={{ background: "#5663E8", borderRadius: "2px" }}
              >
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
              </button>
            </motion.div>
          )}
        </div>
      </section>

      <BookingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
