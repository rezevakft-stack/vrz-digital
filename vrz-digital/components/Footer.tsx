import Container from "./Container";
import { site } from "@/lib/site";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <Container>
        <div className="py-10 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="text-sm text-white/60">© {new Date().getFullYear()} {site.name}. Minden jog fenntartva.</div>
          <div className="flex gap-5 text-sm">
            <Link className="text-white/60 hover:text-white" href="/szolgaltatasok">Szolgáltatások</Link>
            <Link className="text-white/60 hover:text-white" href="/esettanulmanyok">Esettanulmányok</Link>
            <Link className="text-white/60 hover:text-white" href="/kapcsolat">Kapcsolat</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
