const Footer = () => {
  return (
    <footer className="py-10 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="font-display text-xl font-bold text-foreground">
          Growth<span className="text-primary">Lab</span>
        </div>
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} GrowthLab. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
