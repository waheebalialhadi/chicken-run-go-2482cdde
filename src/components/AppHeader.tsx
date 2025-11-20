import { Star, Share2, Bookmark, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";
import appIcon from "@/assets/app-icon.png";
const AppHeader = () => {
  return (
    <div className="container mx-auto px-4 py-6 max-w-2xl">
      <div className="space-y-4">
        {/* App Icon and Title */}
        <div className="flex items-start gap-4">
          <img 
            src={appIcon} 
            alt="Chicken Gamer Icon" 
            className="w-16 h-16 rounded-2xl shadow-lg object-contain flex-shrink-0" 
          />
          <div className="flex-1 min-w-0">
            <h1 className="text-2xl font-normal text-foreground mb-1">
              Chicken Gamer
            </h1>
            <a href="#" className="text-primary hover:underline text-sm">
              Meister LTD
            </a>
          </div>
        </div>

        {/* Stats Row */}
        <div className="flex items-center justify-center gap-8 text-xs border-t border-b border-border py-4">
          <div className="flex flex-col items-center gap-1">
            <div className="flex items-center gap-1">
              <span className="text-sm font-medium text-foreground">4.5</span>
              <Star className="h-3 w-3 fill-play-rating text-play-rating" />
            </div>
            <span className="text-muted-foreground text-xs">17 ألف تقييم</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <div className="px-2 py-0.5 border border-border rounded text-xs font-medium text-foreground">
              3+
            </div>
            <span className="text-muted-foreground text-xs">مستوى 3 أعوام فما فوق</span>
          </div>
          
          <div className="flex flex-col items-center gap-1">
            <span className="text-sm font-medium text-foreground">+10</span>
            <span className="text-muted-foreground text-xs">ملايين</span>
            <span className="text-muted-foreground text-xs">عمليات التنزيل</span>
          </div>
        </div>

        {/* Install Button */}
        <Button 
          size="lg" 
          className="w-full bg-play-green hover:bg-play-green-hover text-white rounded-lg h-11 text-sm font-medium"
        >
          تثبيت
        </Button>

        {/* Secondary Actions */}
        <div className="flex items-center justify-center gap-8">
          <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Bookmark className="h-5 w-5" />
            <span className="text-xs">الإضافة إلى قائمة المحتوى المفضل</span>
          </button>
          <button className="flex items-center gap-2 text-primary hover:text-primary/80 transition-colors">
            <Share2 className="h-5 w-5" />
            <span className="text-xs">مشاركة</span>
          </button>
        </div>
      </div>
    </div>
  );
};
export default AppHeader;