export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6 py-20">
      <h1 className="text-5xl font-bold leading-tight">
        Több ügyfelet szeretnél?
      </h1>
      <p className="mt-6 text-xl text-white/70 max-w-2xl">
        Videókat és online hirdetéseket készítünk, amik valóban
        ügyfelet hoznak. Nem szakmai halandzsa — tiszta rendszer,
        mérhető eredmények.
      </p>

      <div className="mt-12 grid md:grid-cols-3 gap-6">
        <div className="bg-white/5 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold">Videók, amiket végignéznek</h3>
          <p className="text-white/60 mt-2 text-sm">
            Olyan hirdetési videókat gyártunk, amik megragadják a figyelmet.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold">Hirdetések, amik hoznak</h3>
          <p className="text-white/60 mt-2 text-sm">
            Folyamatosan figyeljük, mi működik, és azt erősítjük tovább.
          </p>
        </div>
        <div className="bg-white/5 p-6 rounded-2xl">
          <h3 className="text-lg font-semibold">Átlátható eredmények</h3>
          <p className="text-white/60 mt-2 text-sm">
            Pontosan látod, melyik kampány mennyi bevételt hoz.
          </p>
        </div>
      </div>
    </main>
  );
}