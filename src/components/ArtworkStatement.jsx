import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, Sparkles } from 'lucide-react'

export default function ArtworkStatement({ title = 'Lady and Butterflies', children, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)

  useEffect(() => {
    setOpen(defaultOpen)
  }, [defaultOpen])

  return (
    <div className="mt-5 rounded-2xl border border-[#e7dcc3] bg-gradient-to-br from-white via-[#fffaf1] to-[#f8f3e6] p-4 sm:p-5 shadow-[0_12px_40px_rgba(201,169,110,0.10)]">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#c9a96e]/12 text-[#9f7c44]">
            <Sparkles size={18} />
          </span>
          <h4 className="text-xl sm:text-2xl font-bold text-slate-900">{title}</h4>
        </div>

        <button
          onClick={() => setOpen((s) => !s)}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-[#d7c29a] bg-white px-4 py-2 text-sm font-semibold text-slate-700 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[#c9a96e] hover:text-[#8f6a39]"
        >
          {open ? 'Show less' : 'Read full'}
          <ChevronDown size={16} className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      <motion.div
        initial={false}
        animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
        transition={{ duration: 0.42, ease: 'easeInOut' }}
        className="overflow-hidden text-slate-700"
        style={{ height: open ? 'auto' : 0 }}
      >
        <div className="mt-4 rounded-xl border border-white/70 bg-white/80 p-4 sm:p-5 shadow-inner">
          {children}
        </div>
      </motion.div>
    </div>
  )
}
