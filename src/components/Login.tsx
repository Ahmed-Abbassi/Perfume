import { Box, Text } from '@chakra-ui/react'
import LoginForm from '../layouts/loginLayouts/LoginForm'
import LognBackImage from "../images/p.jpg"
const Login = () => {
  return (
    <Box>
      <Box display={"flex"}>
        <LoginForm width="35%" />
        <Box bgImage={LognBackImage} bgSize={"cover"} height={"100vh"} borderLeftRadius={"10%"} borderBottomLeftRadius={"20%"}   width={"65%"} />
      </Box>
    </Box>
  )
}

export default Login
