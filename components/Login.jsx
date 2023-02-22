import { useSession, signIn, signOut } from "next-auth/react"

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        `Signed in as {session.user.email} `
        <button onClick={() => signOut()}>Sign out</button>
        <br />
      </>
    )
  }
  return (
    <>
      <button onClick={() => signIn()}>Sign in</button>
      <br />
    </>
  )
}