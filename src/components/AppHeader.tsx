import { Share2, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import appIcon from "@/assets/app-icon.png";
const AppHeader = () => {
  return <div className="bg-background">
      <div className="container mx-auto px-4 py-4 max-w-2xl">
        <div className="space-y-4">
          {/* App Icon and Title */}
          <div className="flex items-start gap-4">
            <img alt="Chicken Gamer Icon" className="w-20 h-20 rounded-2xl shadow-sm object-cover flex-shrink-0" src="/lovable-uploads/2afe8717-7f69-4025-b34a-ade5a380cc43.jpg" />
            <div className="flex-1 pt-2">
              <h1 className="text-foreground mb-1 font-semibold text-xl">
                Chicken Gamer
              </h1>
              <a href="#" className="text-primary hover:underline text-sm font-normal">
                Meister LTD
              </a>
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex items-center justify-center gap-12 text-center py-2">
            <div className="flex flex-col items-center gap-1">
              <div className="px-2.5 py-1 border border-border text-xs font-normal text-foreground bg-background shadow-none rounded-none">
                3+
              </div>
              <span className="text-muted-foreground text-[11px] leading-tight">مناسب لأعمار 3 أعوام فما فوق</span>
            </div>
            
            <div className="flex flex-col items-center gap-1">
              <span className="text-base font-normal text-foreground">​0</span>
              <span className="text-muted-foreground text-[11px] leading-tight">عمليات التنزيل</span>
            </div>
          </div>

          {/* Install Button */}
          <Button size="lg" className="w-full bg-play-green hover:bg-play-green-hover text-white rounded-lg h-10 text-sm font-medium">
            تثبيت
          </Button>

          {/* Secondary Actions */}
          <div className="flex items-center justify-center gap-8 pt-1">
            <button className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors">
              <Bookmark className="h-5 w-5" />
              <span className="text-xs">الإضافة إلى قائمة المحتوى المفضل</span>
            </button>
            <button className="flex items-center gap-1.5 text-primary hover:text-primary/80 transition-colors">
              <Share2 className="h-5 w-5" />
              <span className="text-xs">مشاركة</span>
            </button>
          </div>
        </div>
      </div>
    </div>;
};
export default AppHeader;