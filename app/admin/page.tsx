import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function AdminDashboardPage() {
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
      <h1>Admin Dashboard</h1>
      <p>
        Welcome, {session.user.name}! You are an {session.user.role}.
      </p>
      <p>This is a highly restricted area accessible only to admins.</p>
      <div
        style={{
          marginTop: "20px",
          padding: "15px",
          backgroundColor: "#c8e6c9",
          border: "1px solid #388e3c",
          borderRadius: "4px",
        }}
      >
        <h3>Admin Data:</h3>
        <p>User Management Panel</p>
        <p>System Logs</p>
        <p>Settings Configuration</p>
      </div>
    </div>
  );
}
