import {Box, useColorMode } from '@chakra-ui/react';
import Header from './layouts/header/Header';
import Slider from './layouts/Slider/Slider';
import Main from './layouts/Main/Main';
import Footer from './layouts/footer/Footer';


export default function App() {
  const {colorMode, setColorMode} = useColorMode()
setColorMode('light')
  // 2. Wrap ChakraProvider at the root of your app
  return (
  <Box bgColor={"whiteO"}>
    <Header />
    <Slider />
    <Main />
    <Footer />
  </Box>
  )
}