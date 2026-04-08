import { Github, Linkedin, Mail, Phone, FileText } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 md:py-32 bg-[#f1ede7]">
      <div className="max-w-4xl mx-auto px-6 text-center">


      <div className="flex items-center gap-3 mb-4">
            <div className="h-px flex-1 bg-border" />
            <span className="text-xs tracking-widest uppercase text-muted-foreground">
              Contact
            </span>
            <div className="h-px flex-1 bg-border" />
          </div>
          
        {/* Title */}
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-[#2c3a33]">
          Get in touch<span className="text-accent">.</span>
        </h2>

        <p className="text-muted-foreground mb-12 max-w-xl mx-auto">
        Feel free to reach out if you have an internship opportunity available, any questions, or just want to say hi.
        </p>

        {/* Icons */}
        <div className="flex justify-center gap-6 mb-12 flex-wrap">

          {/* Mail */}
          <a
            href="mailto:miljanazoranovic@icloud.com"
            className="p-4 rounded-full border border-border hover:bg-[#7a8f7c] hover:text-white transition-all duration-300"
            aria-label="Send email"
          >
            <Mail className="text-accent" />
          </a>

          {/* Phone */}
          <a
            href="tel:+46720091796"
            className="p-4 rounded-full border border-border hover:bg-[#7a8f7c] hover:text-white transition-all duration-300"
            aria-label="Call me"
          >
            <Phone className="text-accent" />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Miljana0609"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:bg-[#7a8f7c] hover:text-white transition-all duration-300"
            aria-label="GitHub"
          >
            <Github className="text-accent" />
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/miljana-zoranovic-652627377/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-4 rounded-full border border-border hover:bg-[#7a8f7c] hover:text-white transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin className="text-accent" />
          </a>

        </div>

        {/* CV */}

        <div className="mt-12 flex flex-col items-center gap-3">
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-12">

{/* ENGLISH CV */}
<a
  href="/Miljana_Zoranovic_CV_EN.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-[#7a8f7c] hover:text-white transition-all duration-300"
>
  <FileText size={18} />
  Resume (EN)
</a>

{/* SWEDISH CV */}
<a
  href="/Miljana_Zoranovic_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border hover:bg-[#7a8f7c] hover:text-white transition-all duration-300"
>
  <FileText size={18} />
  Resume (SE)
</a>

</div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;