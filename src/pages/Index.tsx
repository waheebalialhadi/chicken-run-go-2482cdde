import PlayStoreHeader from "@/components/PlayStoreHeader";
import AppHeader from "@/components/AppHeader";
import ScreenshotsCarousel from "@/components/ScreenshotsCarousel";
import AboutSection from "@/components/AboutSection";
import { Star, Gamepad2, Users } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <PlayStoreHeader />
      
      <main>
        <AppHeader />
        
        <ScreenshotsCarousel />
        
        <AboutSection />
      </main>

      <footer className="border-t mt-8 bg-background sticky bottom-0">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-around max-w-md mx-auto">
            <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
              <Star className="h-5 w-5" />
              <span className="text-xs">التطبيقات</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-primary">
              <Gamepad2 className="h-5 w-5" />
              <span className="text-xs">الألعاب</span>
            </button>
            <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
              <Users className="h-5 w-5" />
              <span className="text-xs">الأطفال</span>
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
