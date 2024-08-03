import { Metadata } from 'next';
import { cookies } from 'next/headers';

import { TabBar } from '@/components/tabs/tab-bar';

export const metadata: Metadata = {
  title: 'Cookies page',
  description: 'Description for Cookies page',
};

export default function Page() {
  const cookieStore = cookies();
  const currentTab = parseInt(cookieStore.get('selected-tab')?.value ?? '1');

  return (
    <div className="gap-3 grid grid-cols-1 sm:grid-cols-2">
      <div className="flex flex-col">
        <h1 className="mb-4 text-3xl">Tabs</h1>
        <TabBar currentTab={currentTab} />
      </div>
    </div>
  );
}
