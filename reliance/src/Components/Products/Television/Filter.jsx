import { Box ,Checkbox,Text,CheckboxGroup,Grid, Radio, Stack ,Flex} from '@chakra-ui/react'
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { FaSistrix } from 'react-icons/fa';


const Filter = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [brand,setBrand]=useState(searchParams.getAll("brand") || [])
  

    const handleBrandOnChange = (e) => {
        const option = e.target.value;
        let newBrand = [...brand];
        if (newBrand.includes(option)) {
          newBrand.splice(newBrand.indexOf(option), 1);
        } else {
          newBrand.push(option);
        }
        setBrand(newBrand);
      };
      useEffect(()=>{
        let params={}

        brand && (params.brand = brand);
        setSearchParams(params)

        
        console.log(params)
        
      },[brand, setSearchParams ])

  return (
    <div>
     

    <Grid justifyContent={"left"}  gap="6" >
    <Box 
    // border={"1px solid blue"}
       display="grid" 
      boxShadow='lg' p='6' rounded='md' bg='#FFFFFF'
      width={"20rem"}
      minHeight="4rem" 
      
      >
        <Text >FILTERS</Text>
        </Box>

        
       <Box 
      //  border={"1px solid blue"}
         boxShadow='lg' p='6' rounded='md' bg='#FFFFFF'
         width={"20rem"}
         height="auto" >
          <Text  textAlign={"left"} mb="20px" >Availability</Text>
         <CheckboxGroup colorScheme='green' >
            <Grid  direction={['row', 'row']} >
              <Checkbox 
              >
                <Text> Exclude out of Stock </Text>
               
                </Checkbox>

            </Grid>
          </CheckboxGroup>
                    
        </Box> 


        <Box 
        // border={"1px solid blue"}
         boxShadow='lg' p='6' rounded='md' bg='#FFFFFF'
         width={"20rem"}
         height="auto" >
          <Flex justifyContent={"space-between"}>
          <Text  textAlign={"left"} mb="20px"> Brands </Text>
          <FaSistrix size={"20px"} />
          </Flex>
        
         <CheckboxGroup colorScheme='green' >
            <Grid  direction={['row', 'row']} >
              <Checkbox value='Samsung'
               onChange={handleBrandOnChange}
               checked={brand.includes("Samsung")}
              >
                <Text> Samsung </Text>
               
                </Checkbox>

                <Checkbox value='Oneplus'
               onChange={handleBrandOnChange}
               checked={brand.includes("Oneplus")}
              >
                <Text> Oneplus </Text>
               
                </Checkbox>

                <Checkbox value='TCL'
               onChange={handleBrandOnChange}
               checked={brand.includes("TCL")}
              >
                <Text> TCL </Text>
               
                </Checkbox>

                <Checkbox value='Kodak'
               onChange={handleBrandOnChange}
               checked={brand.includes("Kodak")}
              >
                <Text> Kodak </Text>
               
                </Checkbox>


                <Checkbox value='Toshiba'
               onChange={handleBrandOnChange}
               checked={brand.includes("Toshiba")}
              >
                <Text> Toshiba</Text>
               
                </Checkbox>

                <Checkbox value='Realme'
               onChange={handleBrandOnChange}
               checked={brand.includes("Realme")}
              >
                <Text> Realme</Text>
               
                </Checkbox>

             
                <Checkbox value='Karbonn'
               onChange={handleBrandOnChange}
               checked={brand.includes("Karbonn")}
              >
                <Text> Karbonn</Text>
               
                </Checkbox>
           
              
            </Grid>
          </CheckboxGroup>
                    
        </Box> 


        <Box 
        // border={"1px solid blue"}
         boxShadow='lg' p='6' rounded='md' bg='#FFFFFF'
         width={"20rem"}
         height="auto" >
          <Text textAlign={"left"} mb="20px" >SORTING</Text>
        
          <Stack>
          <Radio size='lg' name='1' colorScheme='green'>
           A-Z 
          </Radio>
          <Radio size='lg' name='1' colorScheme='green' >
            Z-A
          </Radio>
        </Stack>   
        </Box> 


       

       
    </Grid>  
     
    </div>
  )
}

export default Filter
