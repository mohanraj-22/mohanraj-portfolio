import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Core Java", "JavaScript", "SQL", "Python"],
      gradient: "from-primary to-accent"
    },
    {
      title: "Frameworks & Tools",
      skills: ["Spring", "Hibernate", "Servlets", "JSP", "JDBC", "Git", "Eclipse", "IntelliJ IDEA"],
      gradient: "from-secondary to-primary"
    },
    {
      title: "Technologies",
      skills: ["REST APIs", "OOP", "Data Structures", "MySQL", "Debugging", "MVC Architecture"],
      gradient: "from-accent to-secondary"
    }
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          <div className="space-y-8">
            {skillCategories.map((category, index) => (
              <div
                key={index}
                className="glass-effect rounded-2xl p-6 md:p-8 animate-fade-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-xl font-bold mb-4 gradient-text">{category.title}</h3>
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <Badge
                      key={idx}
                      className={`bg-gradient-to-r ${category.gradient} text-white px-4 py-2 text-sm hover:scale-105 transition-transform cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
