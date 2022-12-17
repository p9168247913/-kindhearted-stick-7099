import { Box, Container } from '@chakra-ui/react'
import React from 'react'
import Filter from '../../Components/Products/Filter'
import ProductCard from '../../Components/Products/ProductCard'

const ProductList = () => {
  return (
    <>
  
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
    
    </>
  )
}

export default ProductList
