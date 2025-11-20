import { Star, Share2, Bookmark, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import appIcon from "@/assets/app-icon.png";
const AppHeader = () => {
  return <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="text-center space-y-4">
        {/* App Icon and Title */}
        <div className="flex flex-col items-center gap-3">
          <img src={appIcon} alt="Chicken Gamer Icon" className="w-16 h-16 rounded-2xl shadow-lg object-contain" />
          <div>
            <h1 className="text-2xl font-normal text-foreground">
              Chicken Gamer
            </h1>
            <a href="#" className="text-primary hover:underline font-medium text-sm">
              Meister LTD
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-8 text-xs">
          <div className="flex flex-col items-center">
            <div className="flex items-center gap-1 mb-1">
              <span className="text-sm font-medium">4.5</span>
              <Star className="h-3 w-3 fill-play-rating text-play-rating" />
            </div>
            <span className="text-muted-foreground">17 ألف تقييم</span>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="px-2 py-1 border border-border rounded text-sm font-medium mb-1">
              3+
            </div>
            <span className="text-muted-foreground">مستوى 3 أعوام فما فوق</span>
          </div>
          
          <div className="flex flex-col items-center">
            <span className="text-sm font-medium mb-1">+10</span>
            <span className="text-muted-foreground">ملايين</span>
          </div>
        </div>

        {/* Install Button */}
        <Button size="lg" className="w-full bg-play-green hover:bg-play-green-hover text-white rounded-lg h-12 text-base font-medium">
          تثبيت
        </Button>

        {/* Secondary Actions */}
        <div className="flex items-center justify-center gap-6 text-sm">
          <button className="flex flex-col items-center gap-1 text-primary hover:text-primary/80">
            <Bookmark className="h-5 w-5" />
            <span>الإضافة إلى قائمة المحتوى المفضل</span>
          </button>
          <button className="flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground">
            <Share2 className="h-5 w-5" />
            <span>مشاركة</span>
          </button>
        </div>

        {/* Device Availability */}
        <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground pt-2">
          <Monitor className="h-4 w-4" />
          <span>يتوفّر هذا التطبيق لأجهزتك</span>
        </div>
      </div>
    </div>;
};
export default AppHeader;