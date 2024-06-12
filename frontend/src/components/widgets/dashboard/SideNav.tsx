'use client';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import { Button, Link } from '@nextui-org/react';
import { LogoIcon } from '@/components/atoms/LogoIcon';
import { usePathname } from 'next/navigation';

interface NavSubItemProps {
  label: string;
  href?: string;
  subItems?: NavSubItemProps[];
}

interface NavItemProps {
  isSection?: boolean;
  label: string;
  icon?: string;
  href?: string;
  subItems?: NavSubItemProps[];
}

const sidebarItems: NavItemProps[] = [
  { isSection: true, label: "General" },
  { label: "Dashboard", href: "/dashboard", icon: "solar:widget-5-bold-duotone" },
  { label: "Usuarios", href: "/dashboard/users", icon: "solar:users-group-rounded-bold-duotone" },
  { label: "Eventos", href: "/dashboard/events", icon: "solar:calendar-mark-bold-duotone" },
  { label: "Trabajos", href: "/dashboard/jobs", icon: "solar:case-round-minimalistic-bold-duotone" },
  { label: "Practicas", href: "/dashboard/practicas", icon: "solar:square-academic-cap-2-bold-duotone" },
  { label: "Convenios", href: "/dashboard/convenios", icon: "solar:file-smile-bold-duotone" },
];

// export function SideNav() {
//   const [isOpen, setIsOpen] = useState(true);
//   const toggleSidebar = () => setIsOpen(!isOpen);
//   const active = usePathname();

//   return (
//     <div className='relative select-none p-2 hidden md:flex'>
//       <button
//         onClick={toggleSidebar}
//         className="w-7 h-7 absolute top-8 right-3 z-10 flex items-center justify-center bg-gray-900 text-white translate-x-1/2 rounded-full border-2 border-gray-700"
//       >
//         <Icon icon={isOpen ? "solar:double-alt-arrow-left-bold" : "solar:double-alt-arrow-right-bold"} className=' w-5 h-5 flex-shrink-0' />
//       </button>
//       <aside className={`flex flex-col h-full flex-shrink-0 transition-all duration-300 ease-in-out bg-gray-800 shadow-lg rounded-lg ${isOpen ? 'w-72' : 'w-20'} overflow-hidden border-2 border-gray-700`}>
//         <Link href="/" color='foreground' className="h-20 flex items-center px-4 bg-gray-900 border-b-2 border-gray-700">
//           <LogoIcon className="h-12 w-12 flex-shrink-0" />
//           <span className={`ml-2 text-xl font-semibold text-cyan-50 uppercase transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Fundación</span>
//         </Link>
//         <nav className="flex-grow overflow-hidden">
//           <ul className='p-4 space-y-4'>
//             {sidebarItems.map(item => (
//               item.isSection ?
//                 <li key={item.label} className='h-8 font-semibold uppercase text-sm text-cyan-500 tracking-[.13em] px-3'>
//                   {isOpen ? item.label : <Icon icon='solar:menu-dots-bold-duotone' className='w-6 h-6 drop-shadow-[0_5px_5px_rgba(6,182,212,1)]' />}
//                 </li>
//                 :
//                 <li key={item.label}>
//                   <Link href={item.href} className={`w-full h-10 flex items-center text-cyan-50 hover:text-cyan-500 ${isOpen && 'hover:ml-3 gap-4 hover:text-cyan-500 transition-all duration-300 ease-in-out'}`}>
//                     {item.icon &&
//                       <div className={`w-11 h-11 flex items-center justify-center flex-shrink-0 ${active === item.href ? 'bg-cyan-500/10' : 'bg-gray-700'} rounded-lg transition-colors duration-100 border-2 border-gray-700`}>
//                         <Icon icon={item.icon} className={`w-6 h-6 ${active === item.href ? 'text-cyan-500 drop-shadow-[0_5px_5px_rgba(6,182,212,1)]' : ''}`} />
//                       </div>}
//                     <span className={`transition-opacity duration-300 text-lg text-cyan-50 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>{isOpen && item.label}</span>
//                   </Link>
//                 </li>
//             ))}
//           </ul>
//         </nav>
//         <div className="border-t border-gray-700 p-4 font-medium mt-auto">
//           <a href="#" className="flex items-center h-10 px-3 hover:text-gray-100 hover:bg-gray-600 hover:bg-opacity-25 rounded-lg transition-colors duration-150 ease-in-out focus:outline-none focus:shadow-outline">
//             <svg viewBox="0 0 20 20" fill="currentColor" className="h-6 w-6 flex-shrink-0">
//               <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
//             </svg>
//             <span className={`ml-2 duration-300 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Settings</span>
//           </a>
//         </div>
//       </aside>
//     </div>
//   );
// }

import React from 'react';

export function SideNav({ isOpen, toggleSidebar }: { isOpen: boolean, toggleSidebar: () => void }) {
  const active = usePathname();

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-10 bg-black bg-opacity-20 lg:hidden"
          style={{ backdropFilter: 'blur(14px)', WebkitBackdropFilter: 'blur(14px)' }}
          onClick={toggleSidebar}
        ></div>
      )}
      <aside
        className={`fixed inset-y-0 z-10 flex flex-col flex-shrink-0 w-64 max-h-screen overflow-hidden transition-all transform bg-gray-800 border-2 border-gray-700 shadow-lg rounded-lg lg:z-auto lg:static lg:shadow-none ${isOpen ? '' : '-translate-x-full lg:translate-x-0 lg:w-20'}`}
      >
        {/* MARK: Sidebar Header */}
        <Link href="/" color='foreground' className="h-20 flex items-center px-4 bg-gray-950 border-b-2 border-gray-700">
          <LogoIcon className="h-12 w-12 flex-shrink-0" />
          <span className={`ml-2 text-xl font-semibold text-cyan-50 uppercase transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>Fundación</span>
        </Link>
        {/* MARK: Sidebar Content */}
        <nav className="flex-1 overflow-hidden hover:overflow-y-auto">
          <ul className="p-2 flex flex-col justify-center gap-4 overflow-hidden">
            {sidebarItems.map(item => (
              item.isSection ?
                <li key={item.label} className='h-4 mt-4 font-semibold uppercase text-sm text-cyan-500 tracking-[.13em] px-3'>
                  {isOpen ? item.label : <Icon icon='solar:menu-dots-bold-duotone' className='w-6 h-6 drop-shadow-[0_5px_5px_rgba(6,182,212,1)] mx-auto' />}
                </li>
                :
                <li key={item.label}>
                  <Link href={item.href} className={`w-full h-10 flex items-center text-cyan-50 hover:text-cyan-500 ${isOpen && 'hover:ml-3 gap-4 hover:text-cyan-500 transition-all duration-300 ease-in-out'} px-2`}>
                    {item.icon &&
                      <div className={`w-11 h-11 flex items-center justify-center flex-shrink-0 ${active === item.href ? 'bg-cyan-500/10' : 'bg-gray-700'} rounded-lg transition-colors duration-100 border-2 border-gray-700`}>
                        <Icon icon={item.icon} className={`w-6 h-6 ${active === item.href ? 'text-cyan-500 drop-shadow-[0_5px_5px_rgba(6,182,212,1)]' : ''}`} />
                      </div>}
                    <span className={`transition-opacity duration-300 text-lg text-cyan-50 ${isOpen ? 'opacity-100' : 'opacity-0'}`}>{isOpen && item.label}</span>
                  </Link>
                </li>
            ))}
          </ul>
        </nav>
        {/* MARK: Sidebar Footer */}
        <div className="flex-shrink-0 p-2 border-t max-h-14">
          <button
            className="flex items-center justify-center w-full px-4 py-2 space-x-1 font-medium tracking-wider uppercase border rounded-md focus:outline-none focus:ring"
          >
            <Icon icon="mdi:logout" className="w-6 h-6" />
            <span className={`${isOpen ? '' : 'lg:hidden'}`}> Logout </span>
          </button>
        </div>
      </aside>
    </>
  );
}
