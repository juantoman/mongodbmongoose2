import PetList from "../components/PetList"
import { useSession } from "next-auth/react"
import MiniDrawer from "../components/MiniDrawer"
import Login from '../components/Login'
import Link from 'next/link'


const Index = () => {
  const { data: session } = useSession()

  return (
  <>
    {
      session
      ? <>
          <div>
            <Link href="/">Home</Link>
            <Link href="/new">Add Pet</Link>
          </div>
          <PetList />
        </>
      : <div className="top-bar">

          <img
            id="title"
            src="https://upload.wikimedia.org/wikipedia/commons/1/1f/Pet_logo_with_flowers.png"
            alt="pet care logo"></img>
        </div>
    }
  </>
  )
}

export default Index
