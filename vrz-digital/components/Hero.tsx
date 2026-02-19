"use client";

import { motion } from "framer-motion";
import Container from "./Container";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background:
            "radial-gradient(800px 400px at 20% 40%, rgba(46,197,255,0.35), transparent 60%)," +
            "radial-gradient(900px 500px at 70% 30%, rgba(255,46,136,0.25), transparent 55%)," +
            "radial-gradient(900px 500px at 60% 80%, rgba(122,60,255,0.22), transparent 60%)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/10 to-black" />

      <Container>
        <div className="relative py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/70">
              <span
                className="h-2 w-2 rounded-full"
                style={{
                  background:
                    "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)"
                }}
              />
              Videó + TikTok Ads + performance, egy rendszerben
            </div>

            <h1 className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl">
              Kreatív, ami megfog.
              <span className="block text-white/70">
                Performance, ami hoz eredményt.
              </span>
            </h1>

            <p className="mt-6 text-base text-white/70 md:text-lg">
              VRZ Digital: videógyártás, TikTok hirdetések, Meta/Google Ads, CRO, SEO és
              email automatizmusok – a teljes funnelre építve, mérhetően.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kapcsolat"
                className="rounded-2xl px-6 py-3 text-sm font-semibold text-black text-center"
                style={{
                  background:
                    "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)"
                }}
              >
                Ingyenes konzultációt kérek
              </Link>

              <Link
                href="/esettanulmanyok"
                className="rounded-2xl px-6 py-3 text-sm font-semibold text-white/80 text-center border border-white/15 bg-white/5 hover:bg-white/10 transition"
              >
                Eredmények és esettanulmányok
              </Link>
            </div>

            <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                { k: "Kreatív tesztelés", v: "heti ritmusban" },
                { k: "UGC / Short-form", v: "TikTok & Reels" },
                { k: "Mérés", v: "GA4 + CAPI" }
              ].map((i) => (
                <div
                  key={i.k}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4"
                >
                  <div className="text-sm text-white/60">{i.k}</div>
                  <div className="mt-1 font-semibold">{i.v}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
