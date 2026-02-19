export default function Testimonials() {
  const items = [
    { quote: "Végre nem “érzésre” megy. Heti tesztek, tiszta tanulságok, gyors lépések — és látszik az eredmény.", who: "Marketing lead" },
    { quote: "A videók nem csak szépek, hanem hirdetésre vannak kitalálva. Ég és föld.", who: "eCommerce tulajdonos" },
    { quote: "Ritka, hogy ennyire összeér a kreatív, a mérés és a kampány. Sokkal átláthatóbb lett minden.", who: "SaaS growth" }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Visszajelzések</h2>
      <p className="mt-2 text-white/60 max-w-2xl">Nem varázslat. Rendszer.</p>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {items.map((t) => (
          <div key={t.who} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-sm text-white/70">“{t.quote}”</div>
            <div className="mt-4 text-sm text-white/60">{t.who}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
