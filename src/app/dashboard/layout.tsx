import { SpeedInsights } from "@vercel/speed-insights/next"

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <section>
    <SpeedInsights/>
    {children}
    </section>
}