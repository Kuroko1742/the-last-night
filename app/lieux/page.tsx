export default function Page() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Lieux</h1>

      <div className="space-y-6">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Lytheris</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Lytheris est la planète sur laquelle se déroule The Last Night. Depuis
            l’activation du Cœur de l’Aube, le monde est maintenu sous une
            lumière artificielle permanente. Le cycle naturel a été brisé.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Les Cités</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Des zones denses, structurées, surveillées. La lumière est partout,
            mais elle ne révèle pas tout : elle impose une version officielle du
            monde. Les ombres existent, coincées entre les structures et les
            règles.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Les Forêts</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Là où la nature résiste encore. La canopée filtre la lumière et crée
            des zones de pénombre. C’est un terrain propice aux murmures et aux
            secrets : ce que l’Ordre ne contrôle pas totalement.
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Le Cœur de l’Aube</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            L’artefact central. Source de la lumière éternelle. Prison consciente
            de la Nox. Il attire, il repousse, et il définit la réalité du monde.
            Tout converge vers lui.
          </p>
        </div>
      </div>
    </main>
  );
}
