import { Box, Text, TextProps } from '@chakra-ui/react'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
const txtProps : TextProps ={
    fontSize:"medium",
    fontWeight : "semibold", 
    cursor : "pointer"
}
const Footer = () => {
  return (
    <Box bgColor={"goldO"} height={'200px'}  py={'15px'} display={"flex"} flexDir={"column"} justifyContent={"space-around"} alignItems={"center"}>
        <Text fontSize={"larger"} fontWeight={"bold"}>
           ... visit or store for better experience ...
        </Text>
        <Box width={'100%'} display={"flex"} justifyContent={"space-around"} alignItems={ "center"}>
            <Box>
                <Text {...txtProps} >Sign In</Text>
                <Text {...txtProps}>Log in</Text>
            </Box>
            <Box>
                <Text {...txtProps}>Contact</Text>
                <Text {...txtProps}>Categories</Text>
            </Box>
            <Box>
                <Text {...txtProps}>Blogs</Text>
                <Text {...txtProps}>FAQs</Text>
            </Box>
        </Box>
        <Box width={"20%"} display={"flex"} justifyContent={"space-around"}>
            <FontAwesomeIcon size='2xl' icon={faInstagram} />
            <FontAwesomeIcon size='2xl' icon={faFacebook} />
            <FontAwesomeIcon size='2xl' icon={faWhatsapp} />
        </Box>
    </Box>
  )
}

export default Footer
