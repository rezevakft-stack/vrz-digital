import Container from "@/components/Container";
import { services } from "@/content/services";

export default function ServicesPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Szolgáltatások</h1>
        <p className="mt-3 text-white/60 max-w-3xl">
          Videó + TikTok + performance — egy rendszerben. A kreatívból indulunk, és addig megyünk, amíg mérhetően jobb lesz.
        </p>
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {services.map((s) => (
            <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-7">
              <div className="text-xl font-semibold">{s.title}</div>
              <p className="mt-2 text-sm text-white/60">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {s.highlights.map((h) => (
                  <span key={h} className="rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-white/70">{h}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
