import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

const Hero = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-16 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-10"
        >
          <Leaf className="w-5 h-5 text-primary" />
          <span className="text-sm font-medium tracking-widest uppercase text-primary">
            Hematoveg
          </span>
          <Leaf className="w-5 h-5 text-primary" />
        </motion.div>

        <motion.h1
          className="font-display text-3xl sm:text-4xl md:text-5xl font-bold leading-snug mb-6 text-foreground"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
        >
          Se você acredita que cuidar da saúde também{" "}
          <span className="text-primary italic">
            sustenta sua escolha de vida
          </span>
          , este guia é para você.
        </motion.h1>

        <motion.p
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          Um material educativo, acolhedor e baseado em ciência — para você se
          informar com confiança e continuar sendo quem escolheu ser.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <button
            onClick={scrollToForm}
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
