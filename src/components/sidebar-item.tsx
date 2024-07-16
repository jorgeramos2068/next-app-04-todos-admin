'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CiBookmarkCheck } from 'react-icons/ci';

interface Props {
  title: string;
  path: string;
  icon: React.ReactNode;
}

export const SidebarItem: React.FC<Props> = ({ title, path, icon }) => {
  const pathname = usePathname();

  // Active className:  */
  return (
    <li>
      <Link
        href={path}
        className={`px-4 py-3 flex items-center space-x-4 rounded-md text-gray-600 group hover:bg-gradient-to-r hover:bg-sky-600 hover:text-white  ${
          path === pathname ? 'text-white bg-gradient-to-r from-sky-600 to-cyan-400' : ''
        }`}
      >
        {icon}
        <span className="group-hover:text-white">{title}</span>
      </Link>
    </li>
  );
};
