import { Box , Container,Text,Image ,Flex,Grid,Heading,Button,GridItem} from '@chakra-ui/react'
import React,{useEffect} from 'react'
import { useDispatch, useSelector ,shallowEqual} from 'react-redux';
import { useLocation,  useSearchParams } from 'react-router-dom';
import { FetchTelevision } from '../../Redux/AppReducer/action';


const ProductCard = () => {
    const dispatch = useDispatch()
    const [searchParams]=useSearchParams()
    const prod_name= useSelector((store)=>store.prod_name)
    const location = useLocation()

   

    
    useEffect(()=>{
        if( location || prod_name.length === 0){
         
            const brand = searchParams.getAll("brand")
            const queryParams = {
                params:{
                    brand
                }
            }
            console.log(queryParams)

            dispatch(FetchTelevision(queryParams))
        }
        
    },[location.search])


   

 
  return (
    <>
    <Box
      h={"auto"}
      w="70%"
      m="auto"
     mt="0px"
      mr="0px"
      
      border={"1px solid red"}
    >
      
      <Text fontSize={"19px"} color="blackAlpha.700" fontWeight={"700"} border="1px solid blue">
        Showing Products({prod_name.length}) 
      </Text>
      <Box>
        <Grid
          templateColumns={["repeat(1, 1fr)", "repeat(2,1fr)", "repeat(3,1fr)"]}
          gap={6}
          boxSizing="borderBox"
          py={"15px"}
        >
       
       {prod_name.length > 0 && prod_name.map((item)=>{
                return <GridItem 
              key={item.id}
               alignContent="center">
                <Box
                  className="companiesBoxContainer"
                  border={"1px solid lightgrey"}
                  h="390px"
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
                    Hammer Pulse 3.0 Bluetooth Calling Smartwatch with Honeycomb Design (Black)
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
