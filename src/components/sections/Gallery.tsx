export default function Gallery() {
  return (
    <section
      id="galeria"
      className="py-32 px-6 md:px-12 lg:px-20"
      style={{ background: "#1C1915" }}
      aria-label="Galéria"
    >
      <p className="font-space-mono text-xs tracking-[0.25em] uppercase text-coral">
        Galéria
      </p>
      <h2 className="font-cormorant text-5xl md:text-6xl font-light text-cream mt-4">
        A munka maga.
      </h2>
      {/* Masonry gallery — coming soon, awaiting client photos */}
    </section>
  );
}
