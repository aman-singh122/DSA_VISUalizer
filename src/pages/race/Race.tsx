import AlgorithmRace from "./algorithm-race"

export default function race() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200 dark:from-black dark:via-slate-950 dark:to-black py-12 mt-10">
      {/* Background accents */}
      <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-purple-500/20 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -right-32 h-96 w-96 rounded-full bg-blue-500/20 blur-3xl" />

      <div className="relative container mx-auto px-4">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
            Algorithm{" "}
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Race Mode
            </span>
          </h1>
          <p className="mt-3 max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            Watch algorithms compete in real time and compare their performance
            step by step.
          </p>
        </div>

        {/* Race Arena */}
        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white/70 dark:bg-slate-900/70 backdrop-blur-xl shadow-xl p-4 md:p-6">
          <AlgorithmRace />
        </div>
      </div>
    </div>
  )
}
