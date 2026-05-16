export const mockUser = {
  name: "Sarah Chen",
  email: "sarah.chen@globopersona.com",
  role: "Marketing Director",
  avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
  bio: "Email marketing specialist with 10+ years of experience in SaaS growth.",
  location: "San Francisco, CA",
  joinedDate: "Jan 2023",
  recentActivity: [
    { id: 1, action: "Published campaign", target: "Q3 Product Update", time: "2 hours ago" },
    { id: 2, action: "Created draft", target: "Holiday Special", time: "5 hours ago" },
    { id: 3, action: "Updated profile", target: "Account Settings", time: "1 day ago" },
    { id: 4, action: "Exported report", target: "Monthly Newsletter", time: "2 days ago" },
  ]
};

export const mockEmailDashboardStats = [
  { title: "Total Campaigns", value: "124", change: "+4 from last month", trend: "up", icon: "megaphone" },
  { title: "Avg. Open Rate", value: "32.4%", change: "+2.1% from last month", trend: "up", icon: "mail-open" },
  { title: "Avg. Click Rate", value: "14.2%", change: "-0.5% from last month", trend: "down", icon: "mouse-pointer-click" },
  { title: "Active Contacts", value: "24,592", change: "+1,234 from last month", trend: "up", icon: "users" },
];

export const mockRecentCampaignsTable = [
  { id: "C-1029", name: "Q3 Product Update", status: "Sent", audience: "All Customers", openRate: "42.1%", clickRate: "18.4%", date: "Oct 12, 2023", contacts: "8,920" },
  { id: "C-1030", name: "Black Friday Early Access", status: "Sent", audience: "VIP Members", openRate: "28.5%", clickRate: "12.0%", date: "Nov 01, 2023", contacts: "15,000" },
  { id: "C-1031", name: "Welcome Series - Step 1", status: "Sent", audience: "New Leads", openRate: "68.2%", clickRate: "34.1%", date: "Nov 10, 2023", contacts: "Daily" },
  { id: "C-1032", name: "Inactive Users Reactivation", status: "Draft", audience: "Inactive (90d)", openRate: "-", clickRate: "-", date: "-", contacts: "4,200" },
  { id: "C-1033", name: "Monthly Newsletter", status: "Sent", audience: "All Subscribers", openRate: "31.2%", clickRate: "9.5%", date: "Nov 15, 2023", contacts: "24,592" },
  { id: "C-1034", name: "Summer Sale Finale", status: "Sent", audience: "All Customers", openRate: "45.2%", clickRate: "12.8%", date: "Aug 30, 2023", contacts: "12,450" },
  { id: "C-1035", name: "Holiday Gift Guide", status: "Scheduled", audience: "All Subscribers", openRate: "-", clickRate: "-", date: "Dec 05, 2023", contacts: "30,000" },
  { id: "C-1036", name: "Customer Feedback", status: "Sent", audience: "Recent Purchasers", openRate: "52.1%", clickRate: "18.4%", date: "Sep 15, 2023", contacts: "2,400" },
  { id: "C-1037", name: "New Year Countdown", status: "Draft", audience: "Early Birds", openRate: "-", clickRate: "-", date: "-", contacts: "5,500" },
  { id: "C-1038", name: "Product Anniversary", status: "Sent", audience: "Legacy Users", openRate: "58.4%", clickRate: "22.1%", date: "Oct 05, 2023", contacts: "1,200" },
  { id: "C-1039", name: "Winter Collection Preview", status: "Scheduled", audience: "Fashion Segment", openRate: "-", clickRate: "-", date: "Dec 10, 2023", contacts: "8,300" },
  { id: "C-1040", name: "Referral Bonus Program", status: "Sent", audience: "Power Users", openRate: "39.8%", clickRate: "15.2%", date: "Nov 12, 2023", contacts: "3,500" },
  { id: "C-1041", name: "Webinar Invitation", status: "Draft", audience: "Tech Enthusiasts", openRate: "-", clickRate: "-", date: "-", contacts: "2,100" },
  { id: "C-1042", name: "System Maintenance Alert", status: "Sent", audience: "All Users", openRate: "72.4%", clickRate: "5.1%", date: "Nov 20, 2023", contacts: "24,592" },
  { id: "C-1043", name: "Cyber Monday Extension", status: "Scheduled", audience: "Cart Abandoners", openRate: "-", clickRate: "-", date: "Dec 01, 2023", contacts: "4,800" },
];


export const mockActivityChartData = [
  { date: "Oct 1", opens: 4200, clicks: 1200 },
  { date: "Oct 5", opens: 3800, clicks: 900 },
  { date: "Oct 10", opens: 5500, clicks: 1800 },
  { date: "Oct 15", opens: 4800, clicks: 1400 },
  { date: "Oct 20", opens: 6100, clicks: 2100 },
  { date: "Oct 25", opens: 5900, clicks: 1950 },
  { date: "Oct 30", opens: 7200, clicks: 2800 },
  { date: "Nov 5", opens: 6800, clicks: 2400 },
  { date: "Nov 10", opens: 7500, clicks: 3100 },
];

export const mockConversionData = [
  { name: "Sent", value: 100 },
  { name: "Delivered", value: 98 },
  { name: "Opened", value: 45 },
  { name: "Clicked", value: 18 },
  { name: "Replied", value: 5 },
];

export const mockDeviceData = [
  { name: "Desktop", value: 55 },
  { name: "Mobile", value: 38 },
  { name: "Tablet", value: 7 },
];

export const mockAnalyticsStats = [
  { title: "Total Emails Sent", value: "842,920", change: "+12.5%", trend: "up", icon: "send" },
  { title: "Bounce Rate", value: "0.8%", change: "-0.2%", trend: "up", icon: "alert-circle" },
  { title: "Unsubscribe Rate", value: "0.15%", change: "0%", trend: "neutral", icon: "user-minus" },
  { title: "Conversion Rate", value: "4.2%", change: "+0.8%", trend: "up", icon: "target" },
];

export const mockActivityFeed = [
  { id: 1, type: "sent", campaign: "Q3 Update", time: "2 minutes ago", status: "success" },
  { id: 2, type: "reply", campaign: "Black Friday", time: "15 minutes ago", status: "positive" },
  { id: 3, type: "draft", campaign: "Holiday Sale", time: "1 hour ago", status: "saved" },
  { id: 4, type: "bounce", campaign: "Welcome Series", time: "3 hours ago", status: "alert" },
];

export const mockTimingData = [
  35, 42, 28, 45, 62, 85, 92, 78, 55, 42, 38, 45, 
  58, 72, 88, 95, 82, 65, 48, 35, 28, 32, 45, 52
];






export const mockAudienceSegments = [
  "All Subscribers",
  "VIP Members",
  "New Leads",
  "Inactive Users",
  "Recent Purchasers",
  "Newsletter Signups"
];
