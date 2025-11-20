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
          <div className="flex items-center gap-1.5">
            <span className="text-base text-foreground">
              Google Play
            </span>
            <svg viewBox="0 0 24 24" className="w-6 h-6" fill="none">
              <path d="M3 20.5v-17c0-.59.34-1.11.84-1.35.14-.06.28-.09.43-.14.12-.02.24-.03.35-.03.41 0 .82.14 1.16.41l13.77 8.44c.78.48 1.02 1.49.54 2.27-.14.23-.33.42-.54.54l-13.77 8.44C5.18 22.45 4.37 22.25 3.84 21.65c-.3-.35-.48-.79-.48-1.26L3 20.5z" fill="url(#gradient)" />
              <defs>
                <linearGradient id="gradient" x1="3" y1="2" x2="21" y2="22">
                  <stop offset="0%" stopColor="#00D7FF" />
                  <stop offset="50%" stopColor="#00A3FF" />
                  <stop offset="100%" stopColor="#0066FF" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PlayStoreHeader;
