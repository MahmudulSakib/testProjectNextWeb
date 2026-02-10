import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function NormalUserPage() {
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
      <h1>Welcome, {session.user.name}!</h1>
      <p>You are logged in as a {session.user.role}.</p>
      <p>This is your personalized user dashboard.</p>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#dcedc8",
          border: "1px solid #689f38",
          borderRadius: "4px",
        }}
      >
        <h3>Your Data:</h3>
        <p>View your profile</p>
        <p>Manage your settings</p>
      </div>
    </div>
  );
}
