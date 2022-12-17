import React from 'react'
import { Stack, Box, Text, Image, Divider, Grid, GridItem, SimpleGrid } from "@chakra-ui/react"

const MyCart = () => {
    return (

        <Stack w="95%" marginTop="40px"  >

            <Box w="100%" boxShadow='base' p='3' bg='white' display="flex" justifyContent="space-between " >
                <Text>My Cart (1 Item ) </Text>
                <Text>shipping to:  411048</Text>
            </Box>

            <Box boxShadow='base' p='3' bg='white'>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} w="100%" justifyContent="space-between">
                    <GridItem display="flex" justifyContent="space-around"  >
                        <Box w="40%" >
                            <Image src="https://www.reliancedigital.in/medias/Apple-Ultra-Sports-Fitness-Watches-493177945-i-1?context=bWFzdGVyfGltYWdlc3wxOTUzOTN8aW1hZ2UvanBlZ3xpbWFnZXMvaGI0L2g3Mi85ODkxODQ5Nzk3NjYyLmpwZ3xlYjk2YWRkY2YzMzIxYzgzZmRiMDIzMWQwOGY3NDI4OTYxODM0NDQ5YjdhZjc4YTY3NDBlMTg2YmQzYzJhM2Fh" w="70%" />
                            <Box w="60%" display="flex" gap="8px" marginTop="10px" marginLeft="10px">
                                <Box w="35%" border="1px solid black" bg="RGBA(0, 0, 0, 0.08)"> - </Box>
                                <Box w="35%" boxShadow='base' p='0' bg='white'> 1 </Box>
                                <Box w="35%" border="1px solid black" bg="RGBA(0, 0, 0, 0.24)" > + </Box>
                            </Box>
                        </Box>
                        <Box w="70%" marginLeft="-30px">
                            <Text color="#003380" textAlign="start" fontFamily="Roboto, system-ui, sans-serif" fontSize="15px" lineHeight="21px" >Apple Watch Ultra GPS + Cellular - 49 mm Titanium Case with Blue and Gray Trail Loop - M/L</Text>
                            <Text color="666666" fontSize="15px" textAlign="start">493177945</Text>
                        </Box>
                    </GridItem>

                    <GridItem textAlign={{ base: "left", sm: "left", md: "right" }} mt={{ base: "10px", sm: "10px" }} ml={{ base: "140px" }}>
                        <Text fontSize="18px" color="#000000" >₹85,450</Text>
                        <Text color="#666666" fontSize="12px">M.R.P.: <Text as='del'>₹89000</Text>    inclusive of all taxes</Text>
                        <Text color="#666666" fontSize="14px" >You Save: <Text as="span" >5%(4,950)</Text> </Text>
                        <Text color="#15967c" fontSize="13px" sss>Free Shipping</Text>
                        <Text color="#003380" fontSize="12px" >Standard Delivery: 17 Dec (Sat)- 18 Dec (Sun) </Text>
                        <Text color="#666666" fontSize="12px" >*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
                    </GridItem>
                </SimpleGrid >
                <Divider mt="20px" />
                <Box display="flex" justifyContent="space-evenly" bgColor="RGBA(255, 255, 255, 0.24)" mt="10px">
                    <Text bgColor="RGBA(255, 255, 255, 0.24)" fontSize="13px" color="#1774ef" w="10%" >Remove</Text>
                    <Text bgColor="RGBA(255, 255, 255, 0.24)" fontSize="13px" color="#1774ef" >Move To Wishlist</Text>
                </Box>
            </Box>
        </Stack >
    )
}

export default MyCart
