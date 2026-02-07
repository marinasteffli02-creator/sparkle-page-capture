import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { z } from "zod";
import { Send, CheckCircle } from "lucide-react";

const leadSchema = z.object({
  name: z.string().trim().min(1, "Digite seu nome").max(100),
  email: z.string().trim().email("Digite um e-mail válido").max(255),
});

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse({ name, email });
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as "name" | "email";
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    // In a real app, this would send to an API
    setSubmitted(true);
    toast.success("Cadastro realizado com sucesso! 🎉");
  };

  if (submitted) {
    return (
      <section id="lead-form" className="py-24 px-6">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-10 h-10 text-primary" />
          </div>
          <h2 className="font-display text-3xl font-bold mb-4">Você está dentro! 🚀</h2>
          <p className="text-muted-foreground text-lg">
            Fique de olho no seu e-mail. Em breve você receberá nosso conteúdo exclusivo.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-24 px-6">
      <div className="max-w-lg mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Cadastre-se agora
          </h2>
          <p className="text-muted-foreground text-lg">
            É grátis. Sem spam. Cancele quando quiser.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 p-8 rounded-2xl bg-card border border-border shadow-[var(--shadow-glow)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-foreground mb-1.5">
              Nome
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-foreground mb-1.5">
              E-mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-all"
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-3.5 rounded-lg bg-primary text-primary-foreground font-semibold text-lg shadow-[var(--shadow-glow)] hover:brightness-110 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2"
          >
            <Send className="w-5 h-5" />
            Quero receber
          </button>

          <p className="text-center text-muted-foreground text-xs">
            Ao se cadastrar, você concorda com nossa política de privacidade.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadForm;
