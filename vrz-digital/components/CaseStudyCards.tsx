import Link from "next/link";
import { caseStudies } from "@/content/caseStudies";

export default function CaseStudyCards() {
  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Esettanulmányok</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            Röviden és tisztán. Mi volt a gond, mit csináltunk, mi lett belőle.
          </p>
        </div>
        <Link href="/esettanulmanyok" className="hidden md:inline-flex text-sm text-white/70 hover:text-white">
          Összes →
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {caseStudies.map((c) => (
          <Link
            key={c.slug}
            href={`/esettanulmanyok/${c.slug}`}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition"
          >
            <div className="text-sm text-white/60">{c.industry}</div>
            <div className="mt-1 text-lg font-semibold">{c.title}</div>
            <p className="mt-2 text-sm text-white/60">{c.summary}</p>

            <div className="mt-5 grid grid-cols-3 gap-3">
              {c.metrics.map((m) => (
                <div key={m.label} className="rounded-xl border border-white/10 bg-black/30 p-3">
                  <div className="font-semibold">{m.value}</div>
                  <div className="text-xs text-white/60">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="mt-5 text-sm text-white/70 group-hover:text-white">Megnézem →</div>
          </Link>
        ))}
      </div>
    </div>
  );
}
