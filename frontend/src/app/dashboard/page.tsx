"use client";
import { useSession } from "next-auth/react";

const Page = () => {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return <p>Loading...</p>;
  }

  const getCats = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cats`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${session?.user?.token}`,
      },
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button
        onClick={getCats}
        className="btn btn-primary"
      >
        Get Cats
      </button>
      <pre>
        <code>{JSON.stringify(session, null, 2)}</code>
      </pre>
    </div>
  );
};
export default Page;
