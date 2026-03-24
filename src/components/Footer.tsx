const Footer = () => {
  return (
    <footer className="py-8 border-t border-border bg-card">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Miljana Zoranovic
        </p>

        <p className="text-xs text-muted-foreground/60 mt-2">
          Java Developer Student · Backend & Cloud
        </p>

      </div>
    </footer>
  );
};

export default Footer;