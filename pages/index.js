import PetList from "../components/PetList"
import { useSession } from "next-auth/react"
import MiniDrawer from "../components/MiniDrawer"
import Login from '../components/Login'
import Link from 'next/link'


const Index = () => {
  const { data: session } = useSession()

  return (
  <>
    
          <div>
            <Link href="/">Home</Link>
            <Link href="/new">Add Pet</Link>
          </div>
          <PetList />
        
  </>
  )
}

Index.auth=true

export default Index
