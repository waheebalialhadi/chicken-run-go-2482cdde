import { Star, Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import appIcon from "@/assets/app-icon.png";

const AppHeader = () => {
  return (
    <div className="bg-background">
      <div className="container mx-auto px-4 py-4 max-w-2xl">
        <div className="space-y-3">
          {/* App Icon and Title */}
          <div className="flex items-start gap-4">
            <img 
              src={appIcon} 
              alt="Chicken Gamer Icon" 
              className="w-16 h-16 rounded-2xl shadow-sm object-cover flex-shrink-0" 
            />
            <div className="flex-1 pt-1">
              <h1 className="text-xl font-normal text-foreground mb-0.5">
                Chicken Gamer
              </h1>
              <a href="#" className="text-primary hover:underline text-sm font-normal">
                Meister LTD
              </a>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-start justify-start gap-6 text-xs py-2">
            <div className="flex flex-col items-center gap-1 min-w-[70px]">
              <div className="flex items-center gap-0.5">
                <span className="text-sm font-normal text-foreground">4.5</span>
                <Star className="h-3 w-3 fill-play-rating text-play-rating" />
              </div>
              <span className="text-muted-foreground text-[11px] text-center leading-tight">17 ألف تقييم</span>
            </div>
            
            <div className="flex flex-col items-center gap-1 min-w-[70px]">
              <div className="px-2 py-0.5 border border-border rounded text-xs font-normal text-foreground bg-background">
                3+
              </div>
              <span className="text-muted-foreground text-[11px] text-center leading-tight">مناسب لأعمار 3 أعوام فما فوق</span>
            </div>
            
            <div className="flex flex-col items-center gap-1 min-w-[70px]">
              <span className="text-sm font-normal text-foreground">+10</span>
              <span className="text-muted-foreground text-[11px] text-center leading-tight">ملايين<br/>عمليات التنزيل</span>
            </div>
          </div>

          {/* Install Button */}
          <Button 
            size="lg" 
            className="w-full bg-play-green hover:bg-play-green-hover text-white rounded-lg h-10 text-sm font-medium shadow-sm"
          >
            تثبيت
          </Button>

          {/* Secondary Actions */}
          <div className="flex items-center justify-center gap-6 pt-1">
            <button className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors">
              <Bookmark className="h-[18px] w-[18px]" />
              <span className="text-[13px]">الإضافة إلى قائمة المحتوى المفضل</span>
            </button>
            <button className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors">
              <Share2 className="h-[18px] w-[18px]" />
              <span className="text-[13px]">مشاركة</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AppHeader;