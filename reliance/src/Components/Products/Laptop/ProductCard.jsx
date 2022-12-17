import { Box ,Text,Image ,Flex,Grid,Heading,Button,GridItem,  Center} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { BsFillGridFill } from 'react-icons/bs';
import { FiMenu } from 'react-icons/fi';
import { useDispatch, useSelector} from 'react-redux';
import { useLocation,  useSearchParams } from 'react-router-dom';
import { FetchLaptop } from '../../../Redux/AppReducer/action';




const ProductCard = () => {
    const dispatch = useDispatch()
    const [searchParams]=useSearchParams()
    const laptop= useSelector((store)=>store.laptop)
    const location = useLocation()

    useEffect(()=>{
      const brand = searchParams.getAll("brand")
        if( location || laptop.length === 0){
         
           
            const queryParams = {
                params:{
                    brand
                }
            }
            console.log("ans" ,queryParams)

            dispatch(FetchLaptop(queryParams))
        }
        
    },[location.search, dispatch, searchParams])


   
if(laptop.length>0){
  console.log(laptop)
}
 
  return (
    <>
    
    <Box
      h={"auto"}
      w="72rem"
      m="auto"
     mt="0px"
      mr="0px"
      
      // border={"3px solid green"}
    >
   
    
      <Box>
      <Flex 
      // border={"1px solid blue"}
      //  display="grid" 
      boxShadow='lg' p='5' rounded='md' bg='#FFFFFF'
      width={"72rem"}
     minHeight="2rem"
      position={"relative"}
      justifyContent="end"
    
      >
        <Flex border={"0px solid red"} >
        <Box mr={"14px"} fontWeight="bold"><Text>Sort By:</Text></Box>
        <Flex flexDirection={"row"} mr="20px">
          <Box fontSize={"14px"} mr="12px" p="0px 8px" minH="18px" bg="lightgrey" borderRadius={"4px"}><Text pt="2px">Price(Low-High)</Text></Box>
          <Box fontSize={"14px"} p="0px 8px" bg="lightgrey" borderRadius={"4px"}><Text pt="2px">Price(High-Low)</Text></Box>
        </Flex>

        <Box height="35px" border={"1px solid lightgrey"} w="40px" pt={"2"} >
          <Center><FiMenu size={"20px"} color="grey"/></Center>
        </Box>
        <Box height="35px" border={"1px solid lightgrey"} w="40px" pt={"2"} >
          <Center> <BsFillGridFill size={"18px"} /> </Center>
        </Box>

        </Flex>
         </Flex>
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
          gap={6}
          boxSizing="borderBox"
         mb={"10"}
         py={"18px"}
        >
          
            {laptop.length > 0 && laptop.map((item)=>{
                return <GridItem 
                key={item.id}
               alignContent="center">
                <Box
                  className="companiesBoxContainer"
                  border={"1px solid lightgrey"}
                  h="410px"
                  display={"flex"}
                  flexDirection="column"
                  alignItems={"center"}
                  borderRadius="8px"
                  position={"relative"}
                  boxShadow='2xl' p='6' rounded='md' bg='white' 
                >
                  <Image
                    m="auto"
                    w="50%"
                    
                    my="27px"
                    objectFit={"cover"}
                    src={item.img1}
                  />
                  <Heading
                    as="h4"
                    fontSize={"15px"}
                    textAlign={"center"}
                    mb="15px"
                    color={"blackAlpha.800"}
                  >
                    {item.name}
                  </Heading>
                 
                  <Text
                    textAlign={"center"}
                    color={"blackAlpha.800"}
                    w="80%"
                    lineHeight={"1.2"}
                    fontWeight={"600"}
                  >
                   {item.brand}
                  </Text>

                  <Text
                    textAlign={"center"}
                    color={"blackAlpha.800"}
                    w="80%"
                    lineHeight={"1.2"}
                    fontWeight={"600"}
                  >
                   {item.dealprice}
                  </Text>
                    
                  <Box bottom="1" position={"absolute"}>
                    <Button bg="blue.50" color="blue.600" borderRadius={"15px"}>
                      View Products
                  </Button>
                  </Box>
                </Box>
              </GridItem>

           })}
        </Grid>
      </Box>
    </Box>
    </>
  )
}

export default ProductCard
















































  {/* <Container border="1px solid blue"
      width="20rem"
      height="auto"
     
      >
        <Box boxShadow='2xl' p='6' rounded='md' bg='white' mb="10px">
        <Image mb="30px" src="https://www.reliancedigital.in/medias/Hammer-PULSE-3-0-Smart-Watch-492849894-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w3NTc2NnxpbWFnZS9qcGVnfGltYWdlcy9oOTAvaGVhLzk4MTQ3MTk3MjU1OTguanBnfDIwNmE0ZTYxZWZjODMwMDUxZTBiNWE0ZTM4YzFhODIzNDBkM2FlNmUzZTliNDIyY2I2ZjI5YWMxOGMzYzkwZmE"   width="100%" />
        <Text fontSize={"15px"} fontWeight={"semibold"}>Hammer Pulse 3.0 Bluetooth Calling Smartwatch with Honeycomb Design (Black)</Text>
        <Flex gap={6} >
        <Text>Mrp-:22900</Text>
        <Text>Dealprice-:15490</Text>
        
        </Flex>
        <Flex gap={6}>
        <Text>discount-:32%</Text>
        <Text borderRadius="2xl" p="2" border={"5px solid green"}>Cashback</Text>
        </Flex>
        
        
        </Box>
      </Container> */}
