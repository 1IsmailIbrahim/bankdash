import { Search, Settings, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RedBillIcon } from "../icons";

interface HeaderProps {
  onMenuToggle?: () => void;
}

export function Header({ onMenuToggle }: HeaderProps) {
  return (
    <div className="bg-white border-b border-[#e6eff5] px-4 md:px-8 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          {/* Hamburger menu for mobile */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-[#718ebf] bg-[#F5F7FA] rounded-full"
            onClick={onMenuToggle}
          >
            <Menu className="w-5 h-5" />
          </Button>
          <h1 className="text-[#343C6A] text-xl md:text-2xl font-semibold">
            Overview
          </h1>
        </div>
        <div className="flex items-center gap-2 md:gap-4">
          <div className="relative hidden sm:block">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#718ebf] w-5 h-5" />
            <Input
              placeholder="Search for something"
              className="pl-10 w-48 md:w-80 bg-[#F5F7FA] border-none placeholder-[#8BA3CB] text-[#8BA3CB] rounded-full"
            />
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#718ebf] bg-[#F5F7FA] rounded-full"
          >
            <Settings className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className=" relative bg-[#F5F7FA] rounded-full"
          >
            <RedBillIcon />
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/images/nav-hero.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
