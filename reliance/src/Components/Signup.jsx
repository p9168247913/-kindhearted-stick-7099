import React, { useState } from 'react';
import {Box,Button,Heading,Flex,FormControl,FormLabel,Input,Stack,Text,useColorModeValue } from '@chakra-ui/react';
import { Link } from "react-router-dom";
import { useToast } from '@chakra-ui/react';

export default function Signup() {
    const [show, setShow] = useState(false);
    const handleClick = () => setShow(!show);
    const toast = useToast();

    return (
        <>
            <Flex
                minH={'100vh'}
                align={'center'}
                justify={'center'}
                bg={useColorModeValue('gray.50', 'gray.800')}>
                <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
                    <Stack align={'center'}>
                        <Heading fontSize={'4xl'}>Reliance Seller India</Heading>
                        <Text fontSize={'lg'} color={'gray.600'}>
                            Already have account? <Link to="/" style={{ textDecoration: 'none', color: 'blue' }} >Login</Link>
                        </Text>
                    </Stack>
                    <Box
                        rounded={'lg'}
                        bg={useColorModeValue('white', 'gray.700')}
                        boxShadow={'lg'}
                        p={8}>
                        <Stack spacing={4}>
                            <FormControl id="name">
                                <FormLabel>Your Name</FormLabel>
                                <Input type="Text" placeholder='First and Last Name' />
                            </FormControl>

                            <FormControl id="email">
                                <FormLabel>Email address</FormLabel>
                                <Input type="email" placeholder='Enter Email' />
                            </FormControl>

                            <FormControl id="mobileNumber">
                                <FormLabel>Number Number</FormLabel>
                                <Input type="Text" placeholder=' Number' />
                            </FormControl>


                            <FormControl id="password">
                                <FormLabel>Password</FormLabel>
                                <Input type="password" placeholder='Password' />
                            </FormControl>
                            <Stack spacing={10}>
                                <Button bg={'blue.400'}
                                    color={'white'}
                                    _hover={{
                                        bg: 'blue.500',
                                    }} onClick={() => {
                                        toast({
                                            title: 'Account created.',
                                            description: "We've created your account for you.",
                                            status: 'success',
                                            duration: 3000,
                                            isClosable: true,
                                        })
                                    }}>
                                    Submit
                                </Button>
                            </Stack>
                        </Stack>
                    </Box>
                </Stack>
            </Flex>
        </>
    );
}