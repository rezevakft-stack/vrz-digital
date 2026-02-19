export default function Testimonials() {
  const items = [
    {
      quote:
        "Végre nem csak kampány van, hanem kreatív rendszer. Heti tesztek, tiszta következtetések, gyors skálázás.",
      who: "Marketing lead"
    },
    {
      quote:
        "A videók nem „szépek”, hanem hirdetésre vannak kitalálva. Ez érződik a teljesítményen.",
      who: "eCommerce tulajdonos"
    },
    {
      quote:
        "Ritka, hogy ennyire összeér a mérés, a landing és a kreatív. Sokkal átláthatóbb lett minden.",
      who: "SaaS growth"
    }
  ];

  return (
    <div>
      <h2 className="text-2xl font-semibold">Visszajelzések</h2>
      <p className="mt-2 text-white/60 max-w-2xl">
        Röviden: kreatív + performance = kontrollált növekedés.
      </p>

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
