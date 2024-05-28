import LRectangles from '../RectanglesDesign/LRectangles'
import { Box ,Text} from '@chakra-ui/react'
import RRectangles from '../RectanglesDesign/RRectangles'

const SectionTitle = ({child, color, size=40} : {child : string, color :string, size ?: number}) => {
  return (
    <Box margin={"auto"} width="fit-content" display={"flex"} alignItems={"center"} justifyContent={"center"}>
          <LRectangles color={color} /> 
          <Text px={"25px"} fontSize={size+"px"} fontWeight={"bold"} color={color} py={"50px"}>{child}</Text>
          <RRectangles color={color} />
        </Box>
  )
}

export default SectionTitle
