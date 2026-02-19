import Link from "next/link";

export default function CTA() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 md:p-10">
      <div className="grid gap-6 md:grid-cols-2 md:items-center">
        <div>
          <h3 className="text-2xl font-semibold">Kezdjünk el mérhetően növekedni</h3>
          <p className="mt-2 text-white/60">
            20 perc alatt felmérjük, hol folyik el a teljesítmény (kreatív, célzás, landing, mérés),
            és kapsz egy tiszta következő lépés listát.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row md:justify-end">
          <Link
            href="/kapcsolat"
            className="rounded-2xl px-6 py-3 text-sm font-semibold text-black text-center"
            style={{
              background:
                "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)"
            }}
          >
            Ingyenes konzultáció
          </Link>
          <Link
            href="/szolgaltatasok"
            className="rounded-2xl px-6 py-3 text-sm font-semibold text-white/80 text-center border border-white/15 bg-white/5 hover:bg-white/10 transition"
          >
            Szolgáltatások
          </Link>
        </div>
      </div>
    </div>
  );
}
