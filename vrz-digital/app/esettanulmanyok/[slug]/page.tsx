import Container from "@/components/Container";
import { caseStudies } from "@/content/caseStudies";
import { notFound } from "next/navigation";

export default function CaseStudyDetail({ params }: { params: { slug: string } }) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return notFound();

  return (
    <section className="py-14">
      <Container>
        <div className="text-sm text-white/60">{cs.industry}</div>
        <h1 className="mt-2 text-3xl font-semibold">{cs.title}</h1>
        <p className="mt-3 text-white/60 max-w-3xl">{cs.summary}</p>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
          {cs.metrics.map((m) => (
            <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-2xl font-semibold">{m.value}</div>
              <div className="mt-1 text-sm text-white/60">{m.label}</div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-lg font-semibold">Kihívás</h2>
            <p className="mt-2 text-sm text-white/60">{cs.challenge}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-lg font-semibold">Megközelítés</h2>
            <ul className="mt-3 space-y-2 text-sm text-white/60">
              {cs.approach.map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/50" />
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-7">
          <h2 className="text-lg font-semibold">Eredmény</h2>
          <p className="mt-2 text-sm text-white/60">{cs.result}</p>
        </div>
      </Container>
    </section>
  );
}
