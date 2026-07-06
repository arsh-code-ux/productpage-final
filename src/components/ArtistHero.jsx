import React from 'react';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';

export default function ArtistHero({ name, image, location }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8 glass"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
        {/* Artist Image */}
        <div className="lg:col-span-2 bg-gradient-to-br from-red-50 to-orange-50 p-8 flex items-center justify-center">
          <div className="relative w-full h-full flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-2xl blur-3xl" />
            <img
              src={image}
              alt={name}
              className="relative w-full max-w-md h-auto aspect-square rounded-2xl object-cover ring-8 ring-white shadow-2xl hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
        {/* Artist Info */}
        <div className="lg:col-span-3 p-8 md:p-12">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
            <h1 className="font-serif text-5xl md:text-6xl text-slate-900 mb-3 font-extrabold">{name}</h1>
            <div className="flex items-center gap-2 text-slate-600 mb-6">
              <MapPin className="w-5 h-5" />
              <span className="text-lg">{location}</span>
            </div>
            <div className="flex flex-wrap gap-3 mb-8">
              <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">Geometric Abstraction</span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">Contemporary Art</span>
              <span className="px-4 py-2 bg-slate-100 rounded-full text-sm font-medium text-slate-700">70+ Exhibitions</span>
            </div>
            <p className="text-slate-700 leading-relaxed text-lg">
              PRADIP was born in Dhanbad state of Jharkhand, India. He is a commerce graduate from Ranchi University and holds a diploma in fine art from the British Institute, Mumbai. Pradip is a gifted artist and a well-known face in the Indian contemporary art world since 1995, with over 70 exhibitions at significant venues.
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
