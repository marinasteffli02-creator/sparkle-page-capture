import { motion } from "framer-motion";
import { Heart } from "lucide-react";

const paragraphs = [
  {
    highlight: "Você escolheu o vegetarianismo por um propósito.",
    text: "Seja pelos animais, pelo planeta ou pela sua saúde — essa escolha faz parte de quem você é.",
  },
  {
    highlight: "Mas manter essa escolha com saúde nem sempre é simples.",
    text: "A rotina corrida, as refeições improvisadas e a dificuldade de planejar cada detalhe fazem parte do dia a dia de muitas vegetarianas e veganas.",
  },
  {
    highlight: "Você se esforça muito para comer bem.",
    text: "Pesquisa receitas, lê rótulos, busca informação. Ainda assim, pode sentir que seu corpo não responde como deveria — o cansaço que não passa, a energia que falta, a insegurança sobre o ferro.",
  },
  {
    highlight: 'E quando alguém sugere que o problema é "não comer carne"?',
    text: "Pode surgir culpa, dúvida ou frustração. Mas o caminho não é desistir da sua escolha. É ter informação confiável para sustentá-la.",
  },
];

const Identification = () => {
  return (
    <section className="py-20 md:py-28 px-6">
      <div className="max-w-2xl mx-auto">
        <motion.div
          className="flex items-center justify-center gap-3 mb-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="h-px flex-1 max-w-[60px] bg-border" />
          <Heart className="w-5 h-5 text-primary" />
          <div className="h-px flex-1 max-w-[60px] bg-border" />
        </motion.div>

        <div className="space-y-8">
          {paragraphs.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <p className="text-lg md:text-xl leading-relaxed text-foreground">
                <strong className="font-semibold">{p.highlight}</strong>{" "}
                <span className="text-muted-foreground">{p.text}</span>
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Identification;
