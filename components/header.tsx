import { Search, Settings, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export function Header() {
  return (
    <div className="bg-white border-b border-[#e6eff5] px-8 py-4">
      <div className="flex items-center justify-between">
        <h1 className="text-[#343c6a] text-2xl font-semibold">Overview</h1>
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[#718ebf] w-5 h-5" />
            <Input
              placeholder="Search for something"
              className="pl-10 w-80 bg-[#f5f7fa] border-none text-[#718ebf]"
            />
          </div>
          <Button variant="ghost" size="icon" className="text-[#718ebf]">
            <Settings className="w-5 h-5" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="text-[#718ebf] relative"
          >
            <Bell className="w-5 h-5" />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#ff4b4a] rounded-full"></div>
          </Button>
          <Avatar className="w-10 h-10">
            <AvatarImage src="/professional-woman-diverse.png" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </div>
  );
}
