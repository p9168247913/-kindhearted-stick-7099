import { Container, Flex ,Text,Box} from '@chakra-ui/react'
import React from 'react'
import { FaAngleRight, FaHome } from 'react-icons/fa'
import Footer from '../../Components/Footer'
import NavbarHeader from '../../Components/Navbar'
import Filter from '../../Components/Products/Appliances/Filter'
import ProductCard from '../../Components/Products/Appliances/ProductCard'






const Appliances = () => {
  return (
    <>
    <NavbarHeader/>

   
      <Flex 
      borderBottom={"1px solid grey"} 
      alignItems={"center"}
      justifyItems="center"
      pl="30px" >
      <Box mr="10px"> <FaHome/> </Box>
      <Box mr="10px"> <FaAngleRight/> </Box>
      <Box>  <Text>Search</Text></Box>

      </Flex>

     
     <Container
        
        mt="20px"
        minW={"100%"}
        height="auto"
        bg="#F9F9FA"
        // border="1px solid red"
      display={"flex"}
      m="auto"
      
     >
        <Filter />
        <ProductCard />
      </Container>
    
    <Footer/>
    </>
  )
}

export default Appliances
