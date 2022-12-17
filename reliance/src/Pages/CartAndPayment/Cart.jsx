import React from 'react'
import Navbar from "../../Components/Navbar"
import MyCart from '../../Components/Cart/MyCart'
import Checkout from "../../Components/Cart/Checkout"
import Footer from '../../Components/Footer'
import { Grid, GridItem } from '@chakra-ui/react'

const Cart = () => {

    return (
        <>
            <Navbar />
            <Grid maxW={"xxl"} templateColumns='repeat(5, 1fr)' alignItems={"center"} justifyContent={"center"} padding={"0px 0px  30px  40px"}>
                <GridItem justifySelf={"flex-start"} colSpan={{ base: 5, sm: 5, md: 3 }} rowSpan={{ base: 2, sm: 2, md: 1 }} >{<MyCart />}</GridItem>
                <GridItem colSpan={{ base: 5, sm: 5, md: 2 }} rowSpan={{ base: 2, sm: 2, md: 1 }}>{<Checkout />}</GridItem>

            </Grid>
            <Footer />
        </>
    )
}
// style={{ width: "70%" }}
export default Cart
