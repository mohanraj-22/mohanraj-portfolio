import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Fraud Detection & Criminal Identification in ATM Banking",
      description: "Developed a real-time face recognition system for ATM security using Python and Haar Cascade Algorithm. Implemented fraud detection algorithms focusing on accuracy and efficiency.",
      technologies: ["Python", "MySQL", "Haar Cascade", "Computer Vision"],
      highlights: [
        "Real-time face recognition",
        "Fraud detection algorithms",
        "System design and testing"
      ]
    },
    {
      title: "E-Commerce Application",
      description: "Built a mini e-commerce platform with product catalog and order management modules using Java Spring framework and MySQL backend.",
      technologies: ["Java", "Spring", "JSP", "JDBC", "MySQL"],
      highlights: [
        "MVC architecture",
        "Product catalog management",
        "Order processing system"
      ]
    },
    {
      title: "Chat Application",
      description: "Developed a multi-threaded chat system for real-time communication using Java Socket Programming. Applied concepts of concurrency and network programming.",
      technologies: ["Java", "Socket Programming", "Multithreading"],
      highlights: [
        "Real-time communication",
        "Concurrent user handling",
        "Network programming"
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="glass-effect border-border/50 hover:border-primary/50 transition-all group animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-foreground/70">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <p className="text-sm font-semibold mb-2">Key Highlights:</p>
                    <ul className="text-sm text-foreground/70 space-y-1">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge key={idx} variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
