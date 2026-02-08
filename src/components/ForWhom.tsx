import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const isFor = [
  "É vegetariana ou vegana e quer continuar nessa escolha com saúde",
  "Busca informação confiável, baseada em ciência, sobre ferro e anemia",
  "Quer entender melhor os sinais que seu corpo pode estar dando",
  "Valoriza autonomia e conhecimento para tomar decisões mais conscientes",
];

const isNotFor = [
  "Procura diagnóstico médico ou prescrição de tratamento",
  "Quer substituir a consulta com um profissional de saúde",
  "Espera promessas de cura ou resultados garantidos",
];

const ForWhom = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Para quem é este guia?
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* É para você */}
          <motion.div
            className="p-7 rounded-2xl bg-background border border-border shadow-[var(--shadow-card)]"
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-primary">
              ✦ É para você se…
            </h3>
            <ul className="space-y-4">
              {isFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <span className="text-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Não é para você */}
          <motion.div
            className="p-7 rounded-2xl bg-background border border-border shadow-[var(--shadow-card)]"
            initial={{ opacity: 0, x: 16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="font-display text-xl font-semibold mb-6 text-muted-foreground">
              ✦ Não é para você se…
            </h3>
            <ul className="space-y-4">
              {isNotFor.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-muted flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-muted-foreground" />
                  </div>
                  <span className="text-muted-foreground text-sm leading-relaxed">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ForWhom;
