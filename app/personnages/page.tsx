"use client";

import Image from "next/image";
import { motion } from "framer-motion";

type Personnage = {
  id: string;
  emoji: string;
  name: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
  quote?: string;
};

const personnages: Personnage[] = [
  {
    id: "nox",
    emoji: "🌒",
    name: "NOX",
    subtitle: "L’Ombre Originelle",
    image: "/personnages/point-interrogation-blanc-fond-noir_494516-2500.png",
    paragraphs: [
      "Nox n’est pas née comme une entité consciente.",
      "Elle est une partie de la nuit qui n’a pas été enfermée lors de l’activation de l’artefact.",
      "Fragmentée et incomplète, elle subsiste à l’écart du Cœur, privée de son rôle originel.",
      "Depuis, Nox cherche un réceptacle capable de l’accueillir et de lui permettre d’agir de nouveau.",
    ],


  },

  {
    id: "eon",
    emoji: "👁️",
    name: "ÉON",
    subtitle: "Ancien Porteur de Nox — Gardien du Cœur",
    image: "/personnages/Eon.jpg",
    paragraphs: [
      "Éon fut l’un des porteurs les plus avancés.",
      "Il atteignit l’artefact, là où aucun autre n’était allé aussi loin.",
      "Face à la vérité, il hésita. Détruire le Cœur signifiait accepter une fin irréversible.",
      "Éon choisit la lumière. Il abandonna Nox et rejoignit l’Ordre.",
      "Depuis, il veille sur l’artefact, non par loyauté aveugle, mais parce qu’il craint ce que la nuit pourrait exiger si elle était libérée.",
    ],

    quote: "« La nuit n’est pas une bénédiction. C’est une sentence. »",
  },
  {
    id: "Les Gardiens",
    emoji: "🏛️",
    name: "Les Gardiens",
    subtitle: "Les Architectes de l’Aube",
    image: "/personnages/ordre.jpg",
    paragraphs: [
      "Les Gardiens ne sont pas nés ainsi.",
      "Ils furent choisis par l’Ordre lorsque l’artefact dut fonctionner bien au-delà de ses limites.",
      "Pour contenir la nuit, le Cœur libère une énergie excessive, impossible à stabiliser sans intermédiaire.",
      "Certains acceptèrent d’en devenir les réceptacles.",
      "La lumière les transforma, leur accordant une puissance durable, au prix de ce qu’ils étaient autrefois.",
    ],

    quote: "« Tant que la lumière demeure, le monde survit. »",
  },
  {
    id: "keel",
    emoji: "🔥",
    name: "KEEL",
    subtitle: "L’Anomalie",
    image: "/personnages/keel.jpg",
    paragraphs: [
      "Keel a grandi comme les autres, dans un monde convaincu que la lumière protège et préserve.",
      "Pourtant, depuis l’enfance, ses rêves sont différents. Des visions de mort, de silence, de choses que personne d’autre ne semble percevoir.",
      "Malgré cela, il croit au Cœur. Il veut le protéger, comme tous les habitants.",
      "C’est cette différence, discrète mais persistante, qui attire l’attention de Nox.",
      "Peu à peu, sans en avoir conscience, Keel devient lié à ce qu’il pensait devoir défendre contre tout.",
    ],

    quote:
      "« Si la nuit est une sentence… alors pourquoi a-t-elle existé si longtemps ? »",
  },
];

export default function Page() {
  return (
    <main className="mx-auto max-w-6xl p-8">
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className="mb-10"
      >
        <p className="text-sm tracking-widest text-white/60">
          🌑 LUMEN : L’APRÈS-NUIT
        </p>
        <h1 className="mt-2 text-4xl font-bold">— Personnages —</h1>
        <p className="mt-3 max-w-2xl text-white/70 leading-relaxed">
          Des figures liées à l’équilibre brisé. Certaines cherchent à préserver
          la lumière. D’autres à comprendre ce qu’elle a remplacé.
        </p>
      </motion.header>

      {/* Sections */}
      <div className="space-y-8">
        {personnages.map((p, idx) => (
          <motion.section
            key={p.id}
            id={p.id}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="overflow-hidden rounded-3xl border border-white/10 bg-white/5"
          >
            {/* Image */}
            <div className="relative aspect-[21/9] w-full">
              <Image
                src={p.image}
                alt={p.name}
                fill
                className="object-cover"
                priority={idx === 0}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6">
                <p className="text-sm text-white/80">
                  {p.emoji} <span className="font-semibold">{p.name}</span>
                </p>
                <h2 className="mt-1 text-2xl font-bold text-white">
                  {p.subtitle}
                </h2>
              </div>
            </div>

            {/* Texte */}
            <div className="p-6">
              <div className="space-y-3 text-white/70 leading-relaxed">
                {p.paragraphs.map((para) => (
                  <p key={para}>{para}</p>
                ))}
              </div>

              {p.quote && (
                <blockquote className="mt-6 border-l-2 border-white/20 pl-4 text-white/80 italic">
                  {p.quote}
                </blockquote>
              )}
            </div>
          </motion.section>
        ))}
      </div>
    </main>
  );
}
