import React from 'react'
import { Stack, Box, Text, Input, Button, Divider } from "@chakra-ui/react"

const Checkout = () => {
    return (
        <Stack maxWidth="90%" mt="40px" cursor="default	">
            <Box  >
                <Box bg="#e42529" h="30px" rounded="sm" ><Text paddingTop="8px" color="white" fontSize="13px" >CHECKOUT</Text></Box>
            </Box>

            <Box boxShadow='base' p='0' bg='white' w="100%" marginBottom="30px">

                <Box display="flex" marginTop="20px" ml="20px" >
                    <Input h="30px" w="70%" placeholder="Coupan Code" rounded="sm" fontSize="13px" />
                    <Button h="30px" variant="outline" spacing="6" rounded="sm" color="#1774ef" fontSize="13px" >Apply</Button>
                </Box>
                <Divider mt="20px" />

                <Box marginLeft="20px" mt="10px" className="PriceDetails" >
                    <Text as="h3" textAlign="start">PRICE DETAILS</Text>
                    <Box display="flex" justifyContent="space-between" mt="10px" mr="20px">
                        <Text as="p" fontSize="13px" textAlign="start" >Price (1 Items)</Text>
                        <Text fontSize="13px" >₹85,405</Text>
                    </Box>
                    <Box display="flex" justifyContent="space-between" mt="10px" mr="20px">
                        <Text fontSize="13px" >Delivery Charge</Text>
                        <Text fontSize="14px" color="#43a047">Free</Text>
                    </Box>
                </Box>

                <Divider mt="20px" />
                <Box marginLeft="20px" display="flex" justifyContent="space-between" mt="10px" mr="20px" >
                    <Text fontSize="14px" >AMOUNT PAYABLE</Text>
                    <Text color="#003380" fontSize="14px">₹85,405</Text>
                </Box>

                <Divider mt="20px" />
            </Box>

        </Stack>
    )
}


export default Checkout