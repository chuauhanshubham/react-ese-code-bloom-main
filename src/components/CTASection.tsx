import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <div className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <Card className="p-16 bg-gradient-primary border-0 shadow-glow text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 left-10 w-20 h-20 border border-white/20 rounded-full"></div>
            <div className="absolute top-20 right-20 w-16 h-16 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-10 left-20 w-12 h-12 border border-white/20 rounded-full"></div>
            <div className="absolute bottom-20 right-10 w-24 h-24 border border-white/20 rounded-full"></div>
          </div>
          
          <div className="relative z-10">
            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6">
              Ready to Start Your <br />
              <span className="text-primary-foreground/80">Next Project?</span>
            </h2>
            
            <p className="text-xl text-primary-foreground/80 mb-10 max-w-3xl mx-auto">
              Let's collaborate and create something amazing together. From concept to launch, 
              I'll be with you every step of the way to ensure your project exceeds expectations.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Button 
                variant="secondary" 
                size="lg" 
                className="rounded-full px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Let's Talk About Your Project
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
              
              <Button 
                variant="outline" 
                size="lg" 
                className="rounded-full px-8 py-4 text-lg font-semibold bg-white/10 border-white/20 text-white hover:bg-white/20 backdrop-blur-sm"
              >
                View My Work
              </Button>
            </div>
            
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-primary-foreground/80">
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">50+</div>
                <div className="text-sm uppercase tracking-wider">Projects Completed</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">95%</div>
                <div className="text-sm uppercase tracking-wider">Client Satisfaction</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary-foreground mb-2">6+</div>
                <div className="text-sm uppercase tracking-wider">Years Experience</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default CTASection;