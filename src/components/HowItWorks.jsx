function HowItWorks() {
  const steps = [
    {
      t: 'Discover',
      d: 'We scan public finance sources and tech communities for fresh stories.'
    },
    {
      t: 'Filter',
      d: 'AI narrows down to market-moving, relevant items with basic de-duplication.'
    },
    {
      t: 'Deliver',
      d: 'Your feed updates daily. Hit refresh any time for the latest.'
    },
  ]

  return (
    <section id="how" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8">How it works</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          {steps.map((s) => (
            <div key={s.t} className="rounded-2xl p-6 bg-slate-800/50 border border-white/10">
              <h3 className="text-white font-semibold mb-2">{s.t}</h3>
              <p className="text-blue-200/80">{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
