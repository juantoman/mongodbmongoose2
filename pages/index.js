import PetList from "../components/PetList"
import { useSession } from "next-auth/react"


const Index = () => {
  const { data: session } = useSession()

  return (
  <>
    {
      session
      ? <PetList />
      : <div>Nothing</div>
    }
  </>
  )
}

export default Index
