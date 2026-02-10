"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  const { data: session, status } = useSession();
  const loading = status === "loading";

  return (
    <nav
      style={{
        padding: "15px 20px",
        backgroundColor: "#f8f8f8",
        borderBottom: "1px solid #eee",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", gap: "15px" }}>
        <Link
          href="/"
          style={{
            textDecoration: "none",
            color: "#0070f3",
            fontWeight: "bold",
          }}
        >
          Home
        </Link>
        {session && session.user.role === "admin" && (
          <>
            <Link
              href="/admin"
              style={{
                textDecoration: "none",
                color: "#0070f3",
                fontWeight: "bold",
              }}
            >
              Admin Dashboard
            </Link>
            <Link
              href="/admin123"
              style={{
                textDecoration: "none",
                color: "#0070f3",
                fontWeight: "bold",
              }}
            >
              Admin123
            </Link>
            <Link
              href="/admin345"
              style={{
                textDecoration: "none",
                color: "#0070f3",
                fontWeight: "bold",
              }}
            >
              Admin345
            </Link>
          </>
        )}
        {session &&
          (session.user.role === "user" || session.user.role === "admin") && (
            <>
              <Link
                href="/normalUser"
                style={{
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: "bold",
                }}
              >
                User Page
              </Link>
              <Link
                href="/normalUser123"
                style={{
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: "bold",
                }}
              >
                User123
              </Link>
              <Link
                href="/normalUser345"
                style={{
                  textDecoration: "none",
                  color: "#0070f3",
                  fontWeight: "bold",
                }}
              >
                User345
              </Link>
            </>
          )}
      </div>
      <div>
        {!session && !loading && (
          <Link
            href="/auth/signin"
            style={{ textDecoration: "none", color: "#0070f3" }}
          >
            Sign In
          </Link>
        )}
        {session && (
          <div style={{ display: "flex", alignItems: "center", gap: "15px" }}>
            <span style={{ color: "#333" }}>
              Signed in as{" "}
              <strong style={{ color: "#0070f3" }}>{session.user.name}</strong>{" "}
              ({session.user.role})
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/" })}
              style={{
                padding: "8px 12px",
                backgroundColor: "#dc3545",
                color: "white",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
                fontSize: "14px",
              }}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
