"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { 
  User, 
  Bell, 
  Lock, 
  Key, 
  Save, 
  CheckCircle2, 
  RefreshCcw, 
  Trash2,
  Globe,
  Mail,
  Shield,
  Zap,
  CreditCard,
  Link as LinkIcon,
  Plus,
  ExternalLink,
  Download,
  FileText,
  MoreVertical,
  MessageSquare
} from "lucide-react";


import { mockUser } from "@/lib/mock-data";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

function SettingsContent() {
  const [showSaveMsg, setShowSaveMsg] = useState(false);
  const [showGenericMsg, setShowGenericMsg] = useState({ show: false, title: "", message: "" });
  const [isSaving, setIsSaving] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const searchParams = useSearchParams();

  useEffect(() => {
    const tab = searchParams.get("tab");
    if (tab && ["profile", "billing", "notifications", "security", "api"].includes(tab)) {
      setActiveTab(tab);
    }
  }, [searchParams]);

  const handleSave = () => {
    setIsSaving(true);
    setTimeout(() => {
      setIsSaving(false);
      setShowSaveMsg(true);
      setTimeout(() => setShowSaveMsg(false), 3000);
    }, 1000);
  };

  const triggerToast = (title: string, message: string) => {
    setShowGenericMsg({ show: true, title, message });
    setTimeout(() => setShowGenericMsg({ show: false, title: "", message: "" }), 3000);
  };

  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Header Section */}
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-4xl font-black tracking-tight text-slate-900">
            Settings
          </h1>
          <p className="text-slate-500 mt-2 text-lg font-medium">
            Personalize your account and configure system preferences.
          </p>
        </div>
        <Button 
          onClick={handleSave} 
          disabled={isSaving}
          className="h-12 px-6 bg-indigo-600 hover:bg-indigo-700 text-white shadow-lg shadow-indigo-200 transition-all font-bold rounded-xl flex items-center gap-2"
        >
          {isSaving ? <RefreshCcw className="h-5 w-5 animate-spin" /> : <Save className="h-5 w-5" />}
          {isSaving ? "Saving..." : "Save Changes"}
        </Button>
      </div>

      {showSaveMsg && (
        <div className="fixed top-24 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-full duration-500 border border-slate-700 backdrop-blur-md bg-opacity-90">
          <div className="h-8 w-8 bg-emerald-500 rounded-full flex items-center justify-center">
            <CheckCircle2 className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold">Preferences Updated</p>
            <p className="text-xs text-slate-400 font-medium">Your changes have been saved successfully.</p>
          </div>
        </div>
      )}

      {showGenericMsg.show && (
        <div className="fixed top-24 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-full duration-500 border border-slate-700 backdrop-blur-md bg-opacity-90">
          <div className="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold">{showGenericMsg.title}</p>
            <p className="text-xs text-slate-400 font-medium">{showGenericMsg.message}</p>
          </div>
        </div>
      )}

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full flex flex-col md:flex-row gap-10">
        <TabsList className="bg-slate-100 p-2 rounded-3xl w-full md:w-72 h-fit flex flex-col items-stretch gap-2 shrink-0">
          <TabsTrigger value="profile" className="rounded-2xl px-6 py-4 justify-start data-[state=active]:bg-white data-[state=active]:shadow-lg font-bold text-slate-600 data-[state=active]:text-indigo-600 transition-all border border-transparent data-[state=active]:border-slate-100">
            <User className="h-5 w-5 mr-3" />
            Profile
          </TabsTrigger>
          <TabsTrigger value="billing" className="rounded-2xl px-6 py-4 justify-start data-[state=active]:bg-white data-[state=active]:shadow-lg font-bold text-slate-600 data-[state=active]:text-indigo-600 transition-all border border-transparent data-[state=active]:border-slate-100">
            <CreditCard className="h-5 w-5 mr-3" />
            Billing
          </TabsTrigger>
          <TabsTrigger value="notifications" className="rounded-2xl px-6 py-4 justify-start data-[state=active]:bg-white data-[state=active]:shadow-lg font-bold text-slate-600 data-[state=active]:text-indigo-600 transition-all border border-transparent data-[state=active]:border-slate-100">
            <Bell className="h-5 w-5 mr-3" />
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="rounded-2xl px-6 py-4 justify-start data-[state=active]:bg-white data-[state=active]:shadow-lg font-bold text-slate-600 data-[state=active]:text-indigo-600 transition-all border border-transparent data-[state=active]:border-slate-100">
            <Shield className="h-5 w-5 mr-3" />
            Security
          </TabsTrigger>
          <TabsTrigger value="api" className="rounded-2xl px-6 py-4 justify-start data-[state=active]:bg-white data-[state=active]:shadow-lg font-bold text-slate-600 data-[state=active]:text-indigo-600 transition-all border border-transparent data-[state=active]:border-slate-100">
            <Zap className="h-5 w-5 mr-3" />
            Integrations
          </TabsTrigger>
          
          <div className="mt-8 p-6 bg-white/50 rounded-2xl border border-white/50 backdrop-blur-sm">
            <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2">Need help?</p>
            <p className="text-xs text-slate-500 font-medium leading-relaxed">Contact our support team for assistance with your account.</p>
            <Link href="/support">
              <Button 
                variant="link" 
                className="p-0 h-auto text-indigo-600 font-bold text-xs mt-2"
              >
                Support Center
              </Button>
            </Link>
          </div>
        </TabsList>

        <div className="flex-1 min-w-0">
          {/* Profile Content */}
          <TabsContent value="profile" className="animate-in fade-in duration-500">
            <div className="grid gap-8 grid-cols-1">
              <Card className="border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-slate-50 px-8 py-7 bg-white flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-extrabold text-slate-900">Personal Information</CardTitle>
                    <CardDescription>Update your public profile details.</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-8 space-y-6">
                  <div className="flex flex-col md:flex-row gap-8">
                    <div className="flex flex-col items-center gap-4">
                      <Avatar className="h-32 w-32 border-4 border-indigo-50 shadow-xl">
                        <AvatarImage src={mockUser.avatar} />
                        <AvatarFallback>{mockUser.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <Button 
                        variant="outline" 
                        className="h-10 border-slate-200 font-bold rounded-xl hover:bg-slate-50"
                        onClick={() => triggerToast("Avatar Update", "Redirecting to image uploader...")}
                      >
                        Change Photo
                      </Button>
                    </div>
                    <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Full Name</Label>
                        <Input defaultValue={mockUser.name} className="h-12 rounded-xl border-slate-200 focus:ring-indigo-500" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Email Address</Label>
                        <Input defaultValue={mockUser.email} className="h-12 rounded-xl border-slate-200 focus:ring-indigo-500" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Job Title</Label>
                        <Input defaultValue={mockUser.role} className="h-12 rounded-xl border-slate-200 focus:ring-indigo-500" />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-sm font-bold text-slate-700">Location</Label>
                        <Input defaultValue={mockUser.location} className="h-12 rounded-xl border-slate-200 focus:ring-indigo-500" />
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label className="text-sm font-bold text-slate-700">Professional Bio</Label>
                    <textarea 
                      defaultValue={mockUser.bio}
                      className="w-full min-h-[120px] rounded-2xl border border-slate-200 p-4 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Billing Content */}
          <TabsContent value="billing" className="animate-in fade-in duration-500">
            <div className="grid gap-8 md:grid-cols-12">
              <Card className="md:col-span-12 border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-slate-50 px-8 py-7 bg-indigo-600 text-white">
                  <div className="flex items-center justify-between">
                    <div>
                      <CardTitle className="text-xl font-extrabold">Enterprise Plan</CardTitle>
                      <CardDescription className="text-indigo-100 font-medium mt-1">Your next billing date is December 15, 2023.</CardDescription>
                    </div>
                    <Badge className="bg-white/20 text-white border-none px-4 py-1.5 rounded-full font-bold">Active</Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Monthly Cost</p>
                      <p className="text-3xl font-black text-slate-900">$299.00</p>
                    </div>
                    <div className="space-y-1">
                      <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">Contact Limit</p>
                      <p className="text-3xl font-black text-slate-900">50,000</p>
                      <div className="w-full h-1.5 bg-slate-100 rounded-full mt-2">
                        <div className="w-[49%] h-full bg-indigo-500 rounded-full" />
                      </div>
                      <p className="text-[10px] font-bold text-slate-400 mt-1 uppercase">24,592 used (49%)</p>
                    </div>
                    <div className="flex items-center justify-end">
                      <Button 
                        className="bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl px-6"
                        onClick={() => triggerToast("Billing Redirect", "Taking you to Stripe customer portal...")}
                      >
                        Manage Subscription
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="md:col-span-12 border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-slate-50 px-8 py-7 bg-white flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-extrabold text-slate-900">Billing History</CardTitle>
                    <CardDescription>Download and view your past invoices.</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-0">
                  <div className="divide-y divide-slate-50">
                    {[
                      { id: "INV-001", date: "Nov 15, 2023", amount: "$299.00", status: "Paid" },
                      { id: "INV-002", date: "Oct 15, 2023", amount: "$299.00", status: "Paid" },
                      { id: "INV-003", date: "Sep 15, 2023", amount: "$299.00", status: "Paid" }
                    ].map((inv, i) => (
                      <div key={i} className="px-8 py-6 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                        <div className="flex items-center gap-6">
                          <div className="h-10 w-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400">
                            <FileText className="h-5 w-5" />
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{inv.id}</p>
                            <p className="text-sm text-slate-500 font-medium">{inv.date}</p>
                          </div>
                        </div>
                        <div className="flex items-center gap-8">
                          <p className="font-black text-slate-900">{inv.amount}</p>
                          <Badge className="bg-emerald-50 text-emerald-600 border-none font-bold rounded-lg px-3 py-1">{inv.status}</Badge>
                          <Button 
                            variant="ghost" 
                            size="icon" 
                            className="text-slate-400 hover:text-indigo-600"
                            onClick={() => triggerToast("Invoice Download", `Generating PDF for ${inv.id}...`)}
                          >
                            <Download className="h-5 w-5" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Notifications Content */}
          <TabsContent value="notifications" className="animate-in fade-in duration-500">
            <Card className="border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
              <CardHeader className="border-b border-slate-50 px-8 py-7 flex flex-row items-center justify-between">
                <div>
                  <CardTitle className="text-xl font-extrabold text-slate-900">Notification Preferences</CardTitle>
                  <CardDescription>Choose how you want to be notified about activity.</CardDescription>
                </div>
              </CardHeader>

              <CardContent className="p-0">
                <div className="divide-y divide-slate-50">
                  {[
                    { title: "Campaign Performance", desc: "Weekly digest of your campaign statistics.", icon: <Zap className="h-5 w-5" /> },
                    { title: "Account Activity", desc: "Alerts for new logins and security changes.", icon: <Lock className="h-5 w-5" /> },
                    { title: "Marketing Updates", desc: "Tips and news about Globo Persona features.", icon: <Globe className="h-5 w-5" /> },
                    { title: "Subscriber Feedback", desc: "Immediate alerts when a user replies to an email.", icon: <Mail className="h-5 w-5" /> }
                  ].map((item, i) => (
                    <div key={i} className="px-8 py-7 flex items-center justify-between hover:bg-slate-50/50 transition-colors">
                      <div className="flex items-center gap-5">
                        <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400">
                          {item.icon}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{item.title}</p>
                          <p className="text-sm text-slate-500 font-medium">{item.desc}</p>
                        </div>
                      </div>
                      <div 
                        className="h-7 w-12 bg-indigo-600 rounded-full p-1 cursor-pointer flex justify-end"
                        onClick={() => triggerToast("Toggle Setting", `Preference for "${item.title}" updated.`)}
                      >
                        <div className="h-5 w-5 bg-white rounded-full shadow-sm" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Security Content */}
          <TabsContent value="security" className="animate-in fade-in duration-500">
            <div className="grid gap-8">
              <Card className="border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-slate-50 px-8 py-7">
                  <CardTitle className="text-xl font-extrabold text-slate-900">Security & Authentication</CardTitle>
                </CardHeader>
                <CardContent className="p-8 space-y-8">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-indigo-50 rounded-lg text-indigo-600">
                          <Lock className="h-5 w-5" />
                        </div>
                        <h3 className="font-bold text-slate-900">Password Management</h3>
                      </div>
                      <div className="space-y-3">
                        <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-500 uppercase">Current Password</Label>
                          <Input type="password" placeholder="••••••••" className="h-11 rounded-xl border-slate-200" />
                        </div>
                        <div className="space-y-2">
                          <Label className="text-xs font-bold text-slate-500 uppercase">New Password</Label>
                          <Input type="password" placeholder="••••••••" className="h-11 rounded-xl border-slate-200" />
                        </div>
                        <Button 
                          className="w-full h-11 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-xl mt-2"
                          onClick={() => triggerToast("Security Update", "Your password has been changed.")}
                        >
                          Update Password
                        </Button>
                      </div>
                    </div>

                    <div className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-3">
                            <div className="p-2 bg-emerald-50 rounded-lg text-emerald-600">
                              <Shield className="h-5 w-5" />
                            </div>
                            <h3 className="font-bold text-slate-900">Two-Factor Auth</h3>
                          </div>
                          <Badge className="bg-emerald-500 text-white border-none">Secure</Badge>
                        </div>
                        <p className="text-sm text-slate-500 font-medium leading-relaxed">
                          Add an extra layer of security to your account by requiring a verification code in addition to your password.
                        </p>
                      </div>
                      <Button 
                        variant="outline" 
                        className="h-11 w-full border-slate-200 bg-white font-bold rounded-xl mt-6"
                        onClick={() => triggerToast("2FA Configuration", "Opening 2FA setup wizard...")}
                      >
                        Configure 2FA
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-rose-100 shadow-xl shadow-rose-50/50 bg-white rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-rose-50 px-8 py-7 bg-rose-50/30">
                  <CardTitle className="text-xl font-extrabold text-rose-900">Danger Zone</CardTitle>
                  <CardDescription className="text-rose-600">Irreversible actions for your account.</CardDescription>
                </CardHeader>
                <CardContent className="p-8 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-slate-900">Delete Account</p>
                    <p className="text-sm text-slate-500 font-medium mt-1">Once you delete your account, there is no going back. Please be certain.</p>
                  </div>
                  <Button 
                    variant="destructive" 
                    className="h-12 px-6 font-bold rounded-xl shadow-lg shadow-rose-200"
                    onClick={() => triggerToast("Account Deletion", "Please confirm deletion via the email sent to you.")}
                  >
                    <Trash2 className="mr-2 h-5 w-5" />
                    Delete Account
                  </Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* API Content */}
          <TabsContent value="api" className="animate-in fade-in duration-500">
            <div className="grid gap-8">
              <Card className="border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-slate-50 px-8 py-7 flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-extrabold text-slate-900">API Access</CardTitle>
                    <CardDescription>Manage your secret keys for external integrations.</CardDescription>
                  </div>
                  <Button 
                    className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl px-4 py-2 text-sm"
                    onClick={() => triggerToast("API Key Generation", "A new live key has been created.")}
                  >
                    <Plus className="h-4 w-4 mr-2" />
                    Create Key
                  </Button>
                </CardHeader>
                <CardContent className="p-8">
                  <div className="space-y-4">
                    {[
                      { name: "Production App", key: "sk_live_••••••••••••••••••••••••", status: "Active", lastUsed: "2 hours ago" },
                      { name: "Development/Testing", key: "sk_test_••••••••••••••••••••••••", status: "Active", lastUsed: "Never" }
                    ].map((api, i) => (
                      <div key={i} className="p-5 rounded-2xl border border-slate-100 hover:border-indigo-100 hover:bg-indigo-50/10 transition-all">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                          <div className="flex items-center gap-4">
                            <div className="h-10 w-10 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center">
                              <Key className="h-5 w-5" />
                            </div>
                            <div>
                              <p className="font-bold text-slate-900">{api.name}</p>
                              <p className="font-mono text-xs text-slate-400 mt-1">{api.key}</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="text-right hidden md:block">
                              <p className="text-[10px] font-bold text-slate-400 uppercase tracking-tighter">Last Used</p>
                              <p className="text-xs font-bold text-slate-600">{api.lastUsed}</p>
                            </div>
                            <Button 
                              variant="ghost" 
                              size="icon" 
                              className="rounded-full hover:bg-white hover:shadow-md text-slate-400"
                              onClick={() => triggerToast("API Management", `Options for ${api.name} opened.`)}
                            >
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-2xl shadow-slate-200/40 bg-white rounded-3xl overflow-hidden">
                <CardHeader className="border-b border-slate-50 px-8 py-7 bg-white flex flex-row items-center justify-between">
                  <div>
                    <CardTitle className="text-xl font-extrabold text-slate-900">Connected Accounts</CardTitle>
                    <CardDescription>Authorize third-party applications to access your workspace.</CardDescription>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <div className="grid gap-6 md:grid-cols-2">
                    {[
                      { name: "Google Workspace", status: "Connected", icon: <Globe className="h-6 w-6 text-blue-500" /> },
                      { name: "Slack", status: "Not Connected", icon: <MessageSquare className="h-6 w-6 text-purple-500" /> },
                      { name: "Salesforce", status: "Connected", icon: <Zap className="h-6 w-6 text-sky-400" /> },
                      { name: "GitHub", status: "Not Connected", icon: <GithubBrandIcon className="h-6 w-6 text-slate-900" /> }
                    ].map((app, i) => (
                      <div key={i} className="p-6 rounded-3xl border border-slate-100 flex items-center justify-between hover:shadow-lg hover:shadow-slate-100 transition-all">
                        <div className="flex items-center gap-4">
                          <div className="h-12 w-12 rounded-2xl bg-slate-50 flex items-center justify-center">
                            {app.icon}
                          </div>
                          <div>
                            <p className="font-bold text-slate-900">{app.name}</p>
                            <p className={`text-xs font-bold ${app.status === "Connected" ? "text-emerald-500" : "text-slate-400"}`}>{app.status}</p>
                          </div>
                        </div>
                        <Button 
                          variant="ghost" 
                          className={`font-bold rounded-xl ${app.status === "Connected" ? "text-rose-600 hover:text-rose-700 hover:bg-rose-50" : "text-indigo-600 hover:text-indigo-700 hover:bg-indigo-50"}`}
                          onClick={() => triggerToast("Integration Action", `${app.status === "Connected" ? "Disconnecting" : "Connecting to"} ${app.name}...`)}
                        >
                          {app.status === "Connected" ? "Disconnect" : "Connect"}
                        </Button>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  );
}



function GithubBrandIcon(props: any) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}



export default function SettingsPage() {
  return (
    <Suspense fallback={<div className="h-full w-full flex items-center justify-center p-20"><RefreshCcw className="h-8 w-8 animate-spin text-indigo-600" /></div>}>
      <SettingsContent />
    </Suspense>
  );
}
