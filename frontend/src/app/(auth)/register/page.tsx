'use client';
import { useState } from "react";
import { Button, Card, Checkbox, Divider, Input, Link, Popover } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const Page = () => {
  const [isAccepted, setIsAccepted] = useState(false);

  const handleCheckboxChange = (event: { target: { checked: boolean | ((prevState: boolean) => boolean); }; }) => {
    setIsAccepted(event.target.checked);
  };

  const [phone, setPhone] = useState<string | undefined>('');

  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState<string>("test");
  const [email, setEmail] = useState<string>("test@test.com");
  const [password, setPassword] = useState<string>("123123");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    console.info(process.env.NEXT_PUBLIC_API_URL);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/register/`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );
    console.table(res);

    const responseAPI = await res.json();

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }

    router.push("/dashboard");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-lg min-w-64 flex flex-col text-center">
      <h1 className="text-gray-800 dark:text-gray-200 font-bold text-2xl mb-1">Registrate</h1>
      <p className="text-gray-500 text-sm mb-7">Crea una cuenta para empezar</p>
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
        <Input
          isRequired
          type="text"
          variant="bordered"
          label="Nombre"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {/* <Input
          isRequired
          type="text"
          variant="bordered"
          label="Nombres"
        />
        <Input
          isRequired
          type="text"
          variant="bordered"
          label="Apellidos"
        /> */}
      </div>
      {/* <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
        <Input
          isRequired
          type="text"
          variant="bordered"
          label="Cédula/Pasaporte"
        /> 
        <Input
          isRequired
          type="text"
          variant="bordered"
          label="Teléfono"
        /> 
      </div>*/}
      <Input
        isRequired
        type="email"
        variant="bordered"
        label="Correo Electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="mb-2"
        errorMessage="Ingrese un correo válido"
      />
      <div className="flex w-full flex-wrap md:flex-nowrap gap-4 mb-4">
        <Input
          isRequired
          type="password"
          variant="bordered"
          label="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {/* <Input
          isRequired
          type="password"
          variant="bordered"
          label="Confirmar Contraseña"
        /> */}
      </div>
      <div className="flex justify-between items-center gap-4 mb-4 ">
        <Checkbox
          size="sm"
          onChange={handleCheckboxChange}
          classNames={{ label: "text-gray-500 text-left" }}
        >
          He leído y acepto los <Link href="#" size="sm">Terminos</Link> y la <Link href="#" size="sm">Política de Privacidad</Link>
        </Checkbox>
      </div>
      <Button
        type="submit"
        color="primary"
        isDisabled={!isAccepted}
        className="w-full mb-2"
      >
        Registrarse
      </Button>
      <Divider className="my-2" />
      <span className="text-sm text-gray-500">
        ¿Tienes una cuenta?{' '}
        <Link href="/login" className="text-sm">Inicia sesión</Link>
      </span>
      {errors.length > 0 && (
        <div className="alert alert-danger mt-2">
          <ul className="mb-0">
            {errors.map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        </div>
      )}
    </form>
  )
}

export default Page;