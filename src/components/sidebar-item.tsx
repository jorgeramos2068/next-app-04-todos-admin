import * as React from 'react';
import Link from 'next/link';

import { CiBookmarkCheck } from 'react-icons/ci';

interface Props {
  title: string;
  href: string;
}

export const SidebarItem: React.FC<Props> = ({ title, href }) => {
  // Active className: text-white bg-gradient-to-r from-sky-600 to-cyan-400 */
  return (
    <li>
      <Link
        href="#"
        className="relative px-4 py-3 flex items-center space-x-4 rounded-xl text-white bg-gradient-to-r from-sky-600 to-cyan-400"
      >
        <CiBookmarkCheck size={30} />
        <span className="-mr-1 font-medium">{title}</span>
      </Link>
    </li>
  );
};
