import { Card } from "@/components/ui/card";
import { Lightbulb, Code, Users, Megaphone } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Lightbulb,
      title: "UI/UX Design",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Code,
      title: "Digital Marketing",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Users,
      title: "Brand Identity",
      color: "text-primary",
      bgColor: "bg-primary/10"
    },
    {
      icon: Megaphone,
      title: "Web Development",
      color: "text-primary",
      bgColor: "bg-primary/10"
    }
  ];

  return (
    <div className="space-y-8">
      <div>
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">Title</p>
        <h2 className="text-4xl font-bold text-foreground mb-8">
          Services Offering
        </h2>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {services.map((service, index) => (
          <Card key={index} className="p-6 bg-gradient-card border-border/50 shadow-card hover:shadow-glow transition-all duration-300">
            <div className={`w-16 h-16 ${service.bgColor} rounded-2xl flex items-center justify-center mb-4`}>
              <service.icon className={`w-8 h-8 ${service.color}`} />
            </div>
            <h3 className="text-lg font-semibold text-foreground">{service.title}</h3>
          </Card>
        ))}
      </div>
      
      <div className="mt-12">
        <h2 className="text-3xl font-bold text-foreground mb-6">
          Things I'm good at 🤝
        </h2>
        
        <div className="flex items-center justify-between">
          <span className="text-lg text-foreground">All Services</span>
          <div className="w-32 bg-muted rounded-full h-2">
            <div className="bg-gradient-primary h-2 rounded-full w-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;