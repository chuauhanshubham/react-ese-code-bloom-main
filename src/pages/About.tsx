import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Award, Users, Target } from "lucide-react";
import Header from "@/components/Header";
const About = () => {

  const skills = [
    "React.js", "Node.js", "TypeScript", "Python", "AWS", "Docker",
    "MongoDB", "PostgreSQL", "GraphQL", "REST APIs", "Git", "Agile"
  ];

  const achievements = [
    { icon: Award, title: "Best Developer Award", year: "2023" },
    { icon: Users, title: "Team Leadership", year: "2022" },
    { icon: Target, title: "Project Excellence", year: "2021" }
  ];

  return (
    <div><Header />
      <div className="min-h-screen bg-background py-20">

        <div className="container mx-auto px-6">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-bold text-foreground mb-6">
              About <span className="text-primary">Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Passionate developer with 6+ years of experience creating innovative digital solutions
              that help businesses grow and succeed in the modern world.
            </p>
          </div>

          {/* Story Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h2 className="text-3xl font-bold text-foreground mb-6">My Story</h2>
              <p className="text-muted-foreground mb-4">
                Started my journey as a curious developer 6 years ago, I've had the privilege
                of working with amazing teams and clients from around the world.
              </p>
              <p className="text-muted-foreground mb-4">
                My passion lies in creating user-centered digital experiences that not only
                look beautiful but also solve real-world problems efficiently.
              </p>
              <p className="text-muted-foreground">
                When I'm not coding, you'll find me exploring new technologies, contributing
                to open-source projects, or mentoring upcoming developers.
              </p>
            </Card>

            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h2 className="text-3xl font-bold text-foreground mb-6">What I Do</h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Full-Stack Development</h3>
                    <p className="text-muted-foreground">Building end-to-end web applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">UI/UX Design</h3>
                    <p className="text-muted-foreground">Creating beautiful, intuitive interfaces</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold text-foreground">Consulting</h3>
                    <p className="text-muted-foreground">Strategic technical guidance</p>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Skills Section */}
          <Card className="p-8 bg-gradient-card border-border/50 shadow-card mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Technical Skills</h2>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="px-4 py-2 text-lg">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>

          {/* Achievements Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-card text-center hover:shadow-glow transition-all duration-300">
                  <achievement.icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-foreground mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground">{achievement.year}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <Card className="p-12 bg-gradient-card border-border/50 shadow-card">
              <h2 className="text-4xl font-bold text-foreground mb-6">Let's Work Together</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Ready to bring your ideas to life? Let's discuss how we can create something amazing together.
              </p>
              <Button variant="gradient" size="lg" className="rounded-full">
                Get In Touch
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;