import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";
import Header from "@/components/Header";
const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@golelayla.com",
      description: "Send me an email anytime"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Call me during business hours"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, USA",
      description: "Available for remote work worldwide"
    }
  ];

  const workingHours = [
    { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
    { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
    { day: "Sunday", hours: "Closed" }
  ];

  return (
    <div>
      <Header />
    
    <div className="min-h-screen bg-background py-20">
      <div className="container mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-foreground mb-6">
            Get In <span className="text-primary">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ready to start your next project? I'd love to hear from you. 
            Let's discuss how we can bring your ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
              <h2 className="text-3xl font-bold text-foreground mb-8">Send Message</h2>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input
                      id="firstName"
                      placeholder="John"
                      className="h-12"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input
                      id="lastName"
                      placeholder="Doe"
                      className="h-12"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone (Optional)</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input
                    id="subject"
                    placeholder="Project Discussion"
                    className="h-12"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell me about your project..."
                    className="min-h-32"
                  />
                </div>
                
                <Button variant="gradient" size="lg" className="w-full rounded-full">
                  Send Message
                  <Send className="w-5 h-5 ml-2" />
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Contact Information */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Contact Information</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <info.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-foreground">{info.title}</h4>
                      <p className="text-foreground font-medium">{info.value}</p>
                      <p className="text-muted-foreground text-sm">{info.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Working Hours */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <div className="flex items-center mb-6">
                <Clock className="w-6 h-6 text-primary mr-3" />
                <h3 className="text-2xl font-bold text-foreground">Working Hours</h3>
              </div>
              <div className="space-y-4">
                {workingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-foreground font-medium">{schedule.day}</span>
                    <span className="text-muted-foreground">{schedule.hours}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                <div className="flex items-center">
                  <Globe className="w-5 h-5 text-primary mr-2" />
                  <span className="text-foreground font-medium">Remote Work Available</span>
                </div>
                <p className="text-muted-foreground text-sm mt-1">
                  I work with clients worldwide across different time zones
                </p>
              </div>
            </Card>

            {/* Quick Stats */}
            <Card className="p-6 bg-gradient-card border-border/50 shadow-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">Why Choose Me?</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Response Time</span>
                  <span className="text-primary font-bold">&lt; 2 hours</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Client Satisfaction</span>
                  <span className="text-primary font-bold">95%</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Projects Delivered</span>
                  <span className="text-primary font-bold">50+</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-foreground">Years Experience</span>
                  <span className="text-primary font-bold">6+</span>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <Card className="p-12 bg-gradient-card border-border/50 shadow-card mt-16">
          <h2 className="text-4xl font-bold text-foreground text-center mb-12">Frequently Asked Questions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  question: "What is your typical response time?",
                  answer: "I typically respond to all inquiries within 2 hours during business hours."
                },
                {
                  question: "Do you work with international clients?",
                  answer: "Absolutely! I work with clients worldwide and am flexible with different time zones."
                },
                {
                  question: "What is your project timeline?",
                  answer: "Project timelines vary based on complexity, but most projects are completed within 2-8 weeks."
                },
                {
                  question: "Do you provide ongoing support?",
                  answer: "Yes, I offer post-launch support and maintenance packages for all my projects."
                }
              ].map((faq, index) => (
              <div key={index}>
                <h3 className="text-lg font-semibold text-foreground mb-2">{faq.question}</h3>
                <p className="text-muted-foreground">{faq.answer}</p>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
    </div>
  );
};

export default Contact;