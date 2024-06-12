import {Box } from '@chakra-ui/react';
import Home from './components/Home';
import { Outlet } from 'react-router-dom';


export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
  <Box bgColor={"whiteO"}>
    <Home />
  </Box>
  )
}