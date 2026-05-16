"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  mockAnalyticsStats, 
  mockConversionData, 
  mockDeviceData, 
  mockRecentCampaignsTable,
  mockActivityChartData,
  mockTimingData
} from "@/lib/mock-data";

import { 
  BarChart as BarChartIcon, 
  TrendingUp, 
  ArrowUpRight, 
  ArrowDownRight, 
  Calendar,
  Download,
  Send,
  AlertCircle,
  UserMinus,
  Target,
  Smartphone,
  Monitor,
  Tablet,
  Clock,
  Globe,
  CheckCircle2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
  AreaChart,
  Area
} from "recharts";

const COLORS = ['#6366f1', '#f43f5e', '#f59e0b', '#10b981', '#8b5cf6'];

export default function AnalyticsPage() {
  const [showScheduleMsg, setShowScheduleMsg] = useState(false);
  const [showDownloadMsg, setShowDownloadMsg] = useState(false);

  const handleSchedule = () => {
    setShowScheduleMsg(true);
    setTimeout(() => setShowScheduleMsg(false), 3000);
  };

  const handleDownload = () => {
    setShowDownloadMsg(true);
    setTimeout(() => setShowDownloadMsg(false), 3000);
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "send": return <Send className="h-4 w-4" />;
      case "alert-circle": return <AlertCircle className="h-4 w-4" />;
      case "user-minus": return <UserMinus className="h-4 w-4" />;
      case "target": return <Target className="h-4 w-4" />;
      default: return <TrendingUp className="h-4 w-4" />;
    }
  };

  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
            Intelligence Report
          </h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">
            Advanced behavioral analysis and campaign performance trends.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="h-12 px-5 border-slate-200 bg-white hover:bg-slate-50 transition-all shadow-sm font-bold rounded-xl">
            <Calendar className="mr-2 h-4 w-4 text-slate-500" />
            Last Quarter
          </Button>
          <Button 
            onClick={handleDownload}
            className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02] active:scale-[0.98] font-bold rounded-xl"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Full PDF
          </Button>
        </div>
      </div>

      {showDownloadMsg && (
        <div className="fixed top-24 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-full duration-500 border border-slate-700 backdrop-blur-md bg-opacity-90">
          <div className="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
            <Download className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold">Exporting Data</p>
            <p className="text-xs text-slate-400 font-medium">Your intelligence report PDF is being generated...</p>
          </div>
        </div>
      )}

      {showScheduleMsg && (

        <div className="fixed top-24 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-full duration-500 border border-slate-700 backdrop-blur-md bg-opacity-90">
          <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold">Optimization Applied</p>
            <p className="text-xs text-slate-400 font-medium">Next campaign scheduled for peak engagement window.</p>
          </div>
        </div>
      )}


      {/* Analytics Specific Stats */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {mockAnalyticsStats.map((stat, i) => (
          <Card key={i} className="group border-none shadow-xl shadow-slate-200/40 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 rounded-3xl bg-white overflow-hidden">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-xs font-bold text-slate-400 tracking-widest uppercase">
                {stat.title}
              </CardTitle>
              <div className={`p-2.5 rounded-xl transition-all duration-300 ${
                i === 0 ? "bg-indigo-50 text-indigo-600" :
                i === 1 ? "bg-rose-50 text-rose-600" :
                i === 2 ? "bg-slate-100 text-slate-600" :
                "bg-emerald-50 text-emerald-600"
              }`}>
                {getIcon(stat.icon)}
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-extrabold text-slate-900">{stat.value}</div>
              <div className="flex items-center mt-4 space-x-2">
                <div className={`flex items-center px-2 py-0.5 rounded-lg text-[10px] font-bold uppercase ${
                  stat.trend === "up" ? "bg-emerald-50 text-emerald-600" : 
                  stat.trend === "neutral" ? "bg-slate-50 text-slate-500" :
                  "bg-rose-50 text-rose-600"
                }`}>
                  {stat.trend === "up" ? <ArrowUpRight className="h-3 w-3 mr-1" /> : 
                   stat.trend === "neutral" ? null :
                   <ArrowDownRight className="h-3 w-3 mr-1" />}
                  {stat.change}
                </div>
                <span className="text-xs text-slate-400 font-bold">vs last quarter</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        {/* Engagement Trends - Different Chart Type/Style */}
        <Card className="md:col-span-8 border-none shadow-2xl shadow-slate-200/40 overflow-hidden bg-white rounded-3xl">
          <CardHeader className="border-b border-slate-50 bg-white px-8 py-7">
            <CardTitle className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <TrendingUp className="h-5 w-5 text-indigo-600" />
              Growth Velocity
            </CardTitle>
            <CardDescription className="text-slate-500 font-medium mt-1">
              Analyzing the speed of audience engagement across campaigns.
            </CardDescription>
          </CardHeader>
          <CardContent className="p-8 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={mockActivityChartData}>
                <defs>
                  <linearGradient id="colorGrowth" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6366f1" stopOpacity={0.1}/>
                    <stop offset="95%" stopColor="#6366f1" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis dataKey="date" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 20px 25px -5px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="step" 
                  dataKey="opens" 
                  stroke="#6366f1" 
                  strokeWidth={4} 
                  fillOpacity={1} 
                  fill="url(#colorGrowth)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        {/* Global Distribution - New Concept */}
        <Card className="md:col-span-4 border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-slate-50 px-8 py-7">
            <CardTitle className="text-xl font-extrabold text-slate-900 flex items-center gap-2">
              <Globe className="h-5 w-5 text-sky-500" />
              Top Regions
            </CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <div className="space-y-6">
              {[
                { name: "North America", value: 45, color: "bg-indigo-500" },
                { name: "Europe", value: 32, color: "bg-purple-500" },
                { name: "Asia Pacific", value: 18, color: "bg-pink-500" },
                { name: "Others", value: 5, color: "bg-slate-300" }
              ].map((region, i) => (
                <div key={i} className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="font-bold text-slate-700">{region.name}</span>
                    <span className="font-black text-slate-900">{region.value}%</span>
                  </div>
                  <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className={`h-full ${region.color} rounded-full`} style={{ width: `${region.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Behavioral Metrics */}
        <div className="md:col-span-4 grid gap-8">
          <Card className="border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-bold text-slate-400 uppercase tracking-widest">Device Analysis</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[200px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie data={mockDeviceData} innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
                      {mockDeviceData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
              <div className="flex justify-center gap-4 mt-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-indigo-500" />
                  <span className="text-xs font-bold text-slate-600">Desktop</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold text-slate-600">Mobile</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Funnel & Conversion */}
        <Card className="md:col-span-8 border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-slate-50 px-8 py-7 flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-extrabold text-slate-900">Conversion Funnel</CardTitle>
            <Target className="h-5 w-5 text-emerald-500" />
          </CardHeader>
          <CardContent className="p-8">
            <div className="h-[250px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={mockConversionData} layout="vertical">
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" stroke="#94a3b8" fontSize={12} tickLine={false} axisLine={false} width={80} />
                  <Tooltip cursor={{fill: 'transparent'}} />
                  <Bar dataKey="value" fill="#6366f1" radius={[0, 10, 10, 0]} barSize={30} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Timing Analysis - Unique to Analytics */}
        <Card className="md:col-span-12 border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
          <CardHeader className="border-b border-slate-50 px-8 py-7 bg-slate-900 text-white">
            <CardTitle className="text-xl font-extrabold flex items-center gap-2">
              <Clock className="h-5 w-5 text-indigo-400" />
              Optimal Send Times
            </CardTitle>
            <CardDescription className="text-slate-400">Peak engagement hours based on recipient behavior.</CardDescription>
          </CardHeader>
          <CardContent className="p-8 bg-slate-900">
            <div className="grid grid-cols-12 gap-2">
              {mockTimingData.map((value, i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div 
                    className="w-full bg-indigo-500/20 rounded-t-lg hover:bg-indigo-500/60 transition-all cursor-pointer border border-indigo-500/30" 
                    style={{ height: `${value + 20}px` }}
                  />
                  <span className="text-[10px] font-bold text-slate-500">{i}:00</span>
                </div>
              ))}
            </div>

            <div className="mt-8 flex items-center justify-between p-6 bg-white/5 rounded-2xl border border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-indigo-500/20 rounded-xl text-indigo-400">
                  <TrendingUp className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-bold text-white">Peak Window Identified</p>
                  <p className="text-xs text-slate-400">Tuesdays & Thursdays between 10:00 AM - 11:30 AM</p>
                </div>
              </div>
              <Button 
                onClick={handleSchedule}
                className="bg-white text-slate-900 hover:bg-slate-200 font-bold rounded-xl"
              >
                Schedule Now
              </Button>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
