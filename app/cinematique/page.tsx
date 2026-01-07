"use client";

import { motion } from "framer-motion";

export default function Cinematique() {
  return (
    <main className="min-h-screen px-6 py-12">
      <section className="mx-auto max-w-5xl">
        {/* Header */}
        <motion.header
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <p className="text-sm tracking-widest text-white/60">
            🎬 LUMEN : APRÈS LA NUIT
          </p>
          <h1 className="mt-2 text-4xl font-bold text-white">
            Cinématique
          </h1>
          <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
            Bande-annonce officielle du jeu.
          </p>
        </motion.header>

        {/* Video container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="overflow-hidden rounded-3xl border border-white/10 bg-black"
        >
          <video
            src="/videos/teaser.mp4"
            controls
            autoPlay={false}
            muted={false}
            playsInline
            className="w-full h-auto"
          />
        </motion.div>

        {/* Caption */}
        <p className="mt-4 text-sm text-white/50">
          Teaser — contenu en cours de développement.
        </p>
      </section>
    </main>
  );
}
