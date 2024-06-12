import { Button, VStack , Text} from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"


const Error404 = () => {
    const navigate = useNavigate()
  return (
    <VStack p={"15px"} bg={"blackO"}>
        <Text color={"whiteO"} fontWeight={"bold"} fontSize={"x-large"} >this is error page</Text>
        <Text color={"whiteO"} fontWeight={"bold"} fontSize={"x-large"} >Go Back to Home page !!</Text>
        <Button onClick={()=>{
            navigate('/')
            
        }}>home page</Button>
    </VStack>
  )
}

export default Error404
