import { Logo } from '@/components/atoms/Logo';
import { ThemeSwitch } from '@/components/widgets/ThemeSwitch';
import { Button, Chip } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col md:flex-row min-h-dvh">
      <div className="flex flex-1 justify-center items-center p-4 bg-cover" style={{ backgroundImage: "url(assets/images/Inclusion-And-Diversity-Background-4.jpg)" }}>
        <div className='h-full w-full flex flex-col '>
          <header className='flex flex-row justify-between items-center'>
            <Button
              as={Link}
              href="/"
              color="secondary"
              size="sm"
            >
              Volver al Inicio
            </Button>
            <ThemeSwitch />
          </header>
          <div className="max-w-lg flex flex-col text-white gap-4 p-4 mx-auto my-auto bg-opacity-50 bg-purple-700 backdrop-blur-sm rounded-2xl">
            <Logo className="max-h-20" />
            <p className="text-center italic">
              Luchamos por la inclusión de personas y profesionales con discapacidad.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-center items-center p-4">
        <>
          {children}
        </>
      </div>
      <footer className="w-full md:w-1/2 h-14 p-4 md:absolute md:bottom-0 mt-auto md:left-0">
        <p className="text-sm text-center md:text-white font-semibold">&copy;2024 - Fundación INPRODIS</p>
      </footer>
    </div>
  );
}