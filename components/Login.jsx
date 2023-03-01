import { useSession, signIn, signOut } from "next-auth/react"
import Button from '@mui/material/Button';

export default function Login() {
  const { data: session } = useSession()
  if (session) {
    return (
      <>
        {session.user.email} 
        <Button color="inherit" onClick={() => signOut()}>Sign out</Button>
        <br />
      </>
    )
  }
  return (
    <>
      <Button color="inherit" onClick={() => signIn("google")}>Sign in</Button>
      <br />
    </>
  )
}