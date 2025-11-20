import Spline from '@splinetool/react-spline'

function Hero() {
  return (
    <section className="relative min-h-[80vh] w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/C5lv0-cXORBFwnsP/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 sm:px-10">
        <div className="backdrop-blur-sm bg-slate-900/40 border border-white/10 rounded-2xl p-6 sm:p-10 max-w-2xl">
          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white drop-shadow-[0_6px_40px_rgba(59,130,246,0.35)]">
            Finance content, found and refreshed daily
          </h1>
          <p className="mt-5 text-lg sm:text-xl text-blue-200/90">
            An AI automation that scouts trusted sources, filters by relevance, and keeps your feed current—automatically.
          </p>
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a href="#feed" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-blue-500 hover:bg-blue-600 text-white font-semibold shadow-lg shadow-blue-500/20 transition-colors">
              View Latest Feed
            </a>
            <a href="#how" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-white/10 hover:bg-white/15 text-white font-semibold border border-white/15 transition-colors">
              How it works
            </a>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/20 to-slate-950/80" />
    </section>
  )
}

export default Hero
