import Container from "@/components/Container";
import { site } from "@/lib/site";

export default function ContactPage() {
  return (
    <section className="py-14">
      <Container>
        <h1 className="text-3xl font-semibold">Kapcsolat</h1>
        <p className="mt-3 text-white/60 max-w-3xl">
          Írj pár sort: mit árulsz, mi a cél, és hol tartasz most (TikTok/Meta/Google). 1 kör alatt kiderül, mi a következő lépés.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-7">
            <h2 className="text-lg font-semibold">Elérhetőség</h2>
            <div className="mt-3 text-sm text-white/70">Email: <span className="text-white">{site.email}</span></div>
            <div className="mt-6 text-sm text-white/60">
              Tipp: írd bele, van-e már videós anyagod, és kb. mekkora a havi büdzsé (ha van).
            </div>
          </div>

          <form className="rounded-2xl border border-white/10 bg-white/5 p-7"
            action="https://formspree.io/f/your-id" method="POST">
            <h2 className="text-lg font-semibold">Üzenet</h2>
            <div className="mt-4 grid gap-3">
              <input name="name" placeholder="Név"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/30" />
              <input type="email" name="email" placeholder="Email"
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/30" />
              <textarea name="message" placeholder="Miben segíthetünk?" rows={6}
                className="rounded-xl border border-white/10 bg-black/30 px-4 py-3 text-sm outline-none focus:border-white/30" />
              <button type="submit"
                className="rounded-2xl px-6 py-3 text-sm font-semibold text-black"
                style={{ background: "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)" }}>
                Üzenet küldése
              </button>
            </div>
            <p className="mt-3 text-xs text-white/50">
              (Formspree ID-t cseréld ki, vagy szólj és adok Resend/SMTP megoldást.)
            </p>
          </form>
        </div>
      </Container>
    </section>
  );
}
