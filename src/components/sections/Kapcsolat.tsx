export default function Kapcsolat() {
  return (
    <footer
      id="kapcsolat"
      className="py-24 px-6 md:px-12 lg:px-20"
      style={{ background: "#0E0D0B" }}
      aria-label="Kapcsolat"
    >
      <div className="max-w-5xl">
        <p className="font-space-mono text-xs tracking-[0.25em] uppercase text-coral mb-6">
          Kapcsolat
        </p>
        <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream mb-12">
          Megtalálsz minket.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t pt-12"
          style={{ borderColor: "rgba(240,232,216,0.08)" }}
        >
          <div>
            <p className="font-space-mono text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(240,232,216,0.35)" }}
            >
              Cím
            </p>
            <p className="font-inter text-cream/70 text-sm leading-relaxed">
              Debrecen, Magyarország
              <br />
              {/* Address from client */}
            </p>
          </div>
          <div>
            <p className="font-space-mono text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(240,232,216,0.35)" }}
            >
              Nyitvatartás
            </p>
            <p className="font-inter text-cream/70 text-sm leading-relaxed">
              Hétfő–Szombat
              <br />
              09:00–19:00
            </p>
          </div>
          <div>
            <p className="font-space-mono text-[10px] tracking-[0.2em] uppercase mb-3"
              style={{ color: "rgba(240,232,216,0.35)" }}
            >
              Közösség
            </p>
            <p className="font-inter text-cream/70 text-sm">
              Instagram — @groundbarber
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 flex items-center justify-between border-t"
          style={{ borderColor: "rgba(240,232,216,0.06)" }}
        >
          <p className="font-space-mono text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "rgba(240,232,216,0.2)" }}
          >
            Ground © {new Date().getFullYear()}
          </p>
          <p className="font-space-mono text-[10px] tracking-[0.15em] uppercase"
            style={{ color: "rgba(240,232,216,0.2)" }}
          >
            Debrecen, Hungary
          </p>
        </div>
      </div>
    </footer>
  );
}
