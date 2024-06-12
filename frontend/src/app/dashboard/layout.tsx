'use client';
import Header from "@/components/widgets/dashboard/Header";
import { SideNav } from "@/components/widgets/dashboard/SideNav";
import Siebar from "@/components/widgets/dashboard/Sidebar";
import { SideNavBar } from "@/components/widgets/dashboard/Sidenavbar";
import { useState } from "react";

// export default function DashboardLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <div className="flex h-screen overflow-y-hidden bg-white">
//       <SideNav />
//       <div className="flex flex-col flex-1 h-full overflow-hidden ">
//         <Header />
//         <main className="flex-1 max-h-full p-5 overflow-hidden overflow-y-scroll">
//           <div
//             className="flex flex-col items-start justify-between pb-6 space-y-4 border-b lg:items-center lg:space-y-0 lg:flex-row"
//           >
//             <h1 className="text-2xl font-semibold whitespace-nowrap">Dashboard</h1>
//             <div className="space-y-6 md:space-x-2 md:space-y-0">
//               <a
//                 href="https://github.com/Kamona-WD/starter-dashboard-layout"
//                 target="_blank"
//                 className="inline-flex items-center justify-center px-4 py-1 space-x-1 bg-gray-200 rounded-md shadow hover:bg-opacity-20"
//               >
//                 <span>
//                   <svg className="w-4 h-4 text-gray-500" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
//                     <path
//                       fill-rule="evenodd"
//                       d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
//                     ></path>
//                   </svg>
//                 </span>
//                 <span>View on Github</span>
//               </a>
//               <a
//                 href="https://kamona-wd.github.io/kwd-dashboard/"
//                 target="_blank"
//                 className="inline-flex items-center justify-center px-4 py-1 space-x-1 bg-red-500 text-white rounded-md shadow animate-bounce hover:bg-red-600"
//               >
//                 <span>See Dark & Light version</span>
//               </a>
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex h-screen overflow-y-hidden bg-gray-900 text-gray-300">
      <div className="h-full flex p-0 md:p-4">
      <SideNav isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      </div>
      <div className="flex flex-col flex-1 p-2 md:p-4 md:-ml-2 overflow-hidden">
        <Header toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-2 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}