import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Palette } from 'lucide-react';

export default function ArtistInfoCard() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
      {/* Main Biography */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="lg:col-span-2 bg-white rounded-xl shadow-lg p-8"
      >
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="w-6 h-6 text-slate-700" />
          <h2 className="font-serif text-3xl font-extrabold text-slate-900">Biography</h2>
        </div>
        <div className="prose prose-slate max-w-none">
          <p className="text-slate-700 leading-relaxed mb-4">
            <strong>PRADIP SARKAR</strong> is an eminent artist of international repute whose geometric abstraction masterpieces adorn many corporate houses in India and abroad and whose works are included in numerous prestigious collections such as Lalit Kala Akademi.
          </p>
          <p className="text-slate-700 leading-relaxed mb-4">
            Pradip's palette is warm, inviting and vibrantly expressive; his brush strokes speak of serenity and a characteristic dynamism that reflects a frenetic pace and the multitude of life's elements. Working with themes of contemporary life, he focuses on spiritual and cultural aspects of society. His work typically reflects his philosophy of life, his learning, and his leanings towards music and harmony; observation becomes the subject of his canvases as he composes layered geometric boxed forms.
          </p>
          <blockquote className="border-l-4 border-slate-900 pl-6 my-6 italic text-slate-800">
            "Art is the expression of my life story; it allows me to share what I have learned through experience and observation."
          </blockquote>
          <p className="text-slate-700 leading-relaxed mb-4">
            For him, art is divine — his love for music and harmony reveals itself in his works. He believes music is an agreeable harmony for the honour of God and a permissible delight of the soul. Mostly his work is figurative abstraction, saturated with many shades and illuminated palettes within intricate geometric boxed and paper-curving forms.
          </p>
          <p className="text-slate-700 leading-relaxed">
            His works are in collections across Germany, the USA, Dubai and India, and in many corporate and institutional collections including Lalit Kala Akademi and IIT/ISM Dhanbad. Pradip presently lives and works in Mumbai, Maharashtra, India.
          </p>
        </div>
      </motion.div>

      {/* Sidebar - Awards & Recognition */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="space-y-6"
      >
        {/* Awards */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Award className="w-6 h-6 text-amber-600" />
            <h3 className="font-serif text-2xl font-extrabold text-slate-900">Awards & Honors</h3>
          </div>
          <ul className="space-y-3">
            <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">Lalit Kala Akademi Recognition</li>
            <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">International Contemporary Artist Award</li>
            <li className="text-slate-700 text-sm leading-relaxed">Multiple prestigious titles and honors</li>
          </ul>
        </div>
        {/* Collections */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <Palette className="w-6 h-6 text-purple-600" />
            <h3 className="font-serif text-2xl font-extrabold text-slate-900">Collections</h3>
          </div>
          <ul className="space-y-3">
            <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">Lalit Kala Akademi, India</li>
            <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">IIT/ISM Dhanbad</li>
            <li className="text-slate-700 text-sm leading-relaxed pb-3 border-b border-slate-100">Corporate Collections: Germany, USA, Dubai</li>
            <li className="text-slate-700 text-sm leading-relaxed">Private Collections Worldwide</li>
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
