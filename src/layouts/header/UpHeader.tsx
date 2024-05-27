import { Box, Text ,BoxProps, TextProps} from '@chakra-ui/react'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faLocationDot} from "@fortawesome/free-solid-svg-icons"
import {faPhone} from "@fortawesome/free-solid-svg-icons"
import {faEnvelope} from "@fortawesome/free-solid-svg-icons"

const UpHeader = () => {
    const communBoxStyles : BoxProps={
        color : "whiteO"
    }
    const communTextStyles : TextProps ={
        fontSize :"15px",
    }
  return (
    <Box>
        <Box bgColor={"blackO"} padding={"10px"} display={'flex'} justifyContent={"space-between"}>
            <Box width={"calc(100% / 3)"} display={"flex"} className='basic contact' {...communBoxStyles}>
                <Box mr={'20px'} display={"flex"} alignItems={"center"} >
                <FontAwesomeIcon style={{cursor:"pointer"}} id='map' icon={faPhone} />
                    <Text pl={"5px"} {...communTextStyles}>(216) 50723785</Text>
                </Box>
                <Box mr={'20px'} display={"flex"} alignItems={"center"} >
                    <FontAwesomeIcon style={{cursor:"pointer"}} id='map' icon={faEnvelope} />
                    <Text pl={"5px"}  {...communTextStyles}>abbassia082@gmail.com</Text>
                </Box>
            </Box>
            <Box display={"flex"} justifyContent={"center"}  width={"calc(100% / 3)"} alignSelf={"end"} className='general message' {...communBoxStyles}>
                <Text  {...communTextStyles} display={'inline'}>discount ends in <Text display={"inline"} color={"red.500"}>01:30:55</Text></Text>
            </Box>

            <Box display={"flex"} justifyContent={"flex-end"} width={"calc(100% / 3)"} alignItems={"center"} className="location" {...communBoxStyles}>
                <FontAwesomeIcon style={{cursor:"pointer"}} id='map' icon={faLocationDot} />
                <Text  htmlFor={"map"} ml={"10px"} {...communTextStyles} fontSize={"sm"}>Tunisia, Monastir</Text>
            </Box>

        
        </Box>
    </Box>
  )
}

export default UpHeader
