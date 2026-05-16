"use client";

import { mockUser } from "@/lib/mock-data";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  User, 
  Mail, 
  MapPin, 
  Calendar, 
  Settings, 
  Shield, 
  Bell, 
  CreditCard,
  ExternalLink,
  ChevronRight
} from "lucide-react";

export default function ProfilePage() {
  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">My Profile</h1>
        <p className="text-slate-500 font-medium">Manage your personal information and account preferences.</p>
      </div>

      <div className="grid gap-8 md:grid-cols-12">
        {/* Left Column - User Info */}
        <div className="md:col-span-4 space-y-8">
          <Card className="border-none shadow-xl shadow-slate-200/50 bg-white overflow-hidden">
            <div className="h-24 bg-gradient-to-r from-indigo-500 to-purple-600" />
            <CardContent className="relative pt-0 flex flex-col items-center">
              <div className="relative -mt-12 mb-4">
                <Avatar className="h-24 w-24 border-4 border-white shadow-xl">
                  <AvatarImage src={mockUser.avatar} />
                  <AvatarFallback className="bg-indigo-100 text-indigo-700 text-2xl font-bold">
                    {mockUser.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div className="absolute bottom-0 right-0 h-6 w-6 bg-emerald-500 border-4 border-white rounded-full" />
              </div>
              
              <div className="text-center space-y-1">
                <h2 className="text-xl font-bold text-slate-900">{mockUser.name}</h2>
                <Badge variant="secondary" className="bg-indigo-50 text-indigo-700 hover:bg-indigo-100 border-none font-bold">
                  {mockUser.role}
                </Badge>
              </div>

              <div className="w-full mt-8 space-y-4">
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Mail className="h-4 w-4 text-slate-400" />
                  <span className="font-medium">{mockUser.email}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <MapPin className="h-4 w-4 text-slate-400" />
                  <span className="font-medium">{mockUser.location}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-600">
                  <Calendar className="h-4 w-4 text-slate-400" />
                  <span className="font-medium">Joined {mockUser.joinedDate}</span>
                </div>
              </div>

              <Button className="w-full mt-8 bg-indigo-600 hover:bg-indigo-700 shadow-lg shadow-indigo-100">
                Edit Profile
              </Button>
            </CardContent>
          </Card>

          <Card className="border-none shadow-lg shadow-slate-200/50 bg-white">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-bold text-slate-900">Personal Bio</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-slate-500 leading-relaxed font-medium">
                {mockUser.bio}
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Right Column - Tabs/Details */}
        <div className="md:col-span-8 space-y-8">
          <Card className="border-none shadow-xl shadow-slate-200/50 bg-white">
            <CardHeader className="border-b border-slate-50 px-8 py-6">
              <CardTitle className="text-xl font-bold text-slate-900">Recent Activity</CardTitle>
              <CardDescription className="text-slate-500 font-medium mt-1">Your latest actions across the platform.</CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y divide-slate-50">
                {mockUser.recentActivity.map((activity) => (
                  <div key={activity.id} className="px-8 py-5 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                        {activity.id % 2 === 0 ? <ExternalLink className="h-5 w-5" /> : <Settings className="h-5 w-5" />}
                      </div>
                      <div className="space-y-0.5">
                        <p className="text-sm font-bold text-slate-900">{activity.action}</p>
                        <p className="text-xs text-slate-500 font-medium">{activity.target}</p>
                      </div>
                    </div>
                    <span className="text-xs text-slate-400 font-bold">{activity.time}</span>
                  </div>
                ))}
              </div>
              <div className="p-6 border-t border-slate-50 text-center">
                <Button variant="ghost" className="text-indigo-600 font-bold hover:bg-indigo-50">
                  View All Activity
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid gap-6 sm:grid-cols-2">
            <Card className="group border-none shadow-lg shadow-slate-200/50 bg-white hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center group-hover:bg-indigo-600 group-hover:text-white transition-all">
                    <Shield className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Security</h3>
                    <p className="text-xs text-slate-500 font-medium">Password & 2FA</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </CardContent>
            </Card>

            <Card className="group border-none shadow-lg shadow-slate-200/50 bg-white hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-pink-50 text-pink-600 flex items-center justify-center group-hover:bg-pink-600 group-hover:text-white transition-all">
                    <Bell className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Notifications</h3>
                    <p className="text-xs text-slate-500 font-medium">Email & Push</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </CardContent>
            </Card>

            <Card className="group border-none shadow-lg shadow-slate-200/50 bg-white hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all">
                    <CreditCard className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Billing</h3>
                    <p className="text-xs text-slate-500 font-medium">Plan & Invoices</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </CardContent>
            </Card>

            <Card className="group border-none shadow-lg shadow-slate-200/50 bg-white hover:shadow-xl transition-all cursor-pointer">
              <CardContent className="p-6 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center group-hover:bg-amber-600 group-hover:text-white transition-all">
                    <User className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-900">Team</h3>
                    <p className="text-xs text-slate-500 font-medium">Manage Members</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-300 group-hover:text-slate-900 transition-colors" />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
