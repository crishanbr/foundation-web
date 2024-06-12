'use client';
import ButtonAuth from "@/components/widgets/ButtonAuth";
import { useSession } from "next-auth/react";

const HomePage = () => {
  const { data: session } = useSession();
  return (
    <div>
      <h1>Home Page</h1>
      <ButtonAuth />
      {
        session?.user?.email && (
          <div>
            <p>Hello {session.user.email}</p>
          </div>
        )
      }
    </div>
  );
};
export default HomePage;
