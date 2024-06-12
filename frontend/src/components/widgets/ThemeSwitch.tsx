"use client";

import { FC } from "react";
import { useTheme } from "next-themes";
import { useIsSSR } from "@react-aria/ssr";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button } from "@nextui-org/react";

export interface ThemeSwitchProps {
  className?: string;
}

export const ThemeSwitch: FC<ThemeSwitchProps> = ({ className }) => {
  const { theme, setTheme } = useTheme();
  const isSSR = useIsSSR();

  const onChange = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isSelected = theme === "light" || isSSR;

  return (
    <Button
      isIconOnly
      size="sm"
      color="secondary"
      onClick={onChange}
      className={`cursor-pointer rounded-lg flex items-center justify-center text-white px-0 mx-0 ${className}`}
      aria-label={`Switch to ${isSelected ? "dark" : "light"} mode`}
    >
      <Icon icon={isSelected ? "solar:sun-2-bold-duotone" : "solar:moon-stars-bold"} width={22} />
    </Button>
  );
};
