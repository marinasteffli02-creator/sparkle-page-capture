import { Leaf } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto flex flex-col items-center gap-4 text-center">
        <div className="flex items-center gap-2 font-display text-xl font-bold text-foreground">
          <Leaf className="w-5 h-5 text-primary" />
          Hemato<span className="text-primary">veg</span>
        </div>
        <p className="text-muted-foreground text-xs max-w-md leading-relaxed">
          Este material tem caráter exclusivamente educativo e informativo. Não
          substitui consulta, avaliação, diagnóstico ou tratamento médico. Em
          caso de dúvidas sobre sua saúde, procure um profissional qualificado.
        </p>
        <p className="text-muted-foreground text-xs">
          © {new Date().getFullYear()} Hematoveg. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
