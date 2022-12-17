import React, { useState } from 'react'
import { Button, Text, Stack, Box, Input, Divider, Radio, FormControl, Checkbox, FormHelperText, FormErrorMessage, SimpleGrid } from "@chakra-ui/react"
import Navbar from "../../Components/Navbar"
import Footer from '../../Components/Footer'



const Payment = () => {
    const [input, setInput] = useState('')

    const handleInputChange = (e) => setInput(e.target.value)

    const isError = input === ''


    const handleSubmit = e => {
        e.preventDefault()
        alert('You have finished payment!')
        this.form.reset()
    }
    return (

        <div>
            <Navbar />

            <Stack boxShadow='base' p='0' bg='white' w="50%" margin="auto" alignItems="center" marginBottom="30px" marginTop="20px">
                <Text textAlign="start" fontSize="20px" >Shipping Address</Text>
                <Box w="80%">
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} gap="30px" justifyContent="space-between" w="100%" >
                        <Input type="text" class="form-control" id="firstName" placeholder="First Name" value="" required />
                        <Input type="text" class="form-control" id="lastName" placeholder="Last Name" value="" required />
                    </SimpleGrid>

                    <Box mt="30px" >
                        <Input type="text" class="form-control" id="address" placeholder="Address" required />
                    </Box>

                    <Box mt="30px" >
                        <Input type="text" class="form-control" id="address" placeholder="Enter City" required />
                    </Box>


                    <Box mt="30px" >
                        <Input type="text" class="form-control" id="address" placeholder="Enter State" required />
                    </Box>



                    <Divider mt="20px" />
                    <Box textAlign="start" mt="10px" ml="20px">
                        <Checkbox>Shipping address is the same as my billing address</Checkbox>

                        <Checkbox>Save this information for next time</Checkbox>
                    </Box>
                    <Divider mt="20px" />


                    <Text marginTop="20px" fontSize="20px"  >PAY SECURELY</Text>

                    <SimpleGrid margin="auto" marginTop="20px" columns={{ base: 1, sm: 1, md: 3 }} >
                        <Radio value='1'>Credit card</Radio>
                        <Radio value='1'>Debit card</Radio>
                        <Radio >Paypal</Radio>
                    </SimpleGrid>

                    <FormControl isInvalid={isError}>
                        <Box >
                            <SimpleGrid columns={{ base: 1, sm: 2 }} justifyContent="space-between" mt="20px" gap="20px" >
                                <Input type="text" placeholder="Name on card" required value={input} onChange={handleInputChange} />
                                <Input placeholder='Credit card number' pattern='[\d| ]{16,22}' maxLength='19' required value={input} />
                            </SimpleGrid>
                        </Box>

                        <SimpleGrid columns={{ base: 1, sm: 2 }} gap="30px" mt="20px" >
                            <Input type="month" required placeholder='Valid Thru' pattern='\d\d/\d\d' value={input} />
                            <Input required type="number" placeholder='CVC' pattern='\d{3}' value={input} />
                        </SimpleGrid>
                        {!isError ? (
                            <FormHelperText>
                                Enter the email you'd like to receive the newsletter on.
                            </FormHelperText>
                        ) : (
                            <FormErrorMessage>Email is required.</FormErrorMessage>
                        )}
                    </FormControl>
                    <Divider mt="20px" />
                    <Button mt="20px" marginBottom="10px" size='md' height='48px' width='200px' bg="red" onClick={handleSubmit} >  Continue Checkout </Button>
                </Box>
            </Stack>
            <Footer />
        </div >
    )
}

export default Payment
