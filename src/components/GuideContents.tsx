import { motion } from "framer-motion";
import { ClipboardCheck, BookOpen, Gift } from "lucide-react";

const items = [
  {
    icon: ClipboardCheck,
    title: "Checklist prático",
    description:
      "Para você organizar e reconhecer possíveis sinais e sintomas relacionados à deficiência de ferro.",
  },
  {
    icon: BookOpen,
    title: "Mini guia educativo",
    description:
      "Explicações claras e acessíveis sobre deficiência de ferro e anemia, baseadas em ciência.",
  },
  {
    icon: Gift,
    title: "Bônus: Curadoria vegana",
    description:
      "Uma seleção especial de produtos veganos e cruelty free — alimentos, suplementos e itens de autocuidado.",
  },
];

const GuideContents = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            O que você vai encontrar
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Conteúdo do Guia
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Educativo. Baseado em ciência. Feito para quem quer autonomia e
            informação de qualidade.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={item.title}
              className="p-7 rounded-2xl bg-card border border-border shadow-[var(--shadow-card)] text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <item.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuideContents;
