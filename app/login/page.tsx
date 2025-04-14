"use client"

import { signIn, signOut, useSession } from "next-auth/react"

export default function LoginPage() {
  const { data: session } = useSession()

  return (
    <div className="p-6">
      {session ? (
        <>
          <p>Welcome, {session.user?.name}</p>
          <button onClick={() => signOut()} className="btn">Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn("github")} className="btn">Login with GitHub</button>
      )}
    </div>
  )
}
