import Container from "@/components/Container";
import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudiesPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Esettanulmányok</h1>
        <p className="mt-3 text-white/60 max-w-3xl">
          Röviden és tisztán. Mi volt a gond, mit csináltunk, mi lett belőle.
        </p>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {caseStudies.map((c) => (
            <Link key={c.slug} href={`/esettanulmanyok/${c.slug}`}
              className="rounded-2xl border border-white/10 bg-white/5 p-7 hover:bg-white/10 transition">
              <div className="text-sm text-white/60">{c.industry}</div>
              <div className="mt-1 text-xl font-semibold">{c.title}</div>
              <p className="mt-2 text-sm text-white/60">{c.summary}</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                {c.metrics.map((m) => (
                  <div key={m.label} className="rounded-xl border border-white/10 bg-black/30 p-3">
                    <div className="font-semibold">{m.value}</div>
                    <div className="text-xs text-white/60">{m.label}</div>
                  </div>
                ))}
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
