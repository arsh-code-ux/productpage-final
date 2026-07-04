import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, MapPin, Sparkles, Award, ChevronRight } from 'lucide-react'

export default function ArtistCardMini({ name = 'Pradip Sarkar', image = '', location = 'Mumbai, India' }) {
  const params = new URLSearchParams({ name, image, location })

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ y: -8, scale: 1.01 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
      className="group relative w-full max-w-4xl overflow-hidden rounded-[30px] border border-slate-200 bg-gradient-to-br from-[#fffdf8] via-white to-[#f3efe6] shadow-[0_24px_70px_rgba(15,23,42,0.12)]"
    >
      <motion.div
        className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(217,164,70,0.18),transparent_30%),radial-gradient(circle_at_bottom_right,rgba(15,118,110,0.10),transparent_32%)]"
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent opacity-70" />
      <motion.div
        className="absolute -left-10 top-8 h-32 w-32 rounded-full bg-amber-300/30 blur-3xl"
        animate={{ x: [0, 20, 0], y: [0, -10, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative p-5 sm:p-6 md:p-8 lg:p-10">
        <div className="grid gap-6 md:grid-cols-[auto,1fr] md:items-start md:gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.06, duration: 0.5 }}
            whileHover={{ scale: 1.04, rotate: 1 }}
            className="relative mx-auto w-[132px] sm:w-[146px] md:w-[156px]"
          >
            <motion.div
              className="absolute -inset-3 rounded-[26px] bg-gradient-to-br from-amber-300 via-yellow-100 to-transparent blur-2xl opacity-70"
              animate={{ scale: [1, 1.08, 1], opacity: [0.65, 0.95, 0.65] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative overflow-hidden rounded-[24px] border-4 border-white bg-slate-100 shadow-[0_18px_34px_rgba(120,53,15,0.18)]">
              <img
                src={image}
                alt={name}
                className="h-[132px] w-[132px] sm:h-[146px] sm:w-[146px] md:h-[156px] md:w-[156px] object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-white/50" />
            </div>

            <motion.div
              animate={{ y: [0, -4, 0], rotate: [0, 8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -right-3 bottom-4 flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 text-white shadow-lg shadow-amber-600/30"
            >
              <Sparkles className="h-4 w-4" />
            </motion.div>
          </motion.div>

          <div className="min-w-0 pt-1 text-center md:text-left">
            <motion.h4
              initial={{ opacity: 0, x: -14 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.12, duration: 0.45 }}
              className="font-serif text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl"
            >
              {name}
            </motion.h4>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.18, duration: 0.45 }}
              className="mt-2 flex items-center justify-center gap-2 text-slate-600 md:justify-start"
            >
              <MapPin className="h-4 w-4 text-amber-600" />
              <span className="text-sm font-medium sm:text-[15px]">{location}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.24, duration: 0.45 }}
              className="mt-4 inline-flex items-center gap-2 rounded-full border border-amber-200/80 bg-white/80 px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
            >
              <Award className="h-4 w-4 text-amber-600" />
              <span>70+ International Exhibitions</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.45 }}
              className="mt-4 max-w-2xl text-sm leading-6 text-slate-600 sm:text-[15px]"
            >
              Contemporary artist specializing in geometric abstraction
            </motion.p>

            <motion.button
              onClick={() => { window.location.href = `/artist?${params.toString()}` }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.38, duration: 0.45 }}
              whileHover={{ y: -3, scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
              className="mt-5 inline-flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-amber-500 via-amber-500 to-amber-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_14px_28px_rgba(217,119,6,0.30)] transition-shadow duration-300 hover:shadow-[0_18px_36px_rgba(217,119,6,0.38)] sm:w-auto"
            >
              <span>Explore Profile</span>
              <motion.span
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.4, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowRight className="h-4 w-4" />
              </motion.span>
            </motion.button>
          </div>
        </div>
      </div>
    </motion.div>
  )
}
