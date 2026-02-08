import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Leaf } from "lucide-react";
import { z } from "zod";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";

const leadSchema = z.object({
  name: z.string().trim().max(100).optional(),
  email: z.string().trim().email("Digite um e-mail válido").max(255),
});

const LeadForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string }>({});

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    const result = leadSchema.safeParse({ name: name || undefined, email });
    if (!result.success) {
      const fieldErrors: { name?: string; email?: string } = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as "name" | "email";
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke("mailerlite-subscribe", {
        body: {
          email: result.data.email,
          name: result.data.name || "",
        },
      });

      if (error) throw error;

      setSubmitted(true);
      toast.success("Guia enviado para o seu e-mail! 🌿");
    } catch (err) {
      console.error("Erro ao cadastrar:", err);
      toast.error("Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <section id="lead-form" className="py-20 md:py-28 px-6">
        <motion.div
          className="max-w-lg mx-auto text-center"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4 text-foreground">
            Pronto! O guia foi enviado para o seu e-mail. 🌿
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Confira sua caixa de entrada (e o spam, por via das dúvidas). Em
            breve você receberá o conteúdo.
          </p>
        </motion.div>
      </section>
    );
  }

  return (
    <section id="lead-form" className="py-20 md:py-28 px-6 bg-secondary/50">
      <div className="max-w-lg mx-auto">
        <motion.div
          className="text-center mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Leaf className="w-6 h-6 text-primary mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-3 text-foreground">
            Receba o guia diretamente no seu e-mail
          </h2>
          <p className="text-muted-foreground">
            Conteúdo educativo. Sem spam. Sem julgamentos.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4 p-8 rounded-2xl bg-background border border-border shadow-[var(--shadow-soft)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              Nome <span className="text-muted-foreground font-normal">(opcional)</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
            />
            {errors.name && (
              <p className="text-destructive text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-foreground mb-1.5"
            >
              E-mail <span className="text-destructive">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="seu@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-card border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              required
            />
            {errors.email && (
              <p className="text-destructive text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3.5 rounded-full bg-primary text-primary-foreground font-semibold text-lg shadow-[var(--shadow-primary)] hover:brightness-105 transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {loading ? (
              <span className="animate-pulse">Enviando...</span>
            ) : (
              <>
                <Send className="w-5 h-5" />
                Quero receber o guia
              </>
            )}
          </button>

          <p className="text-center text-muted-foreground text-xs leading-relaxed pt-2">
            Este material é educativo e não substitui consulta médica.
          </p>
        </motion.form>
      </div>
    </section>
  );
};

export default LeadForm;
