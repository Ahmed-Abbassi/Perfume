import { Box, Button, FormControl, FormLabel, Heading, Input, Link, Text, VStack } from '@chakra-ui/react'
import axios from 'axios'
import React, { ChangeEvent, FormEvent, useState } from 'react'

const SignInForm = (propsData : {width : string}) => {
    const {width}  = propsData
    
    type userType = {
        username : string , 
        phoneNumber : string ,
        age : string,
        password : string
    }
    const [userCredantials, setUserCredantials] = useState<userType >({
        username : "" , 
        phoneNumber : "" ,
        age : "",
        password : ""
    });

    //handle change
    const handleChange = function(e :React.ChangeEvent<HTMLInputElement>){
        const {name, value} = e.target
        setUserCredantials({...userCredantials,[name] : value})
    }
  

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault()
      try{
        const response = await axios.post('http://localhost:5000/signin', userCredantials, {
            headers :{
                "Content-Type": 'application/json'
            },
            
          }
        )
          console.log(response.data.message);
          

      }catch(error){
        console.log(error);
        
      }
    }

  return (
    <Box   display={"flex"} alignItems={"center"} width={width}>
        <Box 
            w="100%" 
           
            
            bg="white"
                >
            <Box width={"80%"} margin={"auto"}>
                <Heading as="h1" size="lg" mb={4}>Sign In</Heading>
                <form onSubmit={handleSubmit}>
                <FormControl id="username" isRequired>
                    <FormLabel>Username</FormLabel>
                    <Input onChange={handleChange}
                    type="text" 
                    name='username'
                    value={userCredantials?.username} 
                    
                    />
                </FormControl>
                <FormControl id="phoneNumber" isRequired>
                    <FormLabel>phone Number</FormLabel>
                    <Input onChange={handleChange}
                    type="text" 
                    name="phoneNumber"
                    value={userCredantials?.phoneNumber} 
                    
                    />
                </FormControl>
                <FormControl id="age" isRequired>
                    <FormLabel>age</FormLabel>
                    <Input onChange={handleChange}
                    type="text" 
                    name ="age"
                    value={userCredantials?.age} 
                    
                    />
                </FormControl>
                <FormControl id="password" isRequired mt={4}>
                    <FormLabel>Password</FormLabel>
                    <Input onChange={handleChange}
                    name='password'
                    type="password" 
                    value={userCredantials?.password} 
             
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
                <Text mt={4}>Don't have an account? <Link href="/login" color={"blueO"}>Loi in</Link></Text>
            </Box>
    </Box>
    </Box>
  )
}

export default SignInForm
