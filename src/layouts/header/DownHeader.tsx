import { Box, Text, TextProps } from '@chakra-ui/react'
import SectionTitle from '../Titles/SectionTitle'
function DownHeader() {
    const textProperties : TextProps = {
        color:"whiteO",
        fontSize:"30px",
        fontWeight : "semiBold"
    }
  return (
    <Box boxShadow={"0px 10px 12px #ddd "} display={"flex"} justifyContent={"space-around"} alignItems={"center"} height={'100px'} bgColor={"blackO"}>
        <Text {...textProperties}>
        <SectionTitle color="#FFFCF5" child='COLLECTIONS'></SectionTitle>
        </Text>
    </Box>
  )
}

export default DownHeader
