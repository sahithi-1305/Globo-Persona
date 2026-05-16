"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Mail, Lock, Loader2, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function LoginPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate auth delay
    setTimeout(() => {
      setIsLoading(false);
      router.push("/");
    }, 1500);
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-slate-50/50 relative overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-[10%] -right-[10%] w-[40%] h-[40%] bg-pink-100/50 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="w-full max-w-md px-4 py-8 animate-in fade-in zoom-in duration-500">
        <div className="flex flex-col items-center mb-8">
          <div className="w-12 h-12 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-xl shadow-indigo-200 mb-4 transform hover:scale-110 transition-transform duration-300">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">MailSaaS</h1>
          <p className="text-slate-500 font-medium mt-1">Premium Email Marketing Solutions</p>
        </div>

        <Card className="border-none shadow-2xl shadow-slate-200/50 bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden">
          <CardHeader className="space-y-1 pb-6 text-center">
            <CardTitle className="text-2xl font-bold text-slate-900">Welcome Back</CardTitle>
            <CardDescription className="text-slate-500 font-medium">
              Enter your credentials to access your dashboard
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-6">
            <form onSubmit={handleLogin} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-bold text-slate-700 ml-1">Email Address</Label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Mail className="h-5 w-5" />
                  </div>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="name@example.com" 
                    required 
                    className="pl-11 h-12 bg-slate-50/50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all rounded-xl"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between ml-1">
                  <Label htmlFor="password" className="text-sm font-bold text-slate-700">Password</Label>
                  <Link href="#" className="text-xs font-bold text-indigo-600 hover:text-indigo-700 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400 group-focus-within:text-indigo-500 transition-colors">
                    <Lock className="h-5 w-5" />
                  </div>
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="••••••••" 
                    required 
                    className="pl-11 h-12 bg-slate-50/50 border-slate-200 focus:bg-white focus:ring-4 focus:ring-indigo-50 transition-all rounded-xl"
                  />
                </div>
              </div>
              <div className="flex items-center space-x-2 ml-1">
                <Checkbox id="remember" className="rounded-md border-slate-300 data-[state=checked]:bg-indigo-600 data-[state=checked]:border-indigo-600" />
                <Label htmlFor="remember" className="text-sm font-medium text-slate-500 cursor-pointer select-none">
                  Keep me logged in for 30 days
                </Label>
              </div>
              <Button 
                type="submit" 
                className="w-full h-12 bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-lg shadow-lg shadow-indigo-200 rounded-xl transition-all hover:scale-[1.01] active:scale-[0.99] disabled:opacity-70"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  "Sign In"
                )}
              </Button>
            </form>
          </CardContent>
          <CardFooter className="border-t border-slate-50 bg-slate-50/30 flex justify-center py-6">
            <p className="text-sm text-slate-500 font-medium">
              Don't have an account?{" "}
              <Link href="#" className="text-indigo-600 font-bold hover:underline">
                Create Account
              </Link>
            </p>
          </CardFooter>
        </Card>

        {/* Feature Highlights */}
        <div className="mt-12 grid grid-cols-2 gap-6 opacity-60">
          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wider">Enterprise Security</span>
          </div>
          <div className="flex items-center gap-2 text-slate-500">
            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            <span className="text-xs font-bold uppercase tracking-wider">99.9% Uptime SLA</span>
          </div>
        </div>
      </div>
    </div>
  );
}
