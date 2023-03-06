import * as React from 'react';
import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import { SessionProvider, useSession, signIn } from 'next-auth/react';
import Login from '../components/Login'
import MiniDrawer from "../components/MiniDrawer"
import { useTheme } from '@mui/material/styles';

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
  const theme = useTheme();
  const pl=theme.spacing(8)

  return (
    <>
      <SessionProvider session={session}>
        <Head>
          <title>@MyClassGame</title>
        </Head>

        {/*<div className="top-bar">
          <div className="nav">
            <Login />
            <Link href="/">Home</Link>
            <Link href="/new">Add Pet</Link>
          </div>

          <img
            id="title"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
            alt="pet care logo"
          ></img>
  </div>*/}
        <MiniDrawer />
        <div style={{ paddingLeft: pl }}>
        {Component.auth ? (
          <Auth>
            <Component {...pageProps} />
          </Auth>
        ) : (
          <Component {...pageProps} />
        )}
        </div>
      </SessionProvider>
    </>
  )
}

function Auth({ children }) {
  const { data: session, status } = useSession()
  const isUser = !!session?.user
  React.useEffect(() => {
    if (status === "loading") return
    if (!isUser) signIn()
  }, [isUser, status])

  if (isUser) {
    return children
  }

  // Session is being fetched, or no user.
  // If no user, useEffect() will redirect.
  return <div>Loading...</div>
}

export default MyApp
