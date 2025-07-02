import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/profile-image.jpg";

const ProfileSection = () => {
  return (
    <Card className="p-8 bg-gradient-card border-border/50 shadow-card">
      <div className="text-center">
        <div className="relative mx-auto w-48 h-48 mb-6">
          <div className="absolute inset-0 bg-gradient-primary rounded-full p-4">
            <div className="w-full h-full rounded-full overflow-hidden border-4 border-background">
              <img 
                src={profileImage} 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-3 py-1 rounded-full border-2 border-background">
            Available for work
          </div>
        </div>
        
        <h1 className="text-5xl font-bold text-foreground mb-2">
          Product
        </h1>
        <h1 className="text-5xl font-bold text-muted-foreground mb-8">
          Designer
        </h1>
        
        <Button variant="gradient" className="rounded-full mb-8">
          I'm Gole Layla
        </Button>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">Biography</h3>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-primary h-2 rounded-full w-3/4"></div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Articles & Publications</h3>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-2">All Blogs</h3>
            <div className="w-full bg-muted rounded-full h-2">
              <div className="bg-gradient-primary h-2 rounded-full w-2/3"></div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ProfileSection;