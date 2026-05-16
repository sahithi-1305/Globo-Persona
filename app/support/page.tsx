"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Search, 
  Book, 
  MessageSquare, 
  LifeBuoy, 
  Zap, 
  Shield, 
  CreditCard, 
  Mail,
  ChevronRight,
  ExternalLink,
  ArrowLeft,
  CheckCircle2,
  Clock
} from "lucide-react";
import Link from "next/link";
import { 
  Sheet, 
  SheetContent, 
  SheetDescription, 
  SheetHeader, 
  SheetTitle,
} from "@/components/ui/sheet";

export default function SupportPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [toast, setToast] = useState({ show: false, message: "" });
  const [selectedCategory, setSelectedCategory] = useState<any>(null);

  const triggerToast = (message: string) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: "" }), 3000);
  };

  const categories = [
    { 
      icon: <Zap className="h-6 w-6" />, 
      title: "Getting Started", 
      description: "Learn the basics of creating your first campaign.", 
      articles: 12, 
      color: "bg-amber-100 text-amber-600",
      content: [
        "How to create your first campaign",
        "Setting up your sender profile",
        "Understanding your dashboard",
        "Importing your first contact list"
      ]
    },
    { 
      icon: <Mail className="h-6 w-6" />, 
      title: "Campaigns", 
      description: "Design, schedule, and track your email performance.", 
      articles: 24, 
      color: "bg-indigo-100 text-indigo-600",
      content: [
        "A/B Testing your subject lines",
        "Using the drag-and-drop editor",
        "Scheduling campaigns for different timezones",
        "Analyzing campaign reports"
      ]
    },
    { 
      icon: <CreditCard className="h-6 w-6" />, 
      title: "Billing", 
      description: "Manage your subscription, invoices, and payments.", 
      articles: 8, 
      color: "bg-emerald-100 text-emerald-600",
      content: [
        "How to upgrade your plan",
        "Downloading your monthly invoices",
        "Updating your payment method",
        "Understanding our pricing tiers"
      ]
    },
    { 
      icon: <Shield className="h-6 w-6" />, 
      title: "Security", 
      description: "Protect your account with 2FA and secure keys.", 
      articles: 15, 
      color: "bg-rose-100 text-rose-600",
      content: [
        "Enabling Two-Factor Authentication",
        "Managing your API security keys",
        "Recent login activity",
        "Best practices for account security"
      ]
    },
    { 
      icon: <Book className="h-6 w-6" />, 
      title: "API Docs", 
      description: "Advanced integration guides for developers.", 
      articles: 42, 
      color: "bg-slate-100 text-slate-600",
      content: [
        "Authenticating with our REST API",
        "Webhook configuration guide",
        "Rate limiting and best practices",
        "SDK documentation for Node.js"
      ]
    },
    { 
      icon: <LifeBuoy className="h-6 w-6" />, 
      title: "Account", 
      description: "Settings, notifications, and profile management.", 
      articles: 10, 
      color: "bg-blue-100 text-blue-600",
      content: [
        "Changing your account email",
        "Configuring notification preferences",
        "Deleting your account",
        "Merging multiple accounts"
      ]
    },
  ];

  const filteredCategories = categories.filter(cat => 
    cat.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    cat.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const faqs = [
    { q: "How do I import my contact list?", a: "You can import contacts via CSV or Excel files in the 'Audience' section." },
    { q: "Can I schedule a campaign for later?", a: "Yes, use the 'Schedule' button during the final step of campaign creation." },
    { q: "What happens if I hit my email limit?", a: "Your campaigns will be paused until the next billing cycle or until you upgrade." },
  ];

  return (
    <div className="flex flex-col gap-8 pb-10 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Toast Notification */}
      {toast.show && (
        <div className="fixed top-24 right-8 z-50 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-2xl flex items-center gap-4 animate-in slide-in-from-right-full duration-500 border border-slate-700 backdrop-blur-md bg-opacity-90">
          <div className="h-8 w-8 bg-indigo-500 rounded-full flex items-center justify-center">
            <Zap className="h-5 w-5 text-white" />
          </div>
          <div>
            <p className="font-bold">Support Action</p>
            <p className="text-xs text-slate-400 font-medium">{toast.message}</p>
          </div>
        </div>
      )}

      {/* Header Section */}
      <div className="relative overflow-hidden rounded-[2.5rem] bg-indigo-600 p-8 md:p-16 text-white shadow-2xl shadow-indigo-200">
        <div className="relative z-10 max-w-2xl">
          <Link href="/settings" className="inline-flex items-center gap-2 text-indigo-100 hover:text-white mb-6 font-bold transition-colors">
            <ArrowLeft className="h-4 w-4" />
            Back to Settings
          </Link>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-4 leading-tight">
            How can we help you today?
          </h1>
          <p className="text-indigo-100 text-lg mb-8 font-medium">
            Search our knowledge base or browse categories below to find answers.
          </p>
          <div className="relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-indigo-400 group-focus-within:text-indigo-600 transition-colors" />
            <Input 
              placeholder="Search for articles, guides, or troubleshooting..." 
              className="h-16 pl-12 bg-white text-slate-900 rounded-2xl border-none focus:ring-4 focus:ring-indigo-300 transition-all text-lg font-medium shadow-xl"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>
        
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
        <div className="absolute bottom-0 left-1/3 w-64 h-64 bg-indigo-400/20 rounded-full translate-y-1/2 blur-2xl" />
      </div>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat, i) => (
          <Card 
            key={i} 
            onClick={() => setSelectedCategory(cat)}
            className="group border-none shadow-lg shadow-slate-200/50 hover:shadow-2xl hover:shadow-indigo-100 transition-all duration-300 rounded-[2rem] overflow-hidden cursor-pointer hover:-translate-y-1"
          >
            <CardContent className="p-8">
              <div className={`h-14 w-14 ${cat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {cat.icon}
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-2">{cat.title}</h3>
              <p className="text-slate-500 font-medium text-sm leading-relaxed mb-6">{cat.description}</p>
              <div className="flex items-center justify-between text-indigo-600 font-bold text-sm">
                <span>{cat.articles} Articles</span>
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Detailed Category Sheet */}
      <Sheet open={!!selectedCategory} onOpenChange={(open) => !open && setSelectedCategory(null)}>
        <SheetContent className="w-full sm:max-w-md p-0 overflow-y-auto border-none shadow-2xl">
          {selectedCategory && (
            <div className="flex flex-col h-full">
              <div className={`p-10 ${selectedCategory.color} flex flex-col items-center text-center`}>
                <div className="h-20 w-20 bg-white rounded-3xl flex items-center justify-center mb-6 shadow-xl">
                  {selectedCategory.icon}
                </div>
                <SheetHeader>
                  <SheetTitle className="text-3xl font-black text-slate-900 mb-2">{selectedCategory.title}</SheetTitle>
                  <SheetDescription className="text-slate-600 font-bold text-lg leading-tight">
                    {selectedCategory.description}
                  </SheetDescription>
                </SheetHeader>
              </div>
              <div className="p-10 space-y-4">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-6">Popular Articles</p>
                {selectedCategory.content.map((article: string, idx: number) => (
                  <button 
                    key={idx}
                    onClick={() => triggerToast(`Opening "${article}"...`)}
                    className="w-full flex items-center justify-between p-5 rounded-2xl bg-slate-50 hover:bg-indigo-50 border border-transparent hover:border-indigo-100 transition-all group"
                  >
                    <span className="font-bold text-slate-900 group-hover:text-indigo-600 text-left">{article}</span>
                    <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-indigo-500" />
                  </button>
                ))}
                <Button 
                  className="w-full mt-10 h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-black rounded-2xl shadow-xl shadow-indigo-100 transition-all hover:scale-[1.02]"
                  onClick={() => triggerToast("Directing to full documentation...")}
                >
                  Browse All {selectedCategory.articles} Articles
                </Button>
              </div>
            </div>
          )}
        </SheetContent>
      </Sheet>

      {/* Bottom Section: FAQ and Contact */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* FAQs */}
        <div className="lg:col-span-2">
          <Card className="border-none shadow-xl shadow-slate-200/50 rounded-[2.5rem] bg-white overflow-hidden h-full">
            <CardHeader className="p-8 border-b border-slate-50">
              <CardTitle className="text-2xl font-black">Frequently Asked Questions</CardTitle>
              <CardDescription className="text-slate-500 font-medium">Quick answers to common questions.</CardDescription>
            </CardHeader>
            <CardContent className="p-8 space-y-6">
              {faqs.map((faq, i) => (
                <div 
                  key={i} 
                  onClick={() => triggerToast("Opening FAQ details...")}
                  className="group p-6 rounded-2xl bg-slate-50 hover:bg-white border border-transparent hover:border-slate-100 hover:shadow-lg transition-all duration-300 cursor-pointer"
                >
                  <h4 className="font-bold text-slate-900 mb-2 flex items-center gap-2">
                    <span className="h-6 w-6 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center text-xs">Q</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-500 font-medium text-sm leading-relaxed pl-8">
                    {faq.a}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>

        {/* Contact Us */}
        <div className="lg:col-span-1">
          <Card className="border-none shadow-xl shadow-indigo-100 rounded-[2.5rem] bg-indigo-50/50 h-full">
            <CardContent className="p-8 flex flex-col items-center text-center justify-center h-full">
              <div className="h-20 w-20 bg-indigo-600 text-white rounded-3xl flex items-center justify-center mb-6 shadow-xl shadow-indigo-200 animate-bounce">
                <MessageSquare className="h-10 w-10" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">Still need help?</h3>
              <p className="text-slate-500 font-medium mb-8 leading-relaxed">
                Can't find what you're looking for? Our support team is ready to assist you 24/7.
              </p>
              <Button 
                onClick={() => triggerToast("Opening live chat support...")}
                className="w-full h-14 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-2xl shadow-lg shadow-indigo-200 transition-all hover:scale-[1.02]"
              >
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}


