"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid" />
      <div className="pointer-events-none absolute inset-0 bg-noise" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/10 via-black/25 to-black/60" />

      <Container>
        <div className="relative py-14 md:py-20">
          <div className="grid gap-10 md:grid-cols-12 md:items-center">
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="md:col-span-7"
            >
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
                <span
                  className="h-2 w-2 rounded-full"
                  style={{ background: "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)" }}
                />
                UGC • short-form • TikTok Ads • performance
              </div>

              <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
                Videóval és TikTokkal{" "}
                <span className="text-white/70">építünk növekedést.</span>
              </h1>

              <p className="mt-5 text-base text-white/70 md:text-lg max-w-2xl">
                A kreatív nálunk nem utólag kerül rá a kampányra. Ebből indulunk:{" "}
                <span className="text-white">tesztelünk</span>,{" "}
                <span className="text-white">tanulunk</span>,{" "}
                <span className="text-white">skálázunk</span> — rendszerben.
              </p>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kapcsolat"
                  className="rounded-2xl px-6 py-3 text-sm font-semibold text-black text-center"
                  style={{ background: "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)" }}
                >
                  Beszéljünk
                </Link>

                <Link
                  href="/esettanulmanyok"
                  className="rounded-2xl px-6 py-3 text-sm font-semibold text-white/80 text-center border border-white/15 bg-white/5 hover:bg-white/10 transition"
                >
                  Nézd meg az eredményeket
                </Link>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4">
                {[
                  { k: "Heti tesztek", v: "fix ritmus" },
                  { k: "Kreatív", v: "30–60+/hó" },
                  { k: "Fókusz", v: "TikTok + videó" },
                  { k: "Mérés", v: "GA4 + CAPI" }
                ].map((i) => (
                  <div key={i.k} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-xs text-white/60">{i.k}</div>
                    <div className="mt-1 text-sm font-semibold">{i.v}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.05 }}
              className="md:col-span-5"
            >
              <div className="relative">
                <div
                  className="absolute -inset-6 rounded-[32px] blur-2xl opacity-40"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(46,197,255,0.35), rgba(122,60,255,0.25), rgba(255,46,136,0.28))"
                  }}
                />
                <div className="relative rounded-[28px] border border-white/10 bg-white/5 p-5 backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="text-sm font-semibold">Kreatív dashboard</div>
                    <div className="text-xs text-white/60">live</div>
                  </div>

                  <div className="mt-4 grid gap-3">
                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs text-white/60">Top hook</div>
                      <div className="mt-1 font-semibold">“3 másodperc alatt dönt…”</div>
                      <div className="mt-2 text-xs text-white/60">CTR ↑ • Watch time ↑</div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs text-white/60">CPA</div>
                        <div className="mt-1 text-xl font-semibold">-28%</div>
                        <div className="mt-1 text-xs text-white/60">utóbbi 14 nap</div>
                      </div>
                      <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                        <div className="text-xs text-white/60">ROAS</div>
                        <div className="mt-1 text-xl font-semibold">3.2x</div>
                        <div className="mt-1 text-xs text-white/60">skálázás után</div>
                      </div>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                      <div className="text-xs text-white/60">Következő lépés</div>
                      <div className="mt-1 font-semibold">Új UGC irány + 6 variáció</div>
                      <div className="mt-2 text-xs text-white/60">teszt → tanulság → skála</div>
                    </div>
                  </div>
                </div>

                <div className="absolute -bottom-6 left-6 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 backdrop-blur">
                  <span className="font-semibold">TikTok-first</span> <span className="text-white/60">gondolkodás</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
}
