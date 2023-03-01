import '../css/style.css'
import '../css/form.css'
import Head from 'next/head'
import Link from 'next/link'
import { SessionProvider } from 'next-auth/react'
import Login from '../components/Login'
import MiniDrawer from "../components/MiniDrawer"

function MyApp ({ Component, pageProps: { session, ...pageProps } }) {
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
        <MiniDrawer>
          <Component {...pageProps} />
        </MiniDrawer>
      </SessionProvider>
    </>
  )
}

export default MyApp
