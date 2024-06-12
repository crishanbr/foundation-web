'use client';
import React, { useState } from 'react';
import { MenuItem, menuItems } from './sidebarItems';
import { RiMenuLine } from 'react-icons/ri';
import { LogoIcon } from '@/components/atoms/LogoIcon';

const Sidebar: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  const toggleSubMenu = (title: string) => {
    if (openItems.includes(title)) {
      setOpenItems(openItems.filter(item => item !== title));
    } else {
      setOpenItems([...openItems, title]);
    }
  };

  const renderMenu = (items: MenuItem[]) => (
    <ul>
      {items.map((item) => (
        <li key={item.title}>
          <button
            className="flex items-center w-full px-4 py-2 text-left transition-all duration-300"
            onClick={() => item.subMenu ? toggleSubMenu(item.title) : null}
          >
            <span className="mr-3">
              {item.icon && <item.icon size={24} />}
            </span>
            <span className={`flex-grow truncate ${collapsed ? 'hidden' : 'block'}`}>{item.title}</span>
            {item.subMenu && (
              <span className="ml-auto">{openItems.includes(item.title) ? '-' : '+'}</span>
            )}
          </button>
          {item.subMenu && openItems.includes(item.title) && (
            <div className={`pl-8 ${collapsed ? 'hidden' : 'block'}`}>
              {renderMenu(item.subMenu)}
            </div>
          )}
        </li>
      ))}
    </ul>
  );

  return (
    <aside className={`h-full bg-gray-800 text-white ${collapsed ? 'w-16' : 'w-64'} transition-width duration-300`}>
      <div className="flex justify-between items-center px-4 py-2 border-b border-gray-700">
        <div className="flex items-center">
        <LogoIcon className='w-8 h-8 mr-2' />
        <span className={`${collapsed ? 'hidden' : 'block'} uppercase text-lg truncate`}>Pro Sidebar</span>
        </div>
        <button className='absolute top-0 right-0 p-2 text-gray-400 hover:text-gray-500 transition-all duration-300' onClick={toggleCollapse}>
          <RiMenuLine size={24} />
        </button>
      </div>
      <nav className="px-2 py-4">
        {renderMenu(menuItems)}
      </nav>
    </aside>
  );
};

export default Sidebar;