"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedBarberId?: string;
}

export default function BookingModal({
  isOpen,
  onClose,
  preselectedBarberId,
}: BookingModalProps) {
  const overlayRef = useRef<HTMLDivElement>(null);

  // Close on Escape
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [isOpen, onClose]);

  // Prevent body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={overlayRef}
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={(e) => {
            if (e.target === overlayRef.current) onClose();
          }}
          aria-modal="true"
          role="dialog"
          aria-label="Időpontfoglalás"
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />

          {/* Modal panel */}
          <motion.div
            className="relative z-10 w-full max-w-lg bg-surface rounded-t-2xl sm:rounded-2xl p-8 sm:p-10 border border-border-warm"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 40, opacity: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-muted-warm hover:text-cream transition-colors"
              aria-label="Bezárás"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path
                  d="M15 5L5 15M5 5l10 10"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            <p
              className="font-space-mono text-xs tracking-[0.2em] uppercase text-coral mb-4"
            >
              Foglalás
            </p>
            <h2
              className="font-cormorant text-3xl font-medium text-cream mb-8"
            >
              Válassz időpontot
            </h2>

            {/* Booking flow steps — to be built */}
            <div className="space-y-4">
              <div className="h-12 bg-surface-2 rounded-md animate-pulse" />
              <div className="h-12 bg-surface-2 rounded-md animate-pulse" />
              <div className="h-12 bg-surface-2 rounded-md animate-pulse" />
              <p className="text-center text-muted-warm text-sm font-inter pt-2">
                A foglalási folyamat hamarosan elérhető.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
