export default function StatRow() {
  const stats = [
    { label: "Kreatív variáció / hó", value: "30–60+" },
    { label: "Fókusz", value: "TikTok + videó" },
    { label: "Módszer", value: "Teszt → tanulság → skála" },
    { label: "Cél", value: "Mérhető növekedés" }
  ];

  return (
    <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
      {stats.map((s) => (
        <div key={s.label} className="rounded-2xl border border-white/10 bg-white/5 p-5">
          <div className="text-2xl font-semibold">{s.value}</div>
          <div className="mt-1 text-sm text-white/60">{s.label}</div>
        </div>
      ))}
    </div>
  );
}
