import { Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import googlePlayIcon from "@/assets/google-play-icon.png";
const PlayStoreHeader = () => {
  return <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Right Section - Avatar */}
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
            g
          </div>

          {/* Center Section */}
          <div className="flex items-center gap-2 ">
            
            <Button variant="ghost" size="icon" className="gap-20 text-sm ">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Left Section - Logo */}
          <div className="flex items-center gap-1.5">
            <span className="text-base text-foreground">
              Google Play
            </span>
            <img src={googlePlayIcon} alt="Google Play" className="w-6 h-6" />
          </div>
        </div>
      </div>
    </header>;
};
export default PlayStoreHeader;