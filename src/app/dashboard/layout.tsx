import { TopMenu } from '@/components/layout';
import { Sidebar } from '@/components/sidebar';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Sidebar />
      <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%] min-h-screen">
        <TopMenu />
        <div className="bg-white m-2 p-2 pb-4 px-6 pt-6 rounded">{children}</div>
      </div>
    </>
  );
}
