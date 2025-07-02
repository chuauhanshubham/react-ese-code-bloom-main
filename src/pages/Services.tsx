import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Code, Palette, Smartphone, Cloud, Globe, Shield, Zap, Users } from "lucide-react";
import Header from "@/components/Header";
const Services = () => {
  const mainServices = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies and best practices.",
      features: ["React/Next.js", "Node.js Backend", "Database Design", "API Development"],
      price: "Starting at $2,500"
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android.",
      features: ["React Native", "Flutter", "Native iOS/Android", "App Store Optimization"],
      price: "Starting at $3,500"
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Beautiful, user-centered designs that convert visitors into customers.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
      price: "Starting at $1,500"
    },
    {
      icon: Cloud,
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and deployment solutions.",
      features: ["AWS/Azure Setup", "DevOps", "CI/CD Pipelines", "Monitoring"],
      price: "Starting at $2,000"
    }
  ];

  const additionalServices = [
    { icon: Globe, title: "SEO Optimization", description: "Improve your search rankings" },
    { icon: Shield, title: "Security Audit", description: "Protect your applications" },
    { icon: Zap, title: "Performance Optimization", description: "Make your site lightning fast" },
    { icon: Users, title: "Team Training", description: "Upskill your development team" }
  ];

  return (
    <div>
      <Header />
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-foreground mb-6">
            My <span className="text-primary">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive digital solutions to help your business thrive in the digital age.
            From concept to deployment, I've got you covered.
          </p>
        </div>

        {/* Main Services */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {mainServices.map((service, index) => (
            <Card key={index} className="p-8 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-foreground">{service.title}</h3>
                  <Badge variant="secondary" className="mt-1">{service.price}</Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{service.description}</p>
              
              <div className="mb-6">
                <h4 className="font-semibold text-foreground mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
              
              <Button variant="gradient" className="w-full rounded-full">
                Learn More
              </Button>
            </Card>
          ))}
        </div>

        {/* Additional Services */}
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Additional Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-card text-center hover:shadow-glow transition-all duration-300">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                <p className="text-muted-foreground text-sm">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <Card className="p-12 bg-gradient-card border-border/50 shadow-card mb-16">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">My Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your needs and goals" },
              { step: "02", title: "Planning", description: "Creating a detailed project roadmap" },
              { step: "03", title: "Development", description: "Building your solution with precision" },
              { step: "04", title: "Launch", description: "Deploying and supporting your project" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">{phase.step}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{phase.title}</h3>
                <p className="text-muted-foreground">{phase.description}</p>
              </div>
            ))}
          </div>
        </Card>

        {/* CTA Section */}
        <div className="text-center">
          <Card className="p-12 bg-gradient-primary border-0 shadow-glow">
            <h2 className="text-4xl font-bold text-primary-foreground mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create something amazing together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="secondary" size="lg" className="rounded-full">
                View Portfolio
              </Button>
              <Button variant="outline" size="lg" className="rounded-full bg-white/10 border-white/20 text-white hover:bg-white/20">
                Contact Me
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Services;