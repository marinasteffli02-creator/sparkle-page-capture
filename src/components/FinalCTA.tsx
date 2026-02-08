import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const FinalCTA = () => {
  return (
    <section id="cta-final" className="py-20 md:py-28 px-6">
      <motion.div
        className="max-w-2xl mx-auto text-center"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center justify-center gap-2 mb-8">
          <Leaf className="w-5 h-5 text-primary" />
        </div>

        <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground leading-snug">
          Se você acredita que cuidar da saúde também{" "}
          <span className="text-primary italic">
            sustenta sua escolha de vida
          </span>
          , este guia é para você.
        </h2>

        <p className="text-muted-foreground text-lg mb-10 leading-relaxed">
          Um material educativo, acolhedor e baseado em ciência — para você se
          informar com confiança e continuar sendo quem escolheu ser.
        </p>

        <a
          href="#"
          className="inline-block px-10 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-[var(--shadow-primary)] hover:brightness-105 transition-all duration-300 hover:scale-105"
        >
          Acessar o guia para vegetarianas e veganas
        </a>

        <p className="mt-6 text-xs text-muted-foreground">
          Conteúdo educativo e informativo. Não substitui avaliação ou
          acompanhamento médico.
        </p>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
