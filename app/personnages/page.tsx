export default function Page() {
  return (
    <main className="mx-auto max-w-5xl p-8">
      <h1 className="mb-8 text-4xl font-bold">Personnages</h1>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Keel */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Keel</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Dernier Porteur de Nox. Keel n’est pas un élu glorifié : il est la
            preuve vivante que l’équilibre n’a jamais été détruit, seulement
            enfermé. Traqué par l’Ordre, il cherche la vérité derrière la
            “lumière éternelle”.
          </p>
        </div>

        {/* L'Ordre */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">L’Ordre de la Clarté</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Autorité dominante du monde actuel. Ils contrôlent le récit officiel
            : la lumière a “sauvé” le monde, la Nox était le danger. Leur but est
            simple : empêcher toute remise en cause du Cœur de l’Aube.
          </p>
        </div>

        {/* Nox */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Nox</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Force primordiale de la fin et du repos. Elle n’est pas maléfique :
            elle est nécessaire. Enfermée dans le Cœur de l’Aube, elle persiste,
            consciente, et appelle à être libérée.
          </p>
        </div>

        {/* Les Gardiens */}
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <h2 className="text-2xl font-bold">Les Gardiens</h2>
          <p className="mt-3 text-white/70 leading-relaxed">
            Entités créées pour défendre l’artefact et empêcher toute libération.
            Ils ne négocient pas : ils maintiennent l’état du monde tel qu’il a
            été imposé. Affronter un Gardien, c’est affronter la volonté du
            système.
          </p>
        </div>
      </div>
    </main>
  );
}
