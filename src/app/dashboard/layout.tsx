import DashboardSidebar from "@/components/generals/dashboard/dashboard-sidebar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex w-screen ">
      <DashboardSidebar />
      <main className="flex-1  py-20 px-10 min-h-screen">{children}</main>
    </div>
  );
}
