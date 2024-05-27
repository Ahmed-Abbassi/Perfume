import { Box, Text } from '@chakra-ui/react'
import Card from "../card/Card"
import sauvage from "../../images/sauvage.png"
import channelNO5 from "../../images/channelNO5.jpg"
import VersaceEros from "../../images/VersaceEros.jpg"
import GucciBloom from "../../images/GucciBloom.jpg"
import Euphoria from "../../images/Euphoria.jpg"
import TomFord from "../../images/TomFord.jpg"
import Taj from "../../images/Taj.jpg"
import Dior from "../../images/dior.png"


const Main = () => {
  return (
    <Box width={"90%"} margin={"auto"} >
        <Text fontSize={"60px"} fontWeight={"bold"} py={"50px"}>LUXURY COLLECTION</Text>
        <Text pb={"50px"}>Acceuil &#62; LUXURY COLLECTION</Text>
        <Box display={"flex"} flexWrap={"wrap"} justifyContent={"space-between"}>
          {
            perfumes.map((element, index)=>(
              <Card name={element.name} brand={element.brand} id={element.id} source={element.imageUrl} price={element.price} availability={element.availability} />
            ))
          }
        </Box>
    </Box>
  )
}

export default Main


const perfumes = [
  {
    id: 1,
    name: 'Chanel No. 5',
    price: 120,
    brand: 'Chanel',
    description: 'A classic and timeless fragrance.',
    imageUrl: channelNO5,
    rating: 4.5,
    reviews: 120,
    size: '100ml',
    availability: true,
    category: 'Eau de Parfum',
    fragranceNotes: {
      top: ['Aldehydes', 'Bergamot', 'Lemon'],
      middle: ['Jasmine', 'Rose', 'Ylang-Ylang'],
      base: ['Sandalwood', 'Vanilla', 'Patchouli']
    }
  },
  {
    id: 2,
    name: 'Dior Sauvage',
    price: 95,
    brand: 'Dior',
    description: 'A fresh, spicy, and woody fragrance.',
    imageUrl: sauvage,
    rating: 4.7,
    reviews: 200,
    size: '100ml',
    availability: true,
    category: 'Eau de Toilette',
    fragranceNotes: {
      top: ['Calabrian Bergamot', 'Pepper'],
      middle: ['Sichuan Pepper', 'Lavender'],
      base: ['Ambroxan', 'Cedar']
    }
  },
  {
    id: 3,
    name: 'Versace Eros',
    price: 85,
    brand: 'Versace',
    description: 'A vibrant and intense fragrance.',
    imageUrl: VersaceEros,
    rating: 4.6,
    reviews: 180,
    size: '100ml',
    availability: true,
    category: 'Eau de Toilette',
    fragranceNotes: {
      top: ['Mint', 'Green Apple', 'Lemon'],
      middle: ['Tonka Bean', 'Geranium', 'Ambroxan'],
      base: ['Vanilla', 'Vetiver', 'Oakmoss']
    }
  },
  {
    id: 4,
    name: 'Gucci Bloom',
    price: 110,
    brand: 'Gucci',
    description: 'A floral fragrance capturing the spirit of contemporary women.',
    imageUrl: GucciBloom,
    rating: 4.8,
    reviews: 150,
    size: '100ml',
    availability: true,
    category: 'Eau de Parfum',
    fragranceNotes: {
      top: ['Rangoon Creeper'],
      middle: ['Tuberose'],
      base: ['Jasmine Bud']
    }
  },
  
  {
    id: 5,
    name: 'Tom Ford Black Orchid',
    price: 140,
    brand: 'Tom Ford',
    description: 'A luxurious and sensual fragrance of rich, dark accords.',
    imageUrl:  TomFord,
    rating: 4.9,
    reviews: 220,
    size: '100ml',
    availability: true,
    category: 'Eau de Parfum',
    fragranceNotes: {
      top: ['Black Truffle', 'Ylang-Ylang', 'Bergamot'],
      middle: ['Black Orchid', 'Lotus Wood'],
      base: ['Patchouli', 'Incense', 'Vanilla']
    }
  },
  {
    id: 6,
    name: 'Jo Malone London English Pear & Freesia',
    price: 130,
    brand: 'Jo Malone London',
    description: 'A fresh and fruity fragrance inspired by an orchard.',
    imageUrl: Euphoria,
    rating: 4.7,
    reviews: 170,
    size: '100ml',
    availability: true,
    category: 'Cologne',
    fragranceNotes: {
      top: ['King William Pear'],
      middle: ['Freesia'],
      base: ['Patchouli']
    }
  },
  {
    id: 7,
    name: 'Yves Saint Laurent Black Opium',
    price: 115,
    brand: 'Yves Saint Laurent',
    description: 'An addictive gourmand floral with notes of coffee and vanilla.',
    imageUrl: Taj,
    rating: 4.8,
    reviews: 240,
    size: '100ml',
    availability: true,
    category: 'Eau de Parfum',
    fragranceNotes: {
      top: ['Coffee', 'Pink Pepper', 'Orange Blossom'],
      middle: ['Jasmine', 'Vanilla'],
      base: ['Patchouli', 'Cedar']
    }
  },
  {
    id: 8,
    name: 'Burberry Her',
    price: 105,
    brand: 'Burberry',
    description: 'A vibrant, fruity, and floral fragrance.',
    imageUrl: Dior,
    rating: 4.5,
    reviews: 130,
    size: '100ml',
    availability: true,
    category: 'Eau de Parfum',
    fragranceNotes: {
      top: ['Red and Dark Berries'],
      middle: ['Jasmine'],
      base: ['Musk', 'Amber']
    }
  },

];
