'use client';

import React from 'react';

import { setCookie } from 'cookies-next';

interface Props {
  tabOptions?: number[];
  currentTab?: number;
}

export const TabBar: React.FC<Props> = ({ tabOptions = [1, 2, 3, 4], currentTab = 1 }) => {
  const [selected, setSelected] = React.useState(currentTab);

  const onTabSelected = (newTab: number): void => {
    setSelected(newTab);
    setCookie('selected-tab', newTab.toString());
  };

  return (
    <div className="grid w-full space-x-2 rounded-xl bg-gray-200 p-2 grid-cols-4">
      {tabOptions.map(tab => (
        <div key={tab}>
          <input type="radio" id={tab.toString()} className="peer hidden" checked={tab === selected} readOnly />
          <label
            className="block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white"
            onClick={() => onTabSelected(tab)}
          >
            {tab}
          </label>
        </div>
      ))}
    </div>
  );
};
