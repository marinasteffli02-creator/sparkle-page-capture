import { motion } from "framer-motion";
import { Stethoscope, Leaf, BookOpen, Users } from "lucide-react";
import draMarinaImg from "@/assets/dra-marina.png";

const credentials = [
  {
    icon: Stethoscope,
    label: "Médica hematologista",
  },
  {
    icon: BookOpen,
    label: "Especialista em anemia e deficiência de ferro",
  },
  {
    icon: Leaf,
    label: "Vegetariana — vive na prática esses desafios",
  },
  {
    icon: Users,
    label: "Experiência clínica com pacientes vegetarianas e veganas",
  },
];

const Authority = () => {
  return (
    <section className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="text-center mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block mb-4 text-sm font-medium tracking-widest uppercase text-primary">
            Quem está por trás
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ciência e vivência na mesma pessoa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            A autora do guia decidiu unir duas coisas que ama:{" "}
            <strong className="text-foreground">medicina do sangue</strong> e{" "}
            <strong className="text-foreground">vegetarianismo</strong>. O
            objetivo é ajudar pessoas a se manterem vegetarianas e veganas com
            saúde, energia e segurança — com informação baseada em ciência e
            traduzida para a vida real.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {credentials.map((cred, i) => (
            <motion.div
              key={cred.label}
              className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border shadow-[var(--shadow-card)]"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                <cred.icon className="w-5 h-5 text-primary" />
              </div>
              <p className="text-foreground font-medium leading-relaxed">
                {cred.label}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex flex-col items-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <img
            src={draMarinaImg}
            alt="Dra Marina Steffli"
            className="w-48 h-48 rounded-full object-cover object-top border-4 border-primary/20 shadow-lg mb-4"
          />
          <p className="font-display text-lg font-bold text-foreground">
            Dra Marina Steffli
          </p>
          <p className="text-sm text-muted-foreground">
            Hematologista e Hemoterapeuta
          </p>
          <p className="text-xs text-muted-foreground mt-1">
            CRM 22884 · RQE 18477
          </p>
        </motion.div>

        <motion.p
          className="text-center text-xs text-muted-foreground mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          O guia é educativo e informativo. Não substitui avaliação, diagnóstico
          ou tratamento médico individualizado.
        </motion.p>
      </div>
    </section>
  );
};

export default Authority;
