"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Mail,
  Users,
  Settings,
  BarChart,
  Megaphone,
  Zap,
  HelpCircle,
  LogOut,
  ChevronRight
} from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { mockUser } from "@/lib/mock-data";

const routes = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/",
    color: "text-indigo-500",
  },
  {
    label: "Campaigns",
    icon: Megaphone,
    href: "/campaigns",
    color: "text-rose-500",
  },
  {
    label: "Analytics",
    icon: BarChart,
    href: "/analytics",
    color: "text-sky-500",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
    color: "text-slate-500",
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-6 flex flex-col h-full bg-slate-900 text-white border-r border-slate-800 shadow-2xl">
      <div className="px-6 py-2 flex-1 flex flex-col">
        <Link href="/" className="flex items-center mb-10 group">
          <div className="relative w-10 h-10 mr-4 flex items-center justify-center bg-indigo-600 rounded-xl shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform duration-300">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-2xl font-bold tracking-tight">MailSaaS</h1>
        </Link>
        
        <div className="space-y-1.5 flex-1">
          {routes.map((route) => {
            const isActive = pathname === route.href;
            return (
              <Link
                key={route.href}
                href={route.href}
                className={cn(
                  "group flex items-center p-3.5 w-full justify-start font-bold rounded-2xl transition-all duration-200 relative overflow-hidden",
                  isActive
                    ? "text-white bg-indigo-600 shadow-lg shadow-indigo-600/20"
                    : "text-slate-400 hover:text-white hover:bg-white/5"
                )}
              >
                <route.icon className={cn(
                  "h-5 w-5 mr-3 transition-colors",
                  isActive ? "text-white" : route.color
                )} />
                {route.label}
                {isActive && (
                  <div className="absolute right-3">
                    <ChevronRight className="h-4 w-4 opacity-50" />
                  </div>
                )}
              </Link>
            );
          })}
        </div>

        <div className="mt-auto space-y-1.5 pt-6 border-t border-slate-800">
          <Link
            href="/support"
            className="group flex items-center p-3.5 w-full justify-start font-bold text-slate-400 hover:text-white hover:bg-white/5 rounded-2xl transition-all"
          >
            <HelpCircle className="h-5 w-5 mr-3 text-slate-500" />
            Support Center
          </Link>
          
          <div className="mt-4 p-4 bg-gradient-to-br from-indigo-600/20 to-purple-600/20 rounded-2xl border border-indigo-500/20">
            <p className="text-xs font-bold text-indigo-400 uppercase tracking-widest mb-1">Current Plan</p>
            <h4 className="text-sm font-bold text-white mb-3">Enterprise Pro</h4>
            <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mb-2">
              <div className="h-full bg-indigo-500 w-[75%] rounded-full shadow-[0_0_8px_rgba(99,102,241,0.5)]" />
            </div>
            <p className="text-[10px] text-slate-400 font-medium">18.5k / 25k emails sent</p>
          </div>
        </div>
      </div>

      {/* User Quick Access */}
      <div className="px-6 pt-2 pb-2">
        <Link 
          href="/profile"
          className="flex items-center gap-3 p-3 rounded-2xl hover:bg-white/5 transition-all group border border-transparent hover:border-slate-800"
        >
          <Avatar className="h-10 w-10 border border-slate-700 group-hover:border-indigo-500 transition-colors">
            <AvatarImage src={mockUser.avatar} />
            <AvatarFallback className="bg-slate-800 text-indigo-400 font-bold">{mockUser.name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="flex-1 overflow-hidden">
            <p className="text-sm font-bold text-white truncate">{mockUser.name}</p>
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter truncate">{mockUser.role}</p>
          </div>
          <Settings className="h-4 w-4 text-slate-600 group-hover:text-white transition-colors" />
        </Link>
      </div>
    </div>
  );
}
