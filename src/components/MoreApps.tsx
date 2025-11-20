import { ChevronRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const MoreApps = () => {
  const apps = [
    {
      name: "Drop Balls - Plink Balls",
      developer: "Meister LTD",
      rating: "4.5",
      icon: "🎱",
    },
    {
      name: "Plink Online - Win Big x1000",
      developer: "Meister LTD",
      rating: "4.2",
      icon: "🎰",
    },
    {
      name: "Rabbit Road - Rabbit Road Game",
      developer: "Meister LTD",
      rating: "4.4",
      icon: "🐰",
    },
    {
      name: "Pinko Bonanza",
      developer: "Meister LTD",
      rating: "4.2",
      icon: "🎪",
    },
    {
      name: "Fish Road - Chicken Game 2",
      developer: "Meister LTD",
      rating: "4.3",
      icon: "🐟",
    },
  ];

  return (
    <aside className="border-l bg-muted/30 p-6 space-y-6">
      <div>
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-foreground">More by Meister LTD</h3>
          <ChevronRight className="h-5 w-5 text-muted-foreground" />
        </div>

        <div className="space-y-4">
          {apps.map((app, index) => (
            <div key={index} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted cursor-pointer transition-colors">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center text-2xl flex-shrink-0">
                {app.icon}
              </div>
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-foreground truncate">{app.name}</h4>
                <p className="text-xs text-muted-foreground">{app.developer}</p>
                <div className="flex items-center gap-1 mt-1">
                  <span className="text-xs font-medium">{app.rating}</span>
                  <Star className="h-3 w-3 fill-play-rating text-play-rating" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="pt-4 border-t space-y-4">
        <Button variant="ghost" className="w-full justify-start text-sm">
          App support
        </Button>
        <Button variant="ghost" className="w-full justify-start text-sm">
          Privacy policy
        </Button>
      </div>
    </aside>
  );
};

export default MoreApps;
