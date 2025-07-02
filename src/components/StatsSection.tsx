import { Card } from "@/components/ui/card";

const StatsSection = () => {
  return (
    <div className="space-y-8">
      <div className="text-right">
        <p className="text-sm text-muted-foreground uppercase tracking-wider mb-2">
          Latest Works and Featured ⭐
        </p>
      </div>
      
      <div className="space-y-6">
        <Card className="p-8 bg-gradient-card border-border/50 shadow-card text-center">
          <div className="text-7xl font-bold text-foreground mb-2">06</div>
          <p className="text-muted-foreground uppercase tracking-wider">Years Experience</p>
        </Card>
        
        <Card className="p-8 bg-gradient-card border-border/50 shadow-card text-center">
          <div className="text-6xl font-bold text-foreground mb-2">+145</div>
          <p className="text-muted-foreground uppercase tracking-wider">Total Projects</p>
        </Card>
        
        <Card className="p-8 bg-gradient-card border-border/50 shadow-card text-center">
          <div className="text-6xl font-bold text-foreground mb-2">+129</div>
          <p className="text-muted-foreground uppercase tracking-wider">Clients Worldwide</p>
        </Card>
      </div>
      
      <div className="text-center mt-12">
        <h3 className="text-2xl font-bold text-foreground">
          See My<br />Latest Works
        </h3>
      </div>
    </div>
  );
};

export default StatsSection;