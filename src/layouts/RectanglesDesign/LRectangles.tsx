import { Box } from '@chakra-ui/react'
import React from 'react'

const LRectangles = ({color} : {color : string}) => {
  return (
    <Box display={"inline"}  width={"fit-content"} >
            <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"} width={"80px"}>
              <Box  height={"14px"} width={"14px"} border = {`4px solid ${color}`} ></Box>
              <Box  height={"22px"} width={"22px"} border ={`5px solid ${color}`}></Box>
              <Box  height={"30px"} width={"30px"} border ={`6px solid ${color}`}></Box>
            </Box>
          </Box>
  )
}

export default LRectangles
