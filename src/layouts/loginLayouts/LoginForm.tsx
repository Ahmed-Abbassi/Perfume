import { Box, Button, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import axios, { AxiosError } from 'axios'
import React, { MutableRefObject, useRef, useState } from 'react'

const LoginForm = (propsData : {width : string}) => {
    const {width}  = propsData

    const usernameRef :any = useRef()
    const passwordeRef :any = useRef()
    const handleSubmit = async (event : React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
     try{
        const response = await axios.post('http://localhost:5000/login', {username : usernameRef.current.value, password: passwordeRef.current.value},
            {headers : {
                'Content-Type' : 'application/json'
            }}
           
          )
          console.log(response.data.message);
          
     }catch(err){
       if(axios.isAxiosError(err)){
        console.log(err.message);
        
       }else{
        console.log("error in the response");
        
       }
        
     }
      
    };
  return (
    <Box   display={"flex"} alignItems={"center"} width={width}>
        <Box 
            w="100%" 
           
            
            bg="white"
                >
            <Box width={"80%"} margin={"auto"}>
                <Heading as="h1" size="lg" mb={4}>Login</Heading>
                <form onSubmit={handleSubmit}>
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input 
                    type="text" 
                    ref={usernameRef}
                    />
                </FormControl>
                <FormControl id="password" isRequired mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input 
                    type="password" 
                    ref={passwordeRef}
                    />
                </FormControl>
                <Button 
                    mt={6} 
                    colorScheme="transparent" 
                    bgColor={'blueO'}
                    type="submit"
                    w="full"
                >
                    Login
                </Button>
                </form>
                <Text mt={4}>Don't have an account? <Link href="/signin" color={"blueO"}>Sign in</Link></Text>
            </Box>
    </Box>
    </Box>
  )
}

export default LoginForm
