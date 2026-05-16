"use client";

import { useState } from "react";
import { Bell, Search, Menu, Check, Info, Settings, LogOut, User, CreditCard } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "./sidebar";
import { useRouter } from "next/navigation";
import { Badge } from "@/components/ui/badge";
import { mockUser } from "@/lib/mock-data";

export function Header() {
  const [searchValue, setSearchValue] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchValue.trim()) {
      router.push(`/campaigns?search=${encodeURIComponent(searchValue.trim())}`);
    }
  };

  const notifications = [
    { id: 1, title: "Campaign Sent", description: "Q3 Update has been sent to 8,920 contacts.", time: "2m ago", type: "success" },
    { id: 2, title: "New Lead", description: "Someone just subscribed to your newsletter.", time: "1h ago", type: "info" },
    { id: 3, title: "Draft Saved", description: "Summer Sale Finale draft was saved.", time: "3h ago", type: "default" },
    { id: 4, title: "System Alert", description: "Planned maintenance scheduled for tonight at 12:00 PM.", time: "5h ago", type: "warning" },
    { id: 5, title: "Monthly Report", description: "Your October marketing summary is now ready.", time: "1d ago", type: "success" },
  ];

  return (
    <header className="flex items-center px-6 border-b h-20 bg-white shrink-0 sticky top-0 z-30 shadow-sm transition-all duration-300">
      <div className="md:hidden mr-4">
        <Sheet>
          <SheetTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "p-2 rounded-xl hover:bg-slate-100 text-slate-600 transition-all"
            )}
          >
            <Menu className="h-5 w-5" />
          </SheetTrigger>
          <SheetContent side="left" className="p-0 w-72">
            <Sidebar />
          </SheetContent>
        </Sheet>
      </div>

      <div className="flex-1 flex items-center">
        <form onSubmit={handleSearch} className="flex items-center w-full max-w-md bg-slate-100 rounded-xl px-4 py-2 text-slate-500 hidden md:flex focus-within:ring-4 focus-within:ring-indigo-50 focus-within:bg-white transition-all border border-transparent focus-within:border-indigo-100">
          <Search className="h-4 w-4 mr-3 shrink-0 text-slate-400" />
          <Input
            type="text"
            placeholder="Search dashboard..."
            className="border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 h-6 font-medium placeholder:text-slate-400 p-0"
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </form>
        
        {/* Mobile Search Trigger */}
        <Button variant="ghost" size="icon" className="md:hidden rounded-xl">
          <Search className="h-5 w-5 text-slate-600" />
        </Button>
      </div>

      <div className="flex items-center gap-x-4">
        {/* Notifications */}
        <DropdownMenu>
          <DropdownMenuTrigger
            className={cn(
              buttonVariants({ variant: "ghost", size: "icon" }),
              "relative rounded-xl hover:bg-slate-50 transition-all h-10 w-10 outline-none"
            )}
          >
            <Bell className="h-5 w-5 text-slate-600" />
            <span className="absolute top-2.5 right-2.5 h-2 w-2 rounded-full bg-rose-600 border-2 border-white shadow-sm" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80 p-2 rounded-2xl shadow-2xl border-slate-100">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-bold text-lg px-3 py-3 flex items-center justify-between">
                Notifications
                <Badge variant="outline" className="bg-slate-50 text-slate-600 border-slate-200 font-bold px-2 py-0.5">5 New</Badge>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2 bg-slate-50" />
              <div className="space-y-1">
                {notifications.map((n) => (
                  <DropdownMenuItem key={n.id} className="flex flex-col items-start gap-1 p-3 rounded-xl cursor-pointer hover:bg-slate-50 transition-all group border-none">
                    <div className="flex items-center justify-between w-full">
                      <p className="font-bold text-sm text-slate-900 group-hover:text-indigo-600 transition-colors">{n.title}</p>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{n.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">{n.description}</p>
                  </DropdownMenuItem>
                ))}
              </div>
              <DropdownMenuSeparator className="my-2 bg-slate-50" />
              <DropdownMenuItem className="justify-center font-bold text-indigo-600 hover:text-indigo-700 cursor-pointer p-3 rounded-xl hover:bg-indigo-50 border-none transition-colors">
                View all notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>

        <div className="h-8 w-[1px] bg-slate-100 hidden sm:block" />

        {/* User Menu */}
        <DropdownMenu>
          <DropdownMenuTrigger className="group flex items-center gap-3 p-1 rounded-2xl outline-none hover:bg-slate-50 transition-all pr-2">
            <Avatar className="h-9 w-9 border-2 border-white shadow-sm transition-transform group-hover:scale-105">
              <AvatarImage src={mockUser.avatar} alt={mockUser.name} />
              <AvatarFallback className="bg-indigo-600 text-white font-bold text-xs">
                {mockUser.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="hidden sm:flex flex-col items-start text-left">
              <p className="text-sm font-bold text-slate-900 leading-none">{mockUser.name}</p>
              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mt-0.5">{mockUser.role}</p>
            </div>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-64 p-2 rounded-2xl shadow-2xl border-slate-100" align="end">
            <DropdownMenuGroup>
              <DropdownMenuLabel className="font-normal px-3 py-4">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-bold leading-none text-slate-900">{mockUser.name}</p>
                  <p className="text-xs font-medium leading-none text-slate-400">
                    {mockUser.email}
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator className="my-2 bg-slate-50" />
              <DropdownMenuItem className="rounded-xl p-3 font-bold cursor-pointer focus:bg-slate-50 border-none" onClick={() => router.push("/profile")}>
                <User className="mr-3 h-4 w-4 text-slate-500" />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl p-3 font-bold cursor-pointer focus:bg-slate-50 border-none" onClick={() => router.push("/settings?tab=billing")}>
                <CreditCard className="mr-3 h-4 w-4 text-slate-500" />
                Billing & Plan
              </DropdownMenuItem>
              <DropdownMenuItem className="rounded-xl p-3 font-bold cursor-pointer focus:bg-slate-50 border-none" onClick={() => router.push("/settings")}>
                <Settings className="mr-3 h-4 w-4 text-slate-500" />
                Settings
              </DropdownMenuItem>
              <DropdownMenuSeparator className="my-2 bg-slate-50" />
              <DropdownMenuItem className="rounded-xl p-3 font-bold cursor-pointer text-rose-600 focus:bg-rose-50 focus:text-rose-600 border-none" onClick={() => router.push("/login")}>
                <LogOut className="mr-3 h-4 w-4" />
                Log out
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
