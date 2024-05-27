import { Box  ,Image, Link, LinkProps} from '@chakra-ui/react'
import parfumeLogo from "../../images/parfume.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";


//badd practice in setting icons color on hover

type iconsType ={
    icon1 : string,icon2 : string,icon3 : string,icon4 : string
}
const linkProperties : LinkProps = {
    fontWeight :"bold",
    transition : "color .5s ease" ,
    _hover:{
        textDecoration : "none",
        color:"goldO",  
        
    }
}
const MiddleHeader = () => {
    const [iconColor, setIconColor] = useState<iconsType>({icon1 : "blackO",icon2 : "blackO",icon3 : "blackO",icon4 : "blackO"})
  return (
    
    <Box bgColor={"whiteO"} display={"flex"} justifyContent={"space-around"} alignItems={"center"}>
        <Box w={"20%"} className='logo'>
            <Image cursor={"pointer"} height={"80px"} src={parfumeLogo} />
        </Box>
        <Box w={"55%"} className='routes list' display={"flex"} justifyContent={"space-around"}>
            <Link {...linkProperties} >Home</Link>
            <Link {...linkProperties} >Men Perfumes</Link>
            <Link {...linkProperties} >Women Perfumes</Link>
            <Link {...linkProperties} >Best sellers</Link>
            <Link {...linkProperties} >Brands</Link>
        </Box>
        <Box w={"15%"} display={"flex"} justifyContent={"space-around"} className='icon list'>
        <FontAwesomeIcon
        onMouseEnter={()=>{ setIconColor({...iconColor, icon1 :"#D4AF37" })}} style={{color: iconColor.icon1, cursor:"pointer"}} icon={faMagnifyingGlass} 
        onMouseLeave={()=> setIconColor({...iconColor, icon1 : "#2C2C2C"})}/>
        <FontAwesomeIcon 
        onMouseEnter={()=>{setIconColor({...iconColor, icon2 : "#D4AF37"})}} style={{color: iconColor.icon2, cursor:"pointer"}} icon={faUser}
        onMouseLeave={()=> setIconColor({...iconColor, icon2 : "#2C2C2C"})}/>
        <FontAwesomeIcon 
        onMouseEnter={()=>{setIconColor({...iconColor, icon3 : "#D4AF37"})}} style={{color: iconColor.icon3, cursor:"pointer"}} icon={faHeart}
        onMouseLeave={()=> setIconColor({...iconColor, icon3 : "#2C2C2C"})}/>
        <FontAwesomeIcon 
        onMouseEnter={()=>{setIconColor({...iconColor, icon4 : "#D4AF37"})}} style={{color: iconColor.icon4, cursor:"pointer"}} icon={faCartShopping} 
        onMouseLeave={()=> setIconColor({...iconColor, icon4 : "#2C2C2C"})}/>
        </Box>
    </Box>
  )
}

export default MiddleHeader
