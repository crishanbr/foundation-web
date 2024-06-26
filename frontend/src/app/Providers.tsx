'use client';
import { NextUIProvider } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProviders } from "next-themes";

export function Providers({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  return (
    <NextUIProvider navigate={router.push}>
      <NextThemesProviders attribute="class" defaultTheme="dark">
        {children}
      </NextThemesProviders>
    </NextUIProvider>
  );
}