import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Footer from '../../Components/Footer'
import NavbarHeader from '../../Components/Navbar'
import Filter from '../../Components/Products/Watch/Filter'
import ProductCard from '../../Components/Products/Watch/ProductCard'


const Watch = () => {
  return (
    <>
    <NavbarHeader/>
     <Container
     mt="20px"
    minW={"95%"}
    height="auto"
    bg="#F9F9FA"
    border="1px solid red"
   display={"flex"}
   
     >
        <Filter />
        <ProductCard />
      </Container>
    
    <Footer/>
    </>
  )
}

export default Watch
