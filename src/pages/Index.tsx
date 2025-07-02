import Header from "@/components/Header";
import ProfileSection from "@/components/ProfileSection";
import ServicesSection from "@/components/ServicesSection";
import StatsSection from "@/components/StatsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Profile */}
          <div className="lg:col-span-1">
            <ProfileSection />
          </div>
          
          {/* Middle Column - Services */}
          <div className="lg:col-span-1">
            <ServicesSection />
          </div>
          
          {/* Right Column - Stats */}
          <div className="lg:col-span-1">
            <StatsSection />
          </div>
        </div>
      </main>
      
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
