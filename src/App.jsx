import Hero from './components/Hero'
import Feed from './components/Feed'
import HowItWorks from './components/HowItWorks'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <Hero />
      <Feed />
      <HowItWorks />

      <footer className="py-10 border-t border-white/10 mt-10">
        <div className="max-w-6xl mx-auto px-6 sm:px-10 text-sm text-blue-300/70 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p>AI Finance Automation • Updated daily</p>
          <a href="/test" className="hover:text-white">System status</a>
        </div>
      </footer>
    </div>
  )
}

export default App
