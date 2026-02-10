import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function NormalUser345Page() {
  const session = await auth();

  if (
    !session ||
    (session.user.role !== "user" && session.user.role !== "admin")
  ) {
    redirect("/");
  }

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #4caf50",
        borderRadius: "8px",
        backgroundColor: "#e8f5e9",
      }}
    >
      <h1>Normal User Page 345</h1>
      <p>This is yet another protected user page, {session?.user.name}!</p>
    </div>
  );
}
