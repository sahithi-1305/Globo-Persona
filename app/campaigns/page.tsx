"use client";

import { useState } from "react";
import { mockRecentCampaignsTable } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  Search, 
  Filter, 
  Plus, 
  MoreVertical, 
  Download,
  Calendar,
  MousePointerClick,
  MailOpen,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal
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
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";

const ITEMS_PER_PAGE = 5;

export default function CampaignsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredCampaigns = mockRecentCampaignsTable.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === "All" || campaign.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const totalPages = Math.ceil(filteredCampaigns.length / ITEMS_PER_PAGE);
  const paginatedCampaigns = filteredCampaigns.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Reset to first page when filters change
  const handleFilterChange = (status: string) => {
    setStatusFilter(status);
    setCurrentPage(1);
  };

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };

  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">Campaigns</h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">Manage and track your email marketing performance.</p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-11 px-4 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm font-bold">
            <Download className="mr-2 h-4 w-4 text-slate-500" />
            Export Results
          </Button>
          <Link href="/campaigns/create">
            <Button className="h-11 px-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] font-bold">
              <Plus className="mr-2 h-5 w-5" />
              Create Campaign
            </Button>
          </Link>
        </div>
      </div>

      <Card className="border-none shadow-xl shadow-slate-200/50 bg-white overflow-hidden">
        <CardHeader className="border-b border-slate-50 px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96 group">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400 group-focus-within:text-indigo-500 transition-colors" />
              <Input 
                placeholder="Search campaigns..." 
                className="pl-10 h-11 bg-slate-50/50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all rounded-xl font-medium"
                value={searchTerm}
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl">
                {["All", "Sent", "Draft", "Scheduled"].map((status) => (
                  <button
                    key={status}
                    onClick={() => handleFilterChange(status)}
                    className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                      statusFilter === status 
                        ? "bg-white text-slate-900 shadow-sm" 
                        : "text-slate-500 hover:text-slate-700"
                    }`}
                  >
                    {status}
                  </button>
                ))}
              </div>
              <Button variant="outline" size="icon" className="h-11 w-11 border-slate-200 rounded-xl">
                <SlidersHorizontal className="h-4 w-4 text-slate-500" />
              </Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          <div className="overflow-x-auto">
            <Table>
              <TableHeader className="bg-slate-50/50">
                <TableRow className="hover:bg-transparent border-slate-100">
                  <TableHead className="px-8 py-4 text-slate-500 font-bold text-xs uppercase tracking-wider">Campaign Details</TableHead>
                  <TableHead className="py-4 text-slate-500 font-bold text-xs uppercase tracking-wider">Status</TableHead>
                  <TableHead className="py-4 text-slate-500 font-bold text-xs uppercase tracking-wider">Audience</TableHead>
                  <TableHead className="py-4 text-slate-500 font-bold text-xs uppercase tracking-wider text-center">Engagement</TableHead>
                  <TableHead className="py-4 text-slate-500 font-bold text-xs uppercase tracking-wider">Date</TableHead>
                  <TableHead className="px-8 py-4 text-right"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {paginatedCampaigns.map((campaign) => (
                  <TableRow key={campaign.id} className="group hover:bg-slate-50/80 transition-colors border-slate-50">
                    <TableCell className="px-8 py-5">
                      <div className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold text-lg group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm">
                          {campaign.name.charAt(0)}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">{campaign.name}</span>
                          <span className="text-xs text-slate-400 font-medium">ID: {campaign.id} • {campaign.contacts} recipients</span>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-5">
                      <Badge 
                        className={`rounded-full px-3 py-1 font-bold text-[10px] uppercase tracking-wider border-none ${
                          campaign.status === "Sent" ? "bg-emerald-100 text-emerald-700" :
                          campaign.status === "Draft" ? "bg-slate-100 text-slate-600" :
                          campaign.status === "Scheduled" ? "bg-amber-100 text-amber-700" :
                          "bg-indigo-100 text-indigo-700"
                        }`}
                      >
                        {campaign.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="py-5">
                      <span className="text-sm font-bold text-slate-600">{campaign.audience}</span>
                    </TableCell>
                    <TableCell className="py-5">
                      <div className="flex items-center justify-center gap-6">
                        <div className="flex flex-col items-center">
                          <span className="text-sm font-bold text-slate-900">{campaign.openRate}</span>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            <MailOpen className="h-2.5 w-2.5" />
                            Opens
                          </div>
                        </div>
                        <div className="flex flex-col items-center">
                          <span className="text-sm font-bold text-slate-900">{campaign.clickRate}</span>
                          <div className="flex items-center gap-1 text-[10px] font-bold text-slate-400 uppercase tracking-tighter">
                            <MousePointerClick className="h-2.5 w-2.5" />
                            Clicks
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className="py-5 text-sm font-bold text-slate-500">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-3.5 w-3.5" />
                        {campaign.date}
                      </div>
                    </TableCell>
                    <TableCell className="px-8 py-5 text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger className="h-9 w-9 rounded-xl hover:bg-white hover:shadow-md flex items-center justify-center text-slate-400 hover:text-slate-900 transition-all outline-none">
                          <MoreVertical className="h-4 w-4" />
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-52 p-2 rounded-2xl shadow-2xl border-slate-100">
                          <DropdownMenuItem className="font-bold cursor-pointer rounded-xl py-2 px-3 focus:bg-indigo-50 focus:text-indigo-600">View Report</DropdownMenuItem>
                          <DropdownMenuItem className="font-bold cursor-pointer rounded-xl py-2 px-3 focus:bg-indigo-50 focus:text-indigo-600">Edit Campaign</DropdownMenuItem>
                          <DropdownMenuItem className="font-bold cursor-pointer rounded-xl py-2 px-3 focus:bg-indigo-50 focus:text-indigo-600">Duplicate</DropdownMenuItem>
                          <DropdownMenuItem variant="destructive" className="font-bold cursor-pointer rounded-xl py-2 px-3 mt-1">Delete</DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
          <div className="p-8 border-t border-slate-50 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-slate-500 font-medium">
              Showing <span className="text-slate-900 font-bold">
                {filteredCampaigns.length === 0 ? 0 : (currentPage - 1) * ITEMS_PER_PAGE + 1} - {Math.min(currentPage * ITEMS_PER_PAGE, filteredCampaigns.length)}
              </span> of <span className="text-slate-900 font-bold">{filteredCampaigns.length}</span> campaigns
            </p>
            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="h-10 px-4 font-bold border-slate-200 rounded-xl hover:bg-slate-50 disabled:opacity-50" 
                onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                disabled={currentPage === 1}
              >
                <ChevronLeft className="mr-2 h-4 w-4" />
                Previous
              </Button>
              <div className="flex items-center gap-1">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                  <Button 
                    key={page} 
                    variant={currentPage === page ? "default" : "outline"} 
                    size="icon" 
                    className={`h-10 w-10 font-bold rounded-xl ${currentPage === page ? "bg-indigo-600 shadow-md shadow-indigo-100" : "border-slate-200"}`}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </Button>
                ))}
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                className="h-10 px-4 font-bold border-slate-200 rounded-xl hover:bg-slate-50"
                onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                disabled={currentPage === totalPages || totalPages === 0}
              >
                Next
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

