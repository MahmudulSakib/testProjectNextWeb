import { auth } from "@/auth";
import Link from "next/link";

export default async function HomePage() {
  const session = await auth();

  return (
    <div
      style={{
        fontFamily: "sans-serif",
        maxWidth: "800px",
        margin: "50px auto",
        padding: "20px",
        border: "1px solid #ccc",
        borderRadius: "8px",
      }}
    >
      <h1>Welcome to Next.js App Router Auth Demo!</h1>
      <p>
        This is a minimal Next.js app demonstrating user authentication and
        role-based access control using the App Router.
      </p>

      {!session ? (
        <div style={{ marginTop: "30px" }}>
          <p>
            Please{" "}
            <Link
              href="/auth/signin"
              style={{ color: "#0070f3", fontWeight: "bold" }}
            >
              Sign In
            </Link>{" "}
            to access protected features.
          </p>
        </div>
      ) : (
        <div style={{ marginTop: "30px" }}>
          <p>
            You are currently logged in as <strong>{session.user.name}</strong>{" "}
            ({session.user.role}).
          </p>
          {session.user.role === "admin" && (
            <p>
              You can access the{" "}
              <Link
                href="/admin"
                style={{ color: "#0070f3", fontWeight: "bold" }}
              >
                Admin Dashboard
              </Link>
              .
            </p>
          )}
          {(session.user.role === "user" || session.user.role === "admin") && (
            <p>
              You can access your{" "}
              <Link
                href="/normalUser"
                style={{ color: "#0070f3", fontWeight: "bold" }}
              >
                User Page
              </Link>
              .
            </p>
          )}
        </div>
      )}

      <div
        style={{
          marginTop: "40px",
          paddingTop: "20px",
          borderTop: "1px solid #eee",
        }}
      >
        <h2>Public Pages</h2>
        <p>These pages are accessible to everyone, logged in or not.</p>
        <ul>
          <li>
            <Link href="/" style={{ color: "#0070f3" }}>
              Home
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
