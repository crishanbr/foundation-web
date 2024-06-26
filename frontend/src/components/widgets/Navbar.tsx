"use client";

import { Button, Navbar as Nav, NavbarBrand, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@nextui-org/react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { LogoIcon } from "../atoms/LogoIcon";
import { Logo } from "../atoms/Logo";
import { AcmeLogo } from "../atoms/AcmeLogo";
import { InprodisLogo } from "../atoms/InprodisLogo";

const Navbar = () => {
  const { data: session } = useSession();

  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];
  return (
    <Nav isBordered isBlurred maxWidth="xl">
      <NavbarContent>
        <NavbarMenuToggle
          aria-label="Open/Close menu"
          className="sm:hidden"
        />
        <NavbarBrand>
          {/* <InprodisLogo />
          <p className="font-bold text-xl ml-2">INPRODIS</p> */}
          <Logo className="h-10 hidden sm:block" />
          <LogoIcon className="h-10 sm:hidden" />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              color={
                index === 2 ? "primary" : index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href={item === "Log Out" ? "/logout" : "/"}
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Nav>
  );

  // return (
  //   <nav className="w-full box-border flex justify-between items-center px-4 py-2 bg-gray-800">
  //     <div className="flex items-center">
  //       <Link
  //         href="/"
  //         className="text-white text-2xl font-bold"
  //       >
  //         Cats App
  //       </Link>
  //     </div>
  //     <div className="container">
  //       <Link
  //         href="/"
  //         className="btn btn-primary btn-sm"
  //       >
  //         Home
  //       </Link>
  //       {session?.user ? (
  //         <>
  //           <Link
  //             href="/dashboard"
  //             className="btn btn-primary btn-sm"
  //           >
  //             Dashboard
  //           </Link>
  //           <button
  //             onClick={() => signOut()}
  //             className="btn btn-danger btn-sm"
  //           >
  //             Signout
  //           </button>
  //         </>
  //       ) : (
  //         <>
  //           <Link
  //             href="/login"
  //             className="btn btn-primary btn-sm"
  //           >
  //             Login
  //           </Link>
  //           <Link
  //             href="/register"
  //             className="btn btn-primary btn-sm"
  //           >
  //             Register
  //           </Link>
  //         </>
  //       )}
  //     </div>
  //   </nav>
  // );
};
export default Navbar;
