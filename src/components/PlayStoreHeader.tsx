import { Search, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const PlayStoreHeader = () => {
  return (
    <header className="border-b bg-background sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Right Section - Avatar */}
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-sm font-medium">
            g
          </div>

          {/* Center Section */}
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="icon">
              <HelpCircle className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Left Section - Logo */}
          <div className="flex items-center gap-2">
            <span className="text-base text-muted-foreground">
              google_logo Play
            </span>
            <div className="text-2xl">▶</div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PlayStoreHeader;
