"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Overview } from "@/components/overview";
import { 
  mockEmailDashboardStats, 
  mockRecentCampaignsTable, 
  mockUser,
  mockActivityFeed 
} from "@/lib/mock-data";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  Megaphone, 
  MailOpen, 
  MousePointerClick, 
  Users, 
  ArrowUpRight, 
  ArrowDownRight,
  Plus,
  Filter,
  Calendar,
  MoreVertical,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Zap,
  TrendingUp,
  Activity,
  MessageSquare,
  FileText,
  AlertCircle,
  Send as SendIcon
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuTrigger 
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const ITEMS_PER_PAGE = 5;

export default function DashboardPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [showExportMsg, setShowExportMsg] = useState(false);

  const totalPages = Math.ceil(mockRecentCampaignsTable.length / ITEMS_PER_PAGE);
  const paginatedCampaigns = mockRecentCampaignsTable.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "megaphone": return <Megaphone className="h-5 w-5 text-indigo-500" />;
      case "mail-open": return <MailOpen className="h-5 w-5 text-emerald-500" />;
      case "mouse-pointer-click": return <MousePointerClick className="h-5 w-5 text-amber-500" />;
      case "users": return <Users className="h-5 w-5 text-sky-500" />;
      default: return null;
    }
  };

  const getActivityIcon = (type: string) => {
    switch (type) {
      case "sent": return <SendIcon className="h-4 w-4 text-indigo-500" />;
      case "reply": return <MessageSquare className="h-4 w-4 text-emerald-500" />;
      case "draft": return <FileText className="h-4 w-4 text-amber-500" />;
      case "bounce": return <AlertCircle className="h-4 w-4 text-rose-500" />;
      default: return <Activity className="h-4 w-4 text-slate-500" />;
    }
  };

  const handleExport = () => {
    setShowExportMsg(true);
    setTimeout(() => setShowExportMsg(false), 3000);
  };

  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Command Center
          </h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">
            Good morning, {mockUser.name.split(' ')[0]}. Here is your morning brief.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Link href="/campaigns/create">
            <Button className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] font-bold rounded-xl">
              <Plus className="mr-2 h-5 w-5" />
              Launch Campaign
            </Button>
          </Link>
        </div>
      </div>

      {showExportMsg && (
        <div className="fixed top-24 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-full duration-500 border border-slate-700 backdrop-blur-md bg-opacity-90">
          <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold">Export Complete</p>
            <p className="text-xs text-slate-400 font-medium">Your campaign data is ready for download.</p>
          </div>
        </div>
      )}

      {/* Primary Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockEmailDashboardStats.map((stat, i) => (
          <Card key={i} className="group relative overflow-hidden border-none shadow-xl shadow-slate-200/40 hover:shadow-2xl transition-all duration-300 rounded-3xl bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
              <CardTitle className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-slate-50 rounded-xl group-hover:bg-indigo-600 group-hover:text-white transition-all duration-300">
                {getIcon(stat.icon)}
              </div>
            </CardHeader>
            <CardContent className="relative z-10">
              <div className="text-3xl font-black text-slate-900">{stat.value}</div>
              <div className="flex items-center mt-2">
                <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-md ${
                  stat.trend === "up" ? "bg-emerald-50 text-emerald-600" : "bg-rose-50 text-rose-600"
                }`}>
                  {stat.change.split(' ')[0]}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        {/* Quick View Chart */}
        <Card className="md:col-span-8 border-none shadow-2xl shadow-slate-200/40 overflow-hidden bg-white rounded-3xl">
          <CardHeader className="px-8 py-7 border-b border-slate-50 flex flex-row items-center justify-between bg-white">
            <div>
              <CardTitle className="text-xl font-extrabold text-slate-900">Campaign Traffic</CardTitle>
              <CardDescription>Visualizing your current reach.</CardDescription>
            </div>
            <Link href="/analytics">
              <Button variant="ghost" className="text-indigo-600 font-bold hover:bg-indigo-50 rounded-xl">
                Detailed Analytics
                <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </Link>
          </CardHeader>
          <CardContent className="p-8 h-[350px]">
            <Overview />
          </CardContent>
        </Card>

        {/* Real-time Activity Feed */}
        <Card className="md:col-span-4 border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden flex flex-col">
          <CardHeader className="px-8 py-7 border-b border-slate-50 bg-indigo-600 text-white">
            <CardTitle className="text-xl font-extrabold flex items-center gap-2">
              <Activity className="h-5 w-5" />
              Live Activity
            </CardTitle>
            <CardDescription className="text-indigo-100">Happening right now.</CardDescription>
          </CardHeader>
          <CardContent className="p-0 flex-1">
            <div className="divide-y divide-slate-50">
              {mockActivityFeed.map((activity) => (
                <div key={activity.id} className="p-6 hover:bg-slate-50 transition-all flex items-start gap-4">
                  <div className={`mt-1 p-2 rounded-xl bg-white shadow-sm border border-slate-100`}>
                    {getActivityIcon(activity.type)}
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm font-bold text-slate-900">
                      {activity.type === "sent" ? "Campaign Sent" :
                       activity.type === "reply" ? "New Response" :
                       activity.type === "draft" ? "Draft Saved" :
                       "Delivery Issue"}
                    </p>
                    <p className="text-xs text-slate-500 font-medium">{activity.campaign}</p>
                    <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="p-6 border-t border-slate-50">
              <Button variant="outline" className="w-full font-bold rounded-xl border-slate-200">Clear Logs</Button>
            </div>
          </CardContent>
        </Card>

        {/* Active Campaigns List */}
        <Card className="md:col-span-12 border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
          <CardHeader className="px-8 py-7 border-b border-slate-50 flex flex-row items-center justify-between bg-white">
            <div>
              <CardTitle className="text-xl font-extrabold text-slate-900">Active Campaigns</CardTitle>
              <CardDescription>Manage your current marketing initiatives.</CardDescription>
            </div>
            <Link href="/campaigns">
              <Button className="font-bold bg-slate-900 hover:bg-slate-800 text-white rounded-xl">View All Campaigns</Button>
            </Link>
          </CardHeader>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <Table>
                <TableHeader className="bg-slate-50/50">
                  <TableRow className="hover:bg-transparent border-slate-100">
                    <TableHead className="px-8 py-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">Campaign</TableHead>
                    <TableHead className="py-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest">Status</TableHead>
                    <TableHead className="py-4 text-slate-500 font-bold text-[10px] uppercase tracking-widest text-center">Open Rate</TableHead>
                    <th className="px-8 py-4 text-right"></th>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedCampaigns.map((campaign) => (
                    <TableRow key={campaign.id} className="group hover:bg-slate-50/80 transition-colors border-slate-50">
                      <TableCell className="px-8 py-5">
                        <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{campaign.name}</span>
                      </TableCell>
                      <TableCell className="py-5">
                        <Badge className={`font-bold text-[10px] border-none rounded-md px-2 py-0.5 ${
                          campaign.status === "Sent" ? "bg-emerald-100 text-emerald-700" :
                          campaign.status === "Draft" ? "bg-amber-100 text-amber-700" :
                          "bg-indigo-100 text-indigo-700"
                        }`}>{campaign.status}</Badge>
                      </TableCell>
                      <TableCell className="py-5 text-center font-bold text-slate-700">{campaign.openRate}</TableCell>
                      <TableCell className="px-8 py-5 text-right">
                        <Button variant="ghost" size="icon" className="rounded-xl text-slate-400 hover:text-slate-900">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
            
            {/* Pagination Controls */}
            <div className="px-8 py-6 border-t border-slate-50 flex items-center justify-between bg-white">
              <p className="text-sm font-bold text-slate-500">
                Page <span className="text-slate-900">{currentPage}</span> of <span className="text-slate-900">{totalPages}</span>
              </p>
              <div className="flex items-center gap-2">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-xl border-slate-200 font-bold"
                  onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                  disabled={currentPage === 1}
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="rounded-xl border-slate-200 font-bold"
                  onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                  disabled={currentPage === totalPages}
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
