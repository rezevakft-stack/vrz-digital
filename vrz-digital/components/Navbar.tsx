import Link from "next/link";
import Container from "./Container";
import LogoMark from "./LogoMark";

const nav = [
  { href: "/szolgaltatasok", label: "Szolgáltatások" },
  { href: "/esettanulmanyok", label: "Esettanulmányok" },
  { href: "/rolunk", label: "Rólunk" },
  { href: "/kapcsolat", label: "Kapcsolat" }
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/70 backdrop-blur">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="select-none">
            <LogoMark />
          </Link>

          <nav className="hidden items-center gap-7 md:flex">
            {nav.map((i) => (
              <Link
                key={i.href}
                href={i.href}
                className="text-sm text-white/70 hover:text-white transition"
              >
                {i.label}
              </Link>
            ))}
            <Link
              href="/kapcsolat"
              className="rounded-2xl px-4 py-2 text-sm font-semibold text-black"
              style={{
                background:
                  "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)"
              }}
            >
              Ajánlatot kérek
            </Link>
          </nav>

          <Link
            href="/kapcsolat"
            className="md:hidden rounded-xl px-3 py-2 text-sm font-semibold text-black"
            style={{
              background:
                "linear-gradient(135deg, #2EC5FF 0%, #7A3CFF 45%, #FF2E88 100%)"
            }}
          >
            Ajánlat
          </Link>
        </div>
      </Container>
    </header>
  );
}
