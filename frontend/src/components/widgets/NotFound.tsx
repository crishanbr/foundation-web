import { Image, Link } from "@nextui-org/react";

export function ErrorPage({ label, href }: { label: string, href: string }) {
  return (
    <div className="lg:px-24 lg:py-24 md:py-20 md:px-44 px-4 py-24 items-center flex justify-center flex-col-reverse lg:flex-row md:gap-28 gap-16 relative">
      <div className="xl:pt-24 w-full xl:w-1/2 relative pb-12 lg:pb-0 z-10">
        <div className="relative">
          <div className="absolute z-10">
            <div>
              <h1 className="my-2 text-gray-800 font-bold text-2xl">
                {`Uups! Parece que has encontrado
                  la puerta a la gran nada.`}
              </h1>
              <p className="my-2 text-gray-800">Lo sentimos, pero no se pudo encontrar la página que buscas. Por favor, visita nuestra página principal para seguir navegando.</p>
              <Link href={href} className="sm:w-full lg:w-auto my-2 border rounded md:py-4 px-8 text-center bg-indigo-600 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50">{label}</Link>
            </div>
          </div>
          <div className="relative z-0">
            <Image src="https://i.ibb.co/G9DC8S0/404-2.png" alt="404" className="opacity-50" />
          </div>
        </div>
      </div>
      <div className="relative z-10">
        <Image src="https://i.ibb.co/ck1SGFJ/Group.png" alt="404" width={500} height={500} />
      </div>
    </div>
  );
}
