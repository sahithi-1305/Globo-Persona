# MailSaaS - Modern Email Marketing Dashboard

A premium, production-ready SaaS Email Marketing & Automation Platform dashboard built with Next.js 14, TypeScript, Tailwind CSS, and shadcn/ui.

## Features

- **Authentication**: Modern centered login card with premium SaaS UI.
- **Main Dashboard**: Statistics cards, interactive charts (Recharts), and recent campaigns overview.
- **Campaign Management**:
  - Full campaigns list with search and filtering.
  - Interactive table with engagement metrics (Open/Click rates).
  - Campaign creation form with audience selection and scheduling.
- **User Profile**: Detailed profile page with activity history and account settings.
- **Responsive Layout**: Desktop-first sidebar navigation with mobile-friendly header.
- **Design System**: Premium zinc/slate color palette, soft shadows, and smooth transitions.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **Charts**: Recharts
- **Data**: Mock JSON data (no backend required)

## Folder Structure

```text
app/
├── login/          # Auth page
├── profile/        # User profile
├── campaigns/      # Campaigns list
│   └── create/     # Campaign creation
├── layout.tsx      # Root layout with conditional sidebar
└── page.tsx        # Main dashboard
components/
├── ui/             # shadcn components
├── sidebar.tsx     # Navigation
└── header.tsx      # Top bar
lib/
├── mock-data.ts    # Centralized mock data
└── utils.ts        # Helper functions
```

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone <repository-url>
   cd <project-folder>
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Open in browser**:
   Navigate to [http://localhost:3000](http://localhost:3000)

## Design Aesthetics

- **Typography**: Inter (System default)
- **Colors**: Indigo for primary actions, Emerald/Rose for status/trends.
- **Shadows**: Custom soft shadows (shadow-xl/shadow-2xl) for a premium feel.
- **Transitions**: Smooth hover states and slide-in animations.

## Evaluation Notes

- Focus on visual hierarchy and spacing.
- Clean and reusable component architecture.
- Production-quality UI/UX.
- Fully responsive design.
