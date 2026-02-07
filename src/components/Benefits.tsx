import { motion } from "framer-motion";
import { Zap, TrendingUp, Shield, Users } from "lucide-react";

const benefits = [
  {
    icon: Zap,
    title: "Resultados Rápidos",
    description: "Estratégias práticas que você pode aplicar hoje e ver resultados em semanas.",
  },
  {
    icon: TrendingUp,
    title: "Crescimento Escalável",
    description: "Métodos testados para escalar seu negócio de forma sustentável.",
  },
  {
    icon: Shield,
    title: "Conteúdo Exclusivo",
    description: "Acesso a materiais que não estão disponíveis em nenhum outro lugar.",
  },
  {
    icon: Users,
    title: "Comunidade Ativa",
    description: "Faça parte de um grupo de empreendedores comprometidos com resultados.",
  },
];

const Benefits = () => {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            Por que se cadastrar?
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Tudo o que você precisa para dar o próximo passo no seu negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/30 transition-colors duration-300 shadow-[var(--shadow-card)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {benefit.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
