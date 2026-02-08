import { motion } from "framer-motion";
import { Leaf } from "lucide-react";
import heroBg from "@/assets/hematoveg-hero.jpg";

const Hero = () => {
  const scrollToCTA = () => {
    document.getElementById("cta-final")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Folhas verdes, lentilhas e ervas sobre superfície de madeira"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-[var(--gradient-hero-overlay)]" />

      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-8"
        >
          <Leaf className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Hematoveg
          </span>
          <Leaf className="w-5 h-5 text-primary" />
        </motion.div>

        <motion.h1
          className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6 text-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Ser vegetariana não deveria significar{" "}
          <span className="text-primary italic">viver cansada.</span>
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Informação de qualidade para vegetarianas e veganas que querem cuidar
          do ferro sem abrir mão dos seus valores. Um guia educativo criado por
          uma{" "}
          <strong className="text-foreground">
            médica hematologista vegetariana
          </strong>
          , especialista em anemia e deficiência de ferro.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button
            onClick={scrollToCTA}
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-[var(--shadow-primary)] hover:brightness-105 transition-all duration-300 hover:scale-105"
          >
            Quero acessar o guia
          </button>
        </motion.div>

        <motion.p
          className="mt-6 text-xs text-muted-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.55 }}
        >
          Conteúdo educativo. Não substitui consulta médica.
        </motion.p>
      </div>
    </section>
  );
};

export default Hero;
