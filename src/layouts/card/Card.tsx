import { Box , Text, Image} from "@chakra-ui/react";
interface PropsData{
    source : string,
    name :string,
    brand : string,
    id :number,
    price :number,
    availability :boolean

}

const Card = ({source, name, brand, id, price, availability} : PropsData) => {
  return (
    <Box bg={"white"} mb={"4%"} cursor={"pointer"} boxShadow={'md'} position={"relative"} transition={"all .5s ease"} _hover={{transform :"translateY(-10px)", borderRadius:"5px"}} width={"21%"} border={"1px solid gray"} padding={"10px"} display={"flex"} flexDir={"column"} justifyContent={"space-around"} alignItems={"center"}>
        <Image height={"250px"} src={source}/>
        <Text color="goldO" fontSize={"small"} >Luxery Collection</Text>
        <Text>{name} | {brand}</Text>
        <Text fontWeight={"bold"}>{price} TND</Text>
        
    </Box>
  )
}

export default Card

