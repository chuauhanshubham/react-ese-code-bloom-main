import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Eye } from "lucide-react";
import Header from "@/components/Header";
const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      category: "Web Development",
      description: "A modern e-commerce platform with advanced features including real-time inventory, payment processing, and admin dashboard.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "Task Management App",
      category: "Mobile App",
      description: "Cross-platform mobile app for team collaboration and project management with real-time updates and notifications.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
      tags: ["React Native", "Firebase", "Redux", "TypeScript"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "Healthcare Dashboard",
      category: "UI/UX Design",
      description: "Clean and intuitive dashboard design for healthcare professionals to monitor patient data and analytics.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=600&fit=crop",
      tags: ["Figma", "Adobe XD", "Prototyping", "User Research"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Financial Analytics Tool",
      category: "Web Development",
      description: "Advanced financial analytics platform with real-time data visualization and reporting capabilities.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=600&fit=crop",
      tags: ["Vue.js", "Python", "D3.js", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 5,
      title: "Learning Management System",
      category: "Full Stack",
      description: "Complete LMS with video streaming, progress tracking, interactive quizzes, and certification system.",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
      tags: ["Next.js", "Express", "AWS", "Video Streaming"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 6,
      title: "Restaurant Booking App",
      category: "Mobile App",
      description: "Mobile application for restaurant reservations with table management and payment integration.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      tags: ["Flutter", "Firebase", "Google Maps", "Payment"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "Full Stack"];

  return (
    <div>
      <Header />
      
   
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-foreground mb-6">
            My <span className="text-primary">Portfolio</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent projects and the amazing results I've delivered for clients
            across various industries and platforms.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, index) => (
            <Button
              key={index}
              variant={index === 0 ? "gradient" : "outline"}
              className="rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project) => (
            <Card key={project.id} className="overflow-hidden bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300 group">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button variant="secondary" size="sm" className="rounded-full">
                    <Eye className="w-4 h-4 mr-2" />
                    View
                  </Button>
                  <Button variant="outline" size="sm" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="sm" className="p-2">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <Badge key={index} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          {[
            { number: "50+", label: "Projects Completed" },
            { number: "30+", label: "Happy Clients" },
            { number: "6+", label: "Years Experience" },
            { number: "95%", label: "Client Satisfaction" }
          ].map((stat, index) => (
            <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-card text-center">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <p className="text-muted-foreground">{stat.label}</p>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-card border-border/50 shadow-card">
            <h2 className="text-4xl font-bold text-foreground mb-6">Like What You See?</h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ready to create something amazing together? Let's discuss your project and bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="gradient" size="lg" className="rounded-full">
                Start a Project
              </Button>
              <Button variant="outline" size="lg" className="rounded-full">
                View All Work
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
     </div>
  );
};

export default Portfolio;