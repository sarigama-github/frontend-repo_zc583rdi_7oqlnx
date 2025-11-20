import { useEffect, useState } from 'react'

function Feed() {
  const [loading, setLoading] = useState(true)
  const [items, setItems] = useState([])
  const [error, setError] = useState(null)

  const backend = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'

  const load = async () => {
    setLoading(true)
    setError(null)
    try {
      const res = await fetch(`${backend}/api/articles`)
      if (!res.ok) throw new Error(`Failed: ${res.status}`)
      const data = await res.json()
      setItems(data)
    } catch (e) {
      setError(e.message)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    load()
  }, [])

  return (
    <section id="feed" className="relative py-14 sm:py-20">
      <div className="max-w-6xl mx-auto px-6 sm:px-10">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-white">Latest finance stories</h2>
          <div className="flex gap-3">
            <button onClick={load} className="px-4 py-2 rounded-lg bg-white/10 hover:bg-white/15 text-white border border-white/10 transition-colors">
              Refresh
            </button>
            <a href="#how" className="px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white transition-colors">How it works</a>
          </div>
        </div>

        {loading && (
          <p className="text-blue-200">Loading…</p>
        )}
        {error && (
          <p className="text-red-300">{error}</p>
        )}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <a key={it.id || it.link} href={it.link} target="_blank" rel="noreferrer"
               className="group rounded-2xl p-5 bg-slate-800/50 border border-white/10 hover:border-blue-400/40 hover:bg-slate-800/70 transition-all">
              {it.image && (
                <div className="mb-3 rounded-lg overflow-hidden">
                  <img src={it.image} alt="" className="w-full h-40 object-cover group-hover:scale-[1.02] transition-transform" />
                </div>
              )}
              <div className="text-xs text-blue-300/80 mb-1">{new URL(it.link).hostname.replace('www.','')}</div>
              <h3 className="text-white font-semibold leading-snug group-hover:text-blue-200">
                {it.title}
              </h3>
              {it.summary && (
                <p className="mt-2 text-sm text-blue-200/80 line-clamp-3">{it.summary}</p>
              )}
              {it.published_at && (
                <p className="mt-3 text-xs text-blue-300/60">{new Date(it.published_at).toLocaleString()}</p>
              )}
            </a>
          ))}
        </div>

        {!loading && items.length === 0 && !error && (
          <div className="mt-6 text-blue-200">No items yet. Click Refresh to load.</div>
        )}
      </div>
    </section>
  )
}

export default Feed
