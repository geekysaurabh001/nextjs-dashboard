import SideNav from "@/app/ui/dashboard/sidenav";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex h-screen flex-col md:flex-row md:overflow-hidden">
      <aside className="w-full flex-none md:w-64">
        <SideNav />
      </aside>
      <section className="flex-grow p-6 md:overflow-y-auto md:p-12">
        {children}
      </section>
    </section>
  );
}
