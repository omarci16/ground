"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import BookingModal from "@/components/booking/BookingModal";

const EASE = [0.22, 1, 0.36, 1] as [number, number, number, number];

interface Barber {
  id: string;
  name: string;
  role: string;
  specialty: string;
  bio: string;
  since: string;
  gradient: string;
}

const barbers: Barber[] = [
  {
    id: "bence",
    name: "Bence",
    role: "Head Barber",
    specialty: "Skin fade · Modern vágások",
    bio: "Bence az a típus, aki egy vágás közben is pontosan tudja, mit csinál — és közben azt is megkérdezi, mi újság. A skin fade-jei szinte tökéletesek, és ami fontos: figyel arra, hogy amit kérsz, azt kapd meg — nem azt, amit ő gondol neked.",
    since: "2019",
    gradient:
      "radial-gradient(ellipse 100% 80% at 30% 60%, #2A1F1A 0%, #131210 70%)",
  },
  {
    id: "david",
    name: "Dávid",
    role: "Barber",
    specialty: "Klasszikus vágások · Szakáll",
    bio: "Dávid a klasszikusok embere. Ha valaki komolyan veszi a szakáll-igazítást, az ő keze alatt leszel biztonságban. Nyugodt, precíz, és van egy különleges képessége: mindig pontosan tudja, mikor kell hallgatni és mikor kell beszélni.",
    since: "2021",
    gradient:
      "radial-gradient(ellipse 100% 80% at 70% 40%, #1A1F2A 0%, #131210 70%)",
  },
  {
    id: "mate",
    name: "Máté",
    role: "Barber",
    specialty: "Textúrák · Ifjúsági vágások",
    bio: "A csapat legfiatalabb tagja, de a tudása nem mutatja. Máté imádja a textúrált, modern vágásokat — azokat, amelyek másnap is jól néznek ki. Ha nem tudod pontosan, mit szeretnél, ő az, akivel érdemes megbeszélni.",
    since: "2023",
    gradient:
      "radial-gradient(ellipse 100% 80% at 50% 80%, #201A15 0%, #131210 65%)",
  },
];

function BarberCard({
  barber,
  index,
  onBook,
}: {
  barber: Barber;
  index: number;
  onBook: (id: string) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-8%" });
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${
        !isEven ? "lg:[direction:rtl]" : ""
      }`}
    >
      {/* Photo side */}
      <motion.div
        className="relative aspect-[4/5] overflow-hidden"
        style={{ direction: "ltr" }}
        initial={{ opacity: 0, x: isEven ? -32 : 32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, ease: EASE }}
      >
        <div
          className="absolute inset-0"
          style={{ background: barber.gradient }}
        />
        {/* Grain */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.06'/%3E%3C/svg%3E\")",
            backgroundSize: "256px 256px",
            opacity: 0.6,
          }}
        />
        {/* Name overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8"
          style={{
            background:
              "linear-gradient(to top, rgba(19,18,16,0.9) 0%, transparent 100%)",
          }}
        >
          <p
            className="font-space-mono text-[10px] tracking-[0.2em] uppercase"
            style={{ color: "rgba(240,232,216,0.4)" }}
          >
            {barber.role} · {barber.since} óta
          </p>
          <p className="font-cormorant text-3xl font-light text-cream mt-1">
            {barber.name}
          </p>
        </div>
      </motion.div>

      {/* Text side */}
      <motion.div
        className="flex flex-col justify-center px-8 md:px-12 lg:px-16 py-12 lg:py-0"
        style={{
          background: "#1C1915",
          direction: "ltr",
        }}
        initial={{ opacity: 0, x: isEven ? 32 : -32 }}
        animate={inView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 1, delay: 0.15, ease: EASE }}
      >
        <p
          className="font-space-mono text-[10px] tracking-[0.25em] uppercase mb-5"
          style={{ color: "#E8694A" }}
        >
          {barber.specialty}
        </p>
        <h3
          className="font-cormorant text-4xl md:text-5xl font-light text-cream mb-6"
          style={{ lineHeight: 1.05 }}
        >
          {barber.name}
        </h3>
        <p className="font-inter text-sm md:text-base leading-loose mb-10"
          style={{ color: "rgba(240,232,216,0.55)" }}
        >
          {barber.bio}
        </p>

        <button
          onClick={() => onBook(barber.id)}
          className="group self-start relative inline-flex items-center gap-3 px-6 py-3.5 overflow-hidden border"
          style={{ borderColor: "rgba(240,232,216,0.15)", borderRadius: "2px" }}
        >
          <span
            className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
            style={{
              background: "#5663E8",
              transitionTimingFunction: "cubic-bezier(0.4,0,0.2,1)",
            }}
            aria-hidden="true"
          />
          <span className="relative font-space-mono text-[10px] tracking-[0.25em] uppercase text-cream/70 group-hover:text-cream transition-colors duration-300">
            Foglalás — {barber.name}
          </span>
        </button>
      </motion.div>
    </div>
  );
}

export default function Barbers() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedBarber, setSelectedBarber] = useState<string | undefined>();

  const headerRef = useRef<HTMLDivElement>(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-5%" });

  function handleBook(id: string) {
    setSelectedBarber(id);
    setModalOpen(true);
  }

  return (
    <>
      <section
        id="csapat"
        className="bg-ink"
        aria-label="A csapatunk"
      >
        {/* Section header */}
        <div
          ref={headerRef}
          className="px-6 md:px-12 lg:px-20 pt-28 md:pt-40 pb-16 md:pb-20 max-w-6xl mx-auto"
        >
          {headerInView && (
            <>
              <motion.p
                className="font-space-mono text-xs tracking-[0.25em] uppercase mb-4"
                style={{ color: "#E8694A" }}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                A csapatunk
              </motion.p>
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
                Emberek, akik tudják,
                <br />
                <em>mit csinálnak.</em>
              </motion.h2>
            </>
          )}
        </div>

        {/* Barber cards — no horizontal padding, edge-to-edge */}
        <div className="divide-y" style={{ borderColor: "rgba(240,232,216,0.06)" }}>
          {barbers.map((barber, i) => (
            <BarberCard
              key={barber.id}
              barber={barber}
              index={i}
              onBook={handleBook}
            />
          ))}
        </div>

        {/* Bottom CTA strip */}
        <div
          className="px-6 md:px-12 lg:px-20 py-16 md:py-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
          style={{ borderTop: "1px solid rgba(240,232,216,0.06)" }}
        >
          <p
            className="font-inter text-sm max-w-sm"
            style={{ color: "rgba(240,232,216,0.4)" }}
          >
            Nem tudod, melyiket válaszd? Bármelyikük be fog segíteni.
          </p>
          <button
            onClick={() => handleBook("")}
            className="group relative inline-flex items-center gap-3 px-8 py-4 overflow-hidden"
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
        </div>
      </section>

      <BookingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        preselectedBarberId={selectedBarber}
      />
    </>
  );
}
