import Link from "next/link";
import { services } from "@/content/services";

export default function ServiceCards() {
  return (
    <div>
      <div className="flex items-end justify-between gap-6">
        <div>
          <h2 className="text-2xl font-semibold">Szolgáltatások</h2>
          <p className="mt-2 text-white/60 max-w-2xl">
            A kreatív és a hirdetés nálunk egy csapat. Videó, TikTok, Meta, Google — ugyanazzal a logikával: teszt → tanulság → skála.
          </p>
        </div>
        <Link href="/szolgaltatasok" className="hidden md:inline-flex text-sm text-white/70 hover:text-white">
          Mindet megnézem →
        </Link>
      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <div className="text-lg font-semibold">{s.title}</div>
            <p className="mt-2 text-sm text-white/60">{s.desc}</p>
            <ul className="mt-4 space-y-2 text-sm text-white/70">
              {s.highlights.map((h) => (
                <li key={h} className="flex gap-2">
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/50" />
                  {h}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <Link href="/szolgaltatasok" className="mt-8 inline-flex md:hidden text-sm text-white/70 hover:text-white">
        Mindet megnézem →
      </Link>
    </div>
  );
}
