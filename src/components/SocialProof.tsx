import { motion } from "framer-motion";

const stats = [
  { value: "10k+", label: "Leads cadastrados" },
  { value: "98%", label: "Taxa de satisfação" },
  { value: "150+", label: "Empresas atendidas" },
  { value: "3x", label: "Crescimento médio" },
];

const testimonials = [
  {
    name: "Ana Silva",
    role: "CEO, TechBR",
    text: "O conteúdo transformou a forma como vejo marketing digital. Resultados reais em poucas semanas.",
  },
  {
    name: "Carlos Mendes",
    role: "Fundador, Scale Up",
    text: "Finalmente encontrei estratégias que funcionam. Minha receita triplicou em 6 meses.",
  },
  {
    name: "Juliana Costa",
    role: "Diretora de Marketing",
    text: "Material de altíssima qualidade. Recomendo para qualquer empreendedor sério.",
  },
];

const SocialProof = () => {
  return (
    <section className="py-24 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold">
            O que dizem nossos membros
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, index) => (
            <motion.div
              key={t.name}
              className="p-6 rounded-xl bg-card border border-border shadow-[var(--shadow-card)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <p className="text-foreground/80 mb-4 leading-relaxed italic">
                "{t.text}"
              </p>
              <div>
                <div className="font-semibold text-foreground">{t.name}</div>
                <div className="text-muted-foreground text-sm">{t.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
