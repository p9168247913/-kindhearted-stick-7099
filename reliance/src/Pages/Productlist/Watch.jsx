import { Container, Flex ,Text,Box} from '@chakra-ui/react'
import React from 'react'
import { FaAngleRight, FaHome } from 'react-icons/fa'
import Footer from '../../Components/Footer'
import NavbarHeader from '../../Components/Navbar'
import Filter from '../../Components/Products/Watch/Filter'
import ProductCard from '../../Components/Products/Watch/ProductCard'



const Soundbar = () => {
  return (
    <>
    <NavbarHeader/>

   
      <Flex 
      borderBottom={"1px solid grey"} 
      alignItems={"center"}
      justifyItems="center"
      pl="15px" >
      <Box > <FaHome/> </Box>
      <Box> <FaAngleRight/> </Box>
      <Box>  <Text>Search</Text></Box>

      </Flex>

     
     <Container
       
        mt="20px"
        minW={"100%"}
        height="auto"
        bg="#F9F9FA"
        // border="1px solid red"
      display={"flex"}
      m="0"
      
     >
        <Filter />
        <ProductCard/>
      </Container>
    
    <Footer/>
    </>
  )
}

export default Soundbar
