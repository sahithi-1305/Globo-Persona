"use client";

import { usePathname } from "next/navigation";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {isLoginPage ? (
          <main className="h-screen w-full">
            {children}
          </main>
        ) : (
          <div className="h-screen flex overflow-hidden bg-slate-50">
            <div className="hidden md:flex w-72 flex-col fixed inset-y-0 z-50">
              <Sidebar />
            </div>
            <main className="md:pl-72 flex-1 flex flex-col h-full overflow-hidden">
              <Header />
              <div className="flex-1 overflow-y-auto p-4 md:p-8">
                {children}
              </div>
            </main>
          </div>
        )}
      </body>
    </html>
  );
}
