import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Rólunk</h1>
        <p className="mt-3 text-white/60 max-w-3xl">
          A VRZ Digital videó- és performance fókuszú csapat. Nálunk a kreatív nem kiegészítő — ebből indul minden.
          Heti tesztek, gyors iterációk, skálázás, amikor működik.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {[
            { title: "Kreatív rendszer", desc: "Hookok, irányok, variációk — ritmusra és tanulságokra építve." },
            { title: "Mérés rendben", desc: "GA4 + CAPI alap, tiszta konverziók. Hogy tudd, mi működik és miért." },
            { title: "Gyors lépések", desc: "Ami hoz, azt skálázzuk. Ami nem, abból tanulunk és megyünk tovább." }
          ].map((c) => (
            <div key={c.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-xl font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-white/60">{c.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
