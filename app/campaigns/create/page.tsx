"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { mockAudienceSegments } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from "@/components/ui/select";
import {
  ArrowLeft,
  Send,
  Save,
  Calendar,
  Eye,
  Settings2,
  Sparkles,
  Info
} from "lucide-react";
import Link from "next/link";

export default function CreateCampaignPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      router.push("/campaigns");
    }, 1500);
  };

  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/campaigns">
            <Button variant="ghost" size="icon" className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-md transition-all">
              <ArrowLeft className="h-5 w-5 text-slate-500" />
            </Button>
          </Link>
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight text-slate-900">Create Campaign</h1>
            <p className="text-slate-500 font-medium">Design and schedule your next marketing email.</p>
          </div>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <Button variant="outline" className="h-11 px-6 border-slate-200 bg-white font-bold rounded-xl shadow-sm">
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button variant="outline" className="h-11 px-6 border-slate-200 bg-white font-bold rounded-xl shadow-sm text-indigo-600">
            <Eye className="mr-2 h-4 w-4" />
            Send Test
          </Button>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-12">
        {/* Main Form Area */}
        <div className="lg:col-span-8 space-y-8">
          <Card className="border-none shadow-xl shadow-slate-200/50 bg-white overflow-hidden">
            <CardHeader className="border-b border-slate-50 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                  <Settings2 className="h-5 w-5" />
                </div>
                <div>
                  <CardTitle className="text-xl font-bold text-slate-900">Campaign Details</CardTitle>
                  <CardDescription className="text-slate-500 font-medium">Basic information about your campaign.</CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-bold text-slate-700 ml-1">Campaign Name</Label>
                  <Input
                    id="name"
                    placeholder="e.g. Summer Sale 2024"
                    className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all rounded-xl font-medium"
                  />
                  <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider ml-1">Internal use only</p>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="audience" className="text-sm font-bold text-slate-700 ml-1">Target Audience</Label>
                  <Select>
                    <SelectTrigger id="audience" className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all rounded-xl font-medium">
                      <SelectValue placeholder="Select segment" />
                    </SelectTrigger>
                    <SelectContent className="rounded-xl border-slate-100 shadow-2xl">
                      {mockAudienceSegments.map((segment) => (
                        <SelectItem key={segment} value={segment.toLowerCase().replace(/\s+/g, '-')} className="rounded-lg font-medium">
                          {segment}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject" className="text-sm font-bold text-slate-700 ml-1">Email Subject Line</Label>
                <div className="relative group">
                  <Input
                    id="subject"
                    placeholder="What will your subscribers see?"
                    className="h-12 bg-slate-50/50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all rounded-xl font-medium pr-10"
                  />
                  <div className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-300 hover:text-indigo-500 cursor-help transition-colors">
                    <Sparkles className="h-4 w-4" />
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-2 ml-1">
                  <Info className="h-3 w-3 text-slate-400" />
                  <p className="text-xs text-slate-500 font-medium">Personalize with tags like {'{first_name}'} to increase open rates.</p>
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="content" className="text-sm font-bold text-slate-700 ml-1">Email Content</Label>
                <Textarea
                  id="content"
                  placeholder="Write your email content here or use a template..."
                  className="min-h-[300px] bg-slate-50/50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all rounded-2xl font-medium p-6"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar Controls */}
        <div className="lg:col-span-4 space-y-8">
          <Card className="border-none shadow-xl shadow-slate-200/50 bg-white overflow-hidden">
            <CardHeader className="bg-slate-50/50 border-b border-slate-100 px-6 py-4">
              <CardTitle className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <Calendar className="h-4 w-4 text-indigo-600" />
                Scheduling
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-6">
              <div className="space-y-2">
                <Label htmlFor="date" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Send Date</Label>
                <Input
                  id="date"
                  type="date"
                  className="h-11 bg-slate-50 border-slate-200 rounded-xl font-bold text-slate-900"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="time" className="text-xs font-bold text-slate-500 uppercase tracking-wider">Send Time</Label>
                <Input
                  id="time"
                  type="time"
                  className="h-11 bg-slate-50 border-slate-200 rounded-xl font-bold text-slate-900"
                />
              </div>
              <div className="p-4 bg-emerald-50 rounded-2xl border border-emerald-100 flex gap-3">
                <Info className="h-5 w-5 text-emerald-600 shrink-0" />
                <p className="text-xs text-emerald-800 font-medium leading-relaxed">
                  We recommend sending this on <span className="font-bold">Tuesday at 10:00 AM</span> for maximum engagement based on your audience.
                </p>
              </div>
            </CardContent>
            <CardFooter className="p-6 bg-slate-50/50 border-t border-slate-100">
              <Button
                onClick={handleSubmit}
                disabled={isLoading}
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-lg shadow-indigo-100 rounded-xl transition-all"
              >
                {isLoading ? "Publishing..." : (
                  <>
                    <Send className="mr-2 h-4 w-4" />
                    Publish Campaign
                  </>
                )}
              </Button>
            </CardFooter>
          </Card>

          <Card className="border-none shadow-lg shadow-slate-200/50 bg-white p-6">
            <h3 className="font-bold text-slate-900 mb-4">Quick Tips</h3>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-indigo-700">1</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Keep your subject line under 50 characters.</p>
              </li>
              <li className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-indigo-700">2</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Add at least one clear Call to Action (CTA).</p>
              </li>
              <li className="flex gap-3">
                <div className="h-5 w-5 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                  <span className="text-[10px] font-bold text-indigo-700">3</span>
                </div>
                <p className="text-xs text-slate-500 font-medium">Avoid using too many high-resolution images.</p>
              </li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  );
}
