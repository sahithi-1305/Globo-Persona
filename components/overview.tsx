"use client";

import { useEffect, useState } from "react";
import { Area, AreaChart, ResponsiveContainer, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { mockActivityChartData } from "@/lib/mock-data";

export function Overview() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-[350px] w-full bg-slate-50/50 animate-pulse rounded-xl" />;
  }

  return (
    <ResponsiveContainer width="100%" height={350}>
      <AreaChart data={mockActivityChartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
        <defs>
          <linearGradient id="colorOpens" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#4f46e5" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="colorClicks" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ec4899" stopOpacity={0.3}/>
            <stop offset="95%" stopColor="#ec4899" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
        <XAxis
          dataKey="date"
          stroke="#94a3b8"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          dy={10}
        />
        <YAxis
          stroke="#94a3b8"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `${value >= 1000 ? (value / 1000) + 'k' : value}`}
        />
        <Tooltip 
          contentStyle={{ borderRadius: '12px', border: '1px solid #e2e8f0', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)' }}
        />
        <Area type="monotone" dataKey="opens" stroke="#4f46e5" strokeWidth={3} fillOpacity={1} fill="url(#colorOpens)" />
        <Area type="monotone" dataKey="clicks" stroke="#ec4899" strokeWidth={3} fillOpacity={1} fill="url(#colorClicks)" />
      </AreaChart>
    </ResponsiveContainer>
  );
}
