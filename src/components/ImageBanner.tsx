import { motion } from "framer-motion";
import heroBg from "@/assets/hematoveg-hero.jpg";

const ImageBanner = () => {
  const scrollToForm = () => {
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="px-6 pb-16 md:pb-24">
      <motion.div
        className="max-w-3xl mx-auto"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
      >
        <div className="rounded-2xl overflow-hidden shadow-[var(--shadow-soft)] border border-border">
          <img
            src={heroBg}
            alt="Folhas verdes, lentilhas e ervas — alimentos ricos em ferro para vegetarianas"
            className="w-full h-56 sm:h-72 md:h-80 object-cover"
          />
          <div className="bg-card p-6 md:p-8 text-center">
            <p className="text-muted-foreground text-sm md:text-base mb-5 leading-relaxed">
              Informação de qualidade para vegetarianas e veganas que querem
              cuidar do ferro sem abrir mão dos seus valores.
            </p>
            <button
              onClick={scrollToForm}
              className="px-8 py-3.5 rounded-full bg-primary text-primary-foreground font-semibold shadow-[var(--shadow-primary)] hover:brightness-105 transition-all duration-300 hover:scale-105"
            >
              Quero acessar o guia
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default ImageBanner;
