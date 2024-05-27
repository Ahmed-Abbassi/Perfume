import { Box, Input, Select, Text, TextProps } from '@chakra-ui/react'
function DownHeader() {
    const textProperties : TextProps = {
        color:"whiteO",
        fontSize:"30px",
        fontWeight : "semiBold"
    }
  return (
    <Box boxShadow={"0px 10px 12px #ddd "} display={"flex"} justifyContent={"space-around"} alignItems={"center"} height={'100px'} bgColor={"blackO"}>
        <Text {...textProperties}>
            Collections
        </Text>
    </Box>
  )
}

export default DownHeader
