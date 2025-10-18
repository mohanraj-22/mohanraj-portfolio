import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-foreground/70 text-sm">
              © {currentYear} Mohanraj G. Built with{" "}
              <Heart className="inline h-4 w-4 text-accent" /> using React & Tailwind CSS
            </p>
          </div>

          <div className="flex gap-4">
            <a
              href="https://github.com/mohanrajguna22"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:bg-primary/20 transition-all hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com/in/mohanraj-gunasekaran-8832b0250"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full glass-effect hover:bg-primary/20 transition-all hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:mohanrajguna22@gmail.com"
              className="p-2 rounded-full glass-effect hover:bg-primary/20 transition-all hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
