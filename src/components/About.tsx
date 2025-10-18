import { Code, Database, Zap } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="glass-effect rounded-2xl p-8 md:p-12 mb-8 animate-fade-in">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Career Objective</h3>
            <p className="text-foreground/80 leading-relaxed text-lg">
              Motivated MCA graduate with strong skills in Core Java, OOPs, Data Structures, SQL, and Java frameworks (Spring, Hibernate). 
              Passionate about application development, problem solving, and collaborating in cross-functional teams. 
              Seeking an apprenticeship as a Java Developer to contribute to innovative solutions and gain hands-on experience in a fast-paced IT environment.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-effect rounded-xl p-6 text-center group hover:bg-primary/10 transition-all animate-fade-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Code className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Full Stack Development</h4>
              <p className="text-sm text-foreground/70">Building end-to-end web applications with modern frameworks</p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center group hover:bg-secondary/10 transition-all animate-fade-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-secondary to-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Database className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Database Design</h4>
              <p className="text-sm text-foreground/70">Designing efficient and scalable database solutions</p>
            </div>

            <div className="glass-effect rounded-xl p-6 text-center group hover:bg-accent/10 transition-all animate-fade-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-gradient-to-br from-accent to-secondary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                <Zap className="h-8 w-8" />
              </div>
              <h4 className="font-bold mb-2">Problem Solving</h4>
              <p className="text-sm text-foreground/70">Applying algorithms and data structures to solve complex problems</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
