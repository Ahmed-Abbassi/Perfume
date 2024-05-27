import { Box , Image} from '@chakra-ui/react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Products from "../../images/NiceProducts.webp"



function Slider() {
  return (
    <Box mt={"50px"}>
         <Image width={"100%"} src={Products} />

    </Box>
  )
}

export default Slider
