import Image from "next/image";
import Link from "next/link";

export default function LogoMark() {
  return (
    <Link href="/" className="flex items-center gap-3 select-none">
      <div className="relative h-9 w-9 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
        <Image src="/logo.svg" alt="VRZ Digital" fill className="object-contain p-1" priority />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide">VRZ</div>
        <div className="text-xs text-white/60 -mt-0.5">DIGITAL</div>
      </div>
    </Link>
  );
}
