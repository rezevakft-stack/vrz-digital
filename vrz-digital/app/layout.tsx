import "./globals.css";
import Image from "next/image";
import Link from "next/link";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="hu">
      <body>
        <header className="p-6 flex justify-between items-center max-w-6xl mx-auto">
          <Link href="/">
            <Image src="/logo.png" alt="VRZ Digital" width={160} height={50} />
          </Link>
          <nav className="space-x-6 text-sm text-white/70">
            <Link href="/">Főoldal</Link>
            <Link href="/szolgaltatasok">Szolgáltatások</Link>
            <Link href="/kapcsolat">Kapcsolat</Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}