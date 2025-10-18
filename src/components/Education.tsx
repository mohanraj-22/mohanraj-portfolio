import { GraduationCap, Award } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Education = () => {
  const education = [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Anjalai Ammal Mahalingam Engineering College",
      year: "2025",
      cgpa: "8.3"
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      institution: "PRIST University",
      year: "2023",
      cgpa: "8.34"
    }
  ];

  const certifications = [
    {
      title: "Java Full Stack Web Development",
      provider: "Tap Academy, Bengaluru",
      period: "Feb–Aug 2025"
    },
    {
      title: "Agile Project Management",
      provider: "HP Life",
      period: "Jul 2025"
    }
  ];

  const achievements = [
    "2nd Prize, Cyber Security Quiz (Inter-College Competition)",
    "Winner, Department Cricket Tournament"
  ];

  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold font-heading text-center mb-4">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-12" />

          {/* Education */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <GraduationCap className="text-primary" />
              Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <Card
                  key={index}
                  className="glass-effect border-border/50 hover:border-primary/50 transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-xl">{edu.degree}</CardTitle>
                    <CardDescription className="text-foreground/70">
                      {edu.institution}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-foreground/60">Year: {edu.year}</span>
                      <span className="text-sm font-semibold bg-gradient-to-r from-primary to-accent px-3 py-1 rounded-full">
                        CGPA: {edu.cgpa}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-secondary" />
              Certifications
            </h3>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="glass-effect border-border/50 hover:border-secondary/50 transition-all animate-fade-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{cert.title}</CardTitle>
                    <CardDescription className="text-foreground/70">
                      {cert.provider}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <span className="text-sm text-foreground/60">{cert.period}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="text-accent" />
              Achievements
            </h3>
            <div className="glass-effect rounded-xl p-6">
              <ul className="space-y-3">
                {achievements.map((achievement, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-3 animate-fade-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <span className="text-accent mt-1">★</span>
                    <span className="text-foreground/80">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
