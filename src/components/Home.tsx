import { Box, Slider } from '@chakra-ui/react'
import React from 'react'
import Header from '../layouts/header/Header'
import Main from '../layouts/Main/Main'
import Footer from '../layouts/footer/Footer'

const Home = () => {
  return (
    <Box>
        <Header />
        <Slider />
        <Main />
        <Footer />
    </Box>
  )
}

export default Home
