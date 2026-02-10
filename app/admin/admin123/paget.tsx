import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Admin123Page() {
  const session = await auth();

  if (!session || session.user.role !== "admin") {
    redirect("/");
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #0070f3",
        borderRadius: "8px",
        backgroundColor: "#e0f7fa",
      }}
    >
      <h1>Admin Page 123</h1>
      <p>This is another protected admin page, {session?.user.name}!</p>
    </div>
  );
}
