import React from 'react'
import L_Rectangles from '../RectanglesDesign/L_Rectangles'
import { Box ,Text} from '@chakra-ui/react'
import R_Rectangles from '../RectanglesDesign/R_Rectangles'

const SectionTitle = ({child, color, size=40} : {child : string, color :string, size ?: number}) => {
  return (
    <Box margin={"auto"} width="fit-content" display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <L_Rectangles color={color} /> 
          <Text px={"25px"} fontSize={size+"px"} fontWeight={"bold"} color={color} py={"50px"}>{child}</Text>
          <R_Rectangles color={color} />
        </Box>
  )
}

export default SectionTitle
