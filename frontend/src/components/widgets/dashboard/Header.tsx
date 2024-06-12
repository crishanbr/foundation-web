'use client';
import React from 'react';
import { Icon } from '@iconify/react';
import { LogoIcon } from '@/components/atoms/LogoIcon';
import { Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import { split } from 'postcss/lib/list';
import { ThemeSwitch } from '../ThemeSwitch';

export default function Header({ toggleSidebar }: { toggleSidebar: () => void }) {
  const { data: session, status } = useSession();
  const avatarName = session?.user?.email?.slice(0, 2);
  return (
    <header className="flex-shrink-0 bg-gray-950 border-2 border-gray-700 px-2 md:px-4 rounded-lg">
      <div className="h-20 flex items-center justify-between p-2">
        {/* Navbar left */}
          <LogoIcon className=" h-14 w-14 p-2 lg:hidden" />
        <div className="flex items-center space-x-3">
          <button onClick={toggleSidebar} className="rounded-md focus:outline-none focus:ring">
            <Icon icon="solar:hamburger-menu-line-duotone" className="w-8 h-8 text-white" />
          </button>
        </div>
        {/* Navbar right */}
        <ThemeSwitch />
        <Dropdown placement="bottom-end" className='bg-gray-900'>
          <DropdownTrigger>
            <Avatar
              isBordered
              showFallback
              as="button"
              className="transition-transform"
              color="secondary"
              name={avatarName}
              size="sm"
              src="#"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2">
              <p className="font-semibold">Identificado como</p>
              <p className="font-semibold">{session?.user?.email}</p>
            </DropdownItem>
            <DropdownItem key="settings">My Settings</DropdownItem>
            <DropdownItem key="team_settings">Team Settings</DropdownItem>
            <DropdownItem key="analytics">Analytics</DropdownItem>
            <DropdownItem key="system">System</DropdownItem>
            <DropdownItem key="configurations">Configurations</DropdownItem>
            <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
            <DropdownItem key="logout" color="danger">
              Log Out
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
        {/* ... */}
      </div>
    </header>
  );
}