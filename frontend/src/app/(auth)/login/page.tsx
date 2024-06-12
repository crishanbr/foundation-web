'use client';
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Button, Checkbox, Chip, Divider, Input, Link, cn } from "@nextui-org/react";

const Page = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("test@test.com");
  const [password, setPassword] = useState<string>("123123");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

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
    <form onSubmit={handleSubmit} className="max-w-xs min-w-64 flex flex-col text-center">
      <h1 className="text-gray-800 font-bold text-2xl mb-1">Iniciar Sesión</h1>
      <p className="text-gray-500 text-sm mb-7">Inicia sesión en tu cuenta para continuar</p>
      <Input
        isRequired
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        variant="bordered"
        label="Correo Electrónico"
        className="mb-2"
        errorMessage="Ingrese un correo válido"
      />
      <Input
        isRequired
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        variant="bordered"
        label="Contraseña"
        className="mb-2"
      />
      <div className="flex justify-between items-center gap-4 mb-4 ">
        <Checkbox size="sm" classNames={{ label: "text-gray-500" }}>Recordar</Checkbox>
        <Link href="#" className="text-gray-500" size="sm">¿Olvidaste tu contraseña?</Link>
      </div>
      <Button type="submit" color="primary" className="w-full mb-2">Acceder</Button>
      <Divider className="my-2" />
      <span className="text-sm text-gray-500">
        ¿No tienes una cuenta?{' '}
        <Link href="/register" className="text-sm">Registrate</Link>
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