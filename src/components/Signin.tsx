import { Box } from '@chakra-ui/react'
import LognBackImage from "../images/p.jpg"
import SignInForm from '../layouts/signinLayouts/SignInForm'

const Signin = () => {
  return (
    <Box>
      <Box display={"flex"}>
        <SignInForm width="35%" />
        <Box bgImage={LognBackImage} bgSize={"cover"} height={"100vh"} borderLeftRadius={"10%"} borderBottomLeftRadius={"20%"}   width={"65%"} />
      </Box>
    </Box>
  )
}

export default Signin
