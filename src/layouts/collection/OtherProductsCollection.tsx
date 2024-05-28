import { Box, Text } from '@chakra-ui/react'
import AfterShave from "../../images/AfterShave.avif"
import Body_cream from "../../images/Body-Cream_png.avif"
import Body_lotion from "../../images/Body-Lotion.avif"
import Shampo from "../../images/Shampo_png.avif"
import ShowerGel from "../../images/ShowerGel.avif"
import SectionTitle from '../Titles/SectionTitle'
const OtherProductsCollection = () => {

  return (
        <Box width={"90%"} marginLeft={"auto"} marginRight={"auto"} mb={"100px"}>
            <SectionTitle color="#2C2C2C" child='LUXURY PERFUME COLLECTION'></SectionTitle>
            
           
            <Box display={"flex"} justifyContent={"space-around"}>
                {
                    otherProducts.map((element, index)=>(
                        <Box height={"250px"} display={"flex"} flexDirection={"column"} justifyContent={"space-between"} alignItems={"center"}>
                            <Box id={index.toString()} width={"200px"} height={'200px'}  borderRadius={"50%"} bgPosition="center" bgRepeat="no-repeat"  backgroundPosition="center"  backgroundImage={element.image} key={index} display={"inline"} cursor={"pointer"} bgSize ='200px' transition={"background-size .5s ease"} _hover={{bgSize :'220px'}} ></Box>
                            <Text fontWeight={"bold"}   _hover={{color : "goldO", cursor : "pointer", }}>
                                {element.name}
                            </Text>
                        </Box>
                    ))
                }
            </Box>
        </Box>
  )
}

export default OtherProductsCollection

const otherProducts = [
    {
        name :"After Shave", image : AfterShave
    },
    {
        name :"Shower Gel", image: ShowerGel
    },
    {
        name : "Body Lotion" , image: Body_lotion
    },
    {
        name : "Body Cream" , image : Body_cream
    },
    {
        name: "Shampoo", image :Shampo
    }





]