import React from 'react'
import { SimpleGrid, Box, Text, Img, Checkbox, Divider, UnorderedList, ListItem, Input, Button } from '@chakra-ui/react'
import { AiFillStar, AiFillPrinter } from 'react-icons/ai';
import { FaShareAlt, FaTruck, FaExclamationCircle } from 'react-icons/fa'
import Navbar from "../../Components/Navbar"
import Footer from "../../Components/Footer"

export const Television = () => {
    return (
        <>
            <Navbar />
            <SimpleGrid columns={{ base: 1, sm: 1, md: 2 }} border={"0px solid black"} mt="40px" >
                <Box border={"0px solid black"} className="Box1TV"  >
                    <Box>
                        <Img w="50%" margin={"auto"} src="https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxOTMxMDl8aW1hZ2UvanBlZ3xpbWFnZXMvaDIyL2hmMy85ODQyMjA0OTM0MTc0LmpwZ3w4MTM3ZTc5YjY1NzhiNTYyZDFiMmNhMDI3OWU3NzQxZWUzMmVmYWI5NmFiMDUxMmY2ZjAzNWQyZjBmZDI3YTkx" />
                    </Box>
                </Box>

                <Box border={"0px solid black"} m="40px  0px 0px 10px" className='Box2' >
                    <Box textAlign={"start"} >
                        <Text as={"p"} fontSize="13px">Article ID: 492403650</Text>
                        <Text as={"strong"} paddingTop="20px">Samsung Wondertainment 80 cm (32 Inch) Smart HD Ready TV, UA32T4340BKXXL</Text>
                        <Box display={"flex"} mt="10px">
                            <AiFillStar size={"20px"} color='#ffa41c' />
                            <AiFillStar size={"20px"} color='#ffa41c' />
                            <AiFillStar size={"20px"} color='#ffa41c' />
                            <AiFillStar size={"20px"} color='#ffa41c' />
                            <AiFillStar size={"20px"} color='#ffa41c' />
                            <Text>(2 Reviews)</Text>
                        </Box  >
                        <Box display={"flex"} gap="10px" mt="10px" cursor={"pointer"}>
                            <Checkbox value='1'>Add to Compare</Checkbox>|
                            <FaShareAlt size="20px" color='#337ab7' />|
                            <AiFillPrinter size="19px" color='#337ab7' /><Text color={"#337ab7"} fontSize="15px" marginRight={"50px"}>Print</Text>
                        </Box>
                    </Box>
                    <Divider borderColor={"gray"} mt="10px" />
                    <SimpleGrid columns={{ base: 1, sm: 1, md: 2, }} >
                        <Box mt="10px" border={"0px solid black"} textAlign="left">
                            <Text as={"strong"} >Gain more with offers</Text>
                            <UnorderedList fontSize={"12px"} color="#585757" textAlign={"start"} mt="10px">
                                <ListItem>7.5% Instant Discount (Max 5000) with Citibank Credit/Debit Cards & EMI transactions. Read T&C</ListItem>
                                <ListItem>Get Wallmount bracket with this TV. Read T&C</ListItem>
                                <ListItem>Shop for Rs.20,000 & above and get instant discount Up To Rs.5000,Use coupon codes "YES1000" for above 20,000 ,"YES2500" for above 50,000, "YES5000" for above 1,00,000.. Read T&C</ListItem>
                                <ListItem>Get Cashback upto Rs. 1,000 on Mobikwik Wallet. Read T&C</ListItem>
                            </UnorderedList>


                            <Box mt="10px">
                                <Text as={"strong"} textAlign="left">Save more with EMI/Cashback</Text>
                                <UnorderedList fontSize={"12px"} color="#585757" textAlign={"start"} mt="10px">
                                    <ListItem>EMIs (Credit Cards) from ₹647.69/month | View all Standard Credit Cards EMI options</ListItem>

                                </UnorderedList>
                            </Box>

                            <Box mt="10px">
                                <Text as={"strong"} textAlign={"start"} >Warranty</Text>
                                <UnorderedList fontSize={"12px"} color="#585757" textAlign={"start"} mt="10px">
                                    <ListItem>  <Text as="strong" > Warranty:</Text> 1 Year manufacturer warranty</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box mt="20px" marginRight={"25px"}>
                                <Text as={"strong"} >Additional Services & Warranties</Text>
                            </Box>
                            <Box mt="10px" >
                                <Text as={"strong"} >Key Feature </Text>
                                <UnorderedList fontSize={"12px"} color="#585757" textAlign={"start"} mt="10px">
                                    <ListItem>  Year Comprehensive Warranty on Product and 1 Year Additional warranty on Panel</ListItem>
                                    <ListItem>  Supported Apps: Prime Video, Hotstar, Netflix, Zee5 and many more, PC Mode, Universal Guide, Web Browser, Screen Mirroring</ListItem>
                                    <ListItem>  Operating System: Tizen</ListItem>
                                    <ListItem>  Resolution: 1366 x 768 (HD)</ListItem>
                                </UnorderedList>
                            </Box>
                            <Box mt="10px" >
                                <Text as={"strong"} >Return Policy </Text>
                                <UnorderedList fontSize={"12px"} color="#585757" textAlign={"start"} mt="10px">
                                    <ListItem>  Items are eligible for return within 7 Days of Delivery.</ListItem>
                                    <ListItem>  All accessories, product & packaging need to be returned in original condition.</ListItem>

                                </UnorderedList>
                            </Box>
                        </Box>
                        {/* <Divider orientation='vertical' /> */}
                        <Box textAlign={"start"} border={"0px solid black"} ml={{ base: "0px", sm: "0px", md: "30px" }} >
                            <Text mt="10px">Deal Price: <Text as="strong" color={"#003380"}>₹13,490.00</Text></Text>
                            <Text mt="10px">Offer Price: <Text as={"del"}  >₹22,900.00</Text></Text>
                            <Text mt="10px" >MRP: <Text as={"del"} >₹22,900.00</Text><Text as="small" > (inclusive of all taxes) </Text></Text>
                            <Text mt="10px" color={"#467348"} as="strong">You Save : 41% (₹9,410)</Text>

                            <Text mt="10px" as="p" fontSize={"14px"}>EMIs (Credit Cards) from ₹647.69/month </Text>
                            <Text paddingTop="10px" as="strong">Free Shipping!</Text>
                            <Box>
                                <Input placeholder='Enter Pin Code' mt="20px" rounded={"sm"} w="80%" borderColor={"blue"} />
                            </Box>
                            <Box display={"flex"} mt="10px" gap="5px">
                                <FaTruck color="blue" />
                                <Text as="small">Standard Delivery: <Text as="strong" fontSize="12px" >Tomorrow</Text></Text>
                            </Box>
                            <Box display={"flex"} gap="2px">
                                <FaExclamationCircle color="#008000" />
                                <Text color="#008000" as="small">COD not available</Text>
                            </Box>
                            <Text as="small" >*Delivery assurance is subject to our delivery locations staying open as per govt. regulations</Text>
                            <Box display={"flex"} gap="10px" mt="10px">
                                <Button bg="#e42529" color="white" rounded={"sm"}>ADD TO CART</Button>
                                <Button bg="#fc6027" color="white" rounded={"sm"}>ADD TO CART</Button>
                            </Box>
                        </Box>
                    </SimpleGrid>
                </Box>
            </SimpleGrid >
            <Divider />

            <Box w="90%" ml="20px">
                <Box display={"flex"} textAlign="start" w="60%" gap="30px">
                    <Text as="strong" >Description</Text>
                    <Text as="strong" >Specifications</Text>
                    <Text as="strong" >Customer Reviews</Text>
                </Box>

                <Box mt="20px" >
                    <Img w={{ base: "50%", sm: "50%", md: "70%" }} src="https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-20?context=bWFzdGVyfGltYWdlc3w2NDQ5M3xpbWFnZS9qcGVnfGltYWdlcy9oNWMvaDk1Lzk4MzIyMTc5Njg2NzAuanBnfDgyNzVkMTk2N2Y4MDNjYzI1YmQyODM5NWNlOTIzYjhhZjJjMzc2MDhjZjI0YjlmMmRiY2MzMjkwYzczNDFhYzI" />
                    <Text w={{ base: "50%", sm: "50%", md: "70%" }} as="small" fontSize=" 15px " textAlign={"left"}>* This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>

                <Box textAlign={"left"} mt="20px" color="#575757">
                    <Text as="strong" color="#575757">HD picture quality</Text>
                    <Text mt="20px" >Enjoy HD TV in Digital era. Once you see high definition of TV with vivid and crisp details, you’ll never look back to standard definition or analog TVs.</Text>
                </Box>
                <Box mt="10px" >
                    <Img w={{ base: "50%", sm: "50%", md: "60%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-21?context=bWFzdGVyfGltYWdlc3w0NTM2MHxpbWFnZS9qcGVnfGltYWdlcy9oZTAvaDViLzk4MzIyMTgxMzI1MTAuanBnfGNhNDdkOGZjNjVhNGMxYmE1YzFlNzJhODlkM2FhMTcyMWZkNzc0ZTM5MGU1MDA0NTFkMzE3MGY2N2YwMDA0Njc' />
                    <Text fontSize={"15px"} color="#575757">* This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>

                <Box textAlign={"left"} mt="10px">
                    <Text as="strong" color="#575757">Personal Computer Mode</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">The office in your living room.</Text>
                    <Text color="#575757" mt="10px">The Personal Computer mode lets you work from the cloud on presentations, Excel and Word documents. You can also mirror your laptop for a big screen convenience or remotely access your office computer. Another excuse to work from home.    </Text>
                </Box>


                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "40%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-22?context=bWFzdGVyfGltYWdlc3w0NjQ0NHxpbWFnZS9qcGVnfGltYWdlcy9oZTcvaGVmLzk4MzIyMTgwMDE0MzguanBnfGRlYjliNTZjMmI1ZjliNDBjNjZkYTBhZDg5YzI2MmViZjlkYTU1NzhhYzliMDhmNDEwZWU5YjhiOGZiMzc5Yjc' />
                    <Text fontSize={"15px"} color="#575757">* This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text as="strong" color="#575757">Content Guide</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">Your kind of content, ready for you to watch.</Text>
                    <Text color="#575757" mt="10px">Discover a new movie or show, every time you turn on your TV. The Content Guide on your Smart TV recommends you the most popular movies and shows across all your apps. Now, spend less time searching for good content and more time enjoying it.

                    </Text>
                </Box>

                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "40%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-23?context=bWFzdGVyfGltYWdlc3w0NjA2MXxpbWFnZS9qcGVnfGltYWdlcy9oZjcvaDY0Lzk4MzIyMTgxNjUyNzguanBnfGI4Y2I0ZTIyYzJiM2Y3Y2RjMGJlYjA3MmJhNGQ0ZWE3YTU2MzE5MDJjZjI1NmUyNmFmOWIwNmRkYjFlODk2ZjA' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text as="strong" color="#575757">Music System</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">Music will never be the same.</Text>
                    <Text color="#575757" mt="10px">Play your music with an added touch of style. The Music Player feature turns your Smart TV into a stylish virtual music system. With three different colour tones to choose from, you will be in for a funbelievable visual experience every time you play your favourite songs  </Text>
                </Box>

                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "40%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-24?context=bWFzdGVyfGltYWdlc3wzNzY5MnxpbWFnZS9qcGVnfGltYWdlcy9oYmMvaDU0Lzk4MzIyMTgzMjkxMTguanBnfDY1ZGUxYzk3ZjRkYWQ4YzRhOTIzYmJkNDBkZGRlZjcxMDVlZDQ2NjgzMGI0ZDMzMDEwYmI1NDU1YzM3YTU4OWE' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">From the couch to the World Wide Web.</Text>
                    <Text color="#575757" mt="10px">Check you social media, learn new things and read your favourite blogs. If there's something you like on the internet, the smart browser will bring it to you.  </Text>
                </Box>

                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "50%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-25?context=bWFzdGVyfGltYWdlc3w1NDAzN3xpbWFnZS9qcGVnfGltYWdlcy9oZDQvaDExLzk4MzIyMTgyNjM1ODIuanBnfDI0MDE1MDU1OGY5ZjE0YzZkOTExZjFkYjJiMTVlNTAwYjdiMTlhYzRiYjJjNzQ3NmM3ZGYwOGI5MjIwZDk0NTA' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">Free TV, no strings attached</Text>
                    <Text color="#575757" mt="10px">Enjoy free live streaming TV content with our virtual channels, Samsung TV Plus. Choose from a variety of channels offering content for all interests that are currently in trend. No need to ask your friend which content is hot these days. Just tune in to Samsung TV Plus and find out.</Text>
                </Box>

                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "40%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-28?context=bWFzdGVyfGltYWdlc3w0MjMxMnxpbWFnZS9qcGVnfGltYWdlcy9oZjYvaDUzLzk4MzIyMTg0NjAxOTAuanBnfDU0YTIzODhiMzBkNjY5ZDcyNjBiODE0NTZhYzEwMDQ2M2YxOWExNzdlNTQ3YjEyNTg3NTE5OWFhZDM3N2E5Y2M' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">See the stunning detail</Text>
                    <Text color="#575757" mt="10px">High-Dynamic Range levels up bright expression of your TV, so you can enjoy an immense spectrum of colors and visual details, even in dark scenes.</Text>
                </Box>

                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "70%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-26?context=bWFzdGVyfGltYWdlc3w3MDQyOHxpbWFnZS9qcGVnfGltYWdlcy9oZmUvaGY4Lzk4MzIyMTgyOTYzNTAuanBnfDVhNDg0ZWNiMzQzZGUyYzY2MGE3OWFlZjU5ZjJkNDYxNjYxMmJmZmFhZGJjMjA1YjEyYzgzZGNmMDljNzA4MDA' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">Lifelike color that brings you closer</Text>
                    <Text color="#575757" mt="10px">PurColor makes watching videos feel almost like you're there. It enables the TV to express a huge range of colors for optimal picture performance, and an immersive viewing experience.</Text>
                </Box>


                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "40%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-27?context=bWFzdGVyfGltYWdlc3w2NDY1N3xpbWFnZS9qcGVnfGltYWdlcy9oZjAvaDhhLzk4MzIyMTgzNjE4ODYuanBnfGMxYTYyNjM5NDgyNWQ3NDY4NTdhNjQzOGU2ZDg0NzhmNzI3NGJjMTE1NWViMGU0NmNkZGU0NDM0YmUxYTI0NGY' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">Ultra Clean View</Text>
                    <Text color="#575757" mt="10px">Ultra Clean View delivers high quality images with less distortion, utilizing an advanced algorithm to analyze original content and deliver improved detail.

                    </Text>
                </Box>


                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "40%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-29?context=bWFzdGVyfGltYWdlc3w2ODU3NXxpbWFnZS9qcGVnfGltYWdlcy9oYzcvaDA2Lzk4MzIyMTg0OTI5NTguanBnfDI4ZWFiYzc4MDJhYWVlOWM2MTc3MTM5ZDIzNjEyMjA4MDc5Y2Y5MzM0NzM0ZmE4NzQ5Njc4ZDRmOGE3MGIzOWU' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">See images comes to life</Text>
                    <Text color="#575757" mt="10px">Contrast Enhancer brings flat images to life by adjusting the contrast, offering outstanding picture quality with deeper depth.

                    </Text>
                </Box>

                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "40%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-30?context=bWFzdGVyfGltYWdlc3w2ODg2OHxpbWFnZS9qcGVnfGltYWdlcy9oZTMvaDdmLzk4MzIyMTgzOTQ2NTQuanBnfDkzYTc0YTc4OTFiNmY0NTU0YTQwZWRiMDFhYTdkMjUwYzc5NTRjZjUzYmJjNzBlMDgwMTA5Yzk2YTVkMzE4ZjA' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">Connect share movie</Text>
                    <Text color="#575757" mt="10px">Plug your favourite entertainment and media into your TV – watch videos, play music, or view photos through a USB connection.</Text>
                </Box>

                <Box mt="10px" >
                    <Img w={{ base: "20%", sm: "20%", md: "50%" }} m="auto" src='https://www.reliancedigital.in/medias/Samsung-UA32T4340BKXXL-Smart-Television-492403650-31?context=bWFzdGVyfGltYWdlc3w2MDU3M3xpbWFnZS9qcGVnfGltYWdlcy9oMGYvaDIyLzk4MzIyMTg0Mjc0MjIuanBnfDM2Zjk1OGYxYTU5MDhjYzQxMzU0ZDRlYmY4YzE2MTUxYWQ5NzRmNDM4ZmU1MDczN2FkN2I3MjQwMjIzODFlNzM' />
                    <Text fontSize={"15px"} color="#575757">*  This Samsung UA32T4340BKXXL Smart Television image is for illustration purpose only. Actual image may vary.</Text>
                </Box>
                <Box textAlign={"left"} mt="10px">
                    <Text color="#575757" as="strong">Connect share movie</Text>
                    <Text color="#575757" mt="10px">Plug your favourite entertainment and media into your TV – watch videos, play music, or view photos through a USB connection.</Text>
                </Box>
                <Box textAlign="left" mt="20px">
                    <Text as="strong" fontSize={"20px"} >Specifications (Samsung Wondertainment 80 cm (32 Inch) Smart ...)</Text>
                </Box>

                <Box mt="20px" textAlign={"left"}>
                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' >
                        <Text color="#575757" as="strong" > General Information</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px">
                            <Text mt="10px" >Series</Text>
                            <Text mt="10px" >Model</Text>
                            <Text mt="10px" >Colour</Text>
                            <Text mt="10px"  >Brand</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >Wondertainment</Text>
                            <Text mt="10px" >UA32T4340BKXXL</Text>
                            <Text mt="10px" >Glossy Black</Text>
                            <Text mt="10px" >Samsung</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > TV Display</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >HDR</Text>
                            <Text mt="10px" >Contrast Ratio</Text>
                            <Text mt="10px" >Refresh Rate</Text>
                            <Text mt="10px"  >TV Operating System</Text>
                            <Text mt="10px" >Screen Resolution</Text>
                            <Text mt="10px" >Screen Size (Diagonal)</Text>
                            <Text mt="10px"  >Display Type</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >Yes</Text>
                            <Text mt="10px" >16:09</Text>
                            <Text mt="10px" >60 Hz</Text>
                            <Text mt="10px" >Tizen</Text>
                            <Text mt="10px" >1366 x 768 -HD</Text>
                            <Text mt="10px" >32 inch</Text>
                            <Text mt="10px" >HD Ready</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > SMART TV Features</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="100%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >Preloaded Apps</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >Prime Video, Hotstar, Netflix, Zee5 and many more, PC Mode, Universal Guide, Web Browser, Screen Mirroring</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > HDMI & USB Ports
                        </Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >HDMI ARC</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >Yes</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > TV Audio Related
                        </Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >Surround Sound Technology</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >Yes</Text>
                        </Box>
                    </Box>


                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > TV Connectivity Choices</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >Stream Content from devices</Text>
                            <Text mt="10px" >Connect to DVD Players via</Text>
                            <Text mt="10px" >Wi-Fi</Text>

                        </Box>

                        <Box>
                            <Text mt="10px" >Yes</Text>
                            <Text mt="10px" >HDMI</Text>
                            <Text mt="10px" >Yes</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > TV Placement on Stand</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >Width (With Stand)</Text>
                            <Text mt="10px" >Depth (with stand)</Text>
                            <Text mt="10px" >Height (with stand)</Text>
                            <Text mt="10px" >Weight (with stand)</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >73.17 cm   </Text>
                            <Text mt="10px" >15.47 cm</Text>
                            <Text mt="10px" >46.93 cm</Text>
                            <Text mt="10px" >3900 gram</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > TV Placement Wall Mounted</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >Width (With Stand)</Text>
                            <Text mt="10px" >Depth (with stand)</Text>
                            <Text mt="10px" >Height (with stand)</Text>
                            <Text mt="10px" >Weight (with stand)</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >73.17 cm   </Text>
                            <Text mt="10px" >43.9 cm</Text>
                            <Text mt="10px" >8.3 cm</Text>
                            <Text mt="10px" >3800 gram</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > Formats Supported</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >No. of USB Ports</Text>
                            <Text mt="10px" >No of HDMI Ports</Text>
                            <Text mt="10px" >USB</Text>
                            <Text mt="10px" >Connect to Home Theatre viaWeight (with stand)</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >1</Text>
                            <Text mt="10px" >2</Text>
                            <Text mt="10px" >Yes</Text>
                            <Text mt="10px" >HDMI</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" > Power Details</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="50%"  >
                        <Box ml="10px" >
                            <Text mt="10px" >Power Consumption</Text>
                            <Text mt="10px" >Power Supply</Text>
                        </Box>
                        <Box>
                            <Text mt="10px" >60 Watt</Text>
                            <Text mt="10px" >AC 100-240V 50/60Hz</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px" >
                        <Text color="#575757" as="strong" >Additional Features</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="100%" gap="150px" >
                        <Box ml="10px" >
                            <Text mt="10px" >Features</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >SmartThings App Support
                                Connectivity: 2 x HDMI and 1 x USB
                                Game Mode, Ultra Clean View, Digital Clean View</Text>
                        </Box>
                    </Box>

                    <Box boxShadow='xs' p='2' rounded='sm' bg='RGBA(0, 0, 0, 0.06)' mt="20px">
                        <Text color="#575757" as="strong" >Manufacturing & Packing Information</Text>
                    </Box>
                    <Box display={"flex"} justifyContent="space-between" w="100%" gap="150px">
                        <Box ml="10px" w="50%">
                            <Text mt="10px" >Customer care address</Text>
                            <Text mt="10px" >Customer care Phone</Text>
                            <Text mt="10px" >Customer care email</Text>
                            <Text mt="10px"  >Country of origin</Text>
                            <Text mt="10px" >Name and address of Packer</Text>
                            <Text mt="10px" >Name and address of Manufacturer</Text>
                            <Text mt="10px"  >Name and address of Importer</Text>
                        </Box>

                        <Box>
                            <Text mt="10px" >Reliance Digital, Reliance Retail Limited, 3rd Floor, Court House, Lokmanya Tilak Marg, Dhobi Talao, Mumbai-400 002, Maharashtra, India.</Text>
                            <Text mt="10px" >1800-889-1055</Text>
                            <Text mt="10px" >reliancedigital@ril.com</Text>
                            <Text mt="10px" >India  </Text>
                            <Text mt="10px" >Samsung India Electronics Private Limited, Gurgaon (India), 1-800-726-7864</Text>
                            <Text mt="10px" >Samsung India Electronics Private Limited, Gurgaon (India), 1-800-726-7864</Text>
                            <Text mt="10px" >Samsung India Electronics Private Limited, Gurgaon (India), 1-800-726-7864</Text>
                        </Box>
                    </Box>


                </Box>
                <Box textAlign={"left"} mt="20px" display={"flex"} gap="10px">
                    <Text fontSize={"25px"} >Customer Reviews  </Text>
                    <Text color="#003380" fontSize={"15px"} mt="10px">(Samsung Wondertainment 80 cm (32 Inch) Smart HD Ready TV, UA32T4340BKXXL)</Text>
                </Box>

                <Box display={"flex"} mt="10px">
                    <AiFillStar size={"20px"} color='#ffa41c' />
                    <AiFillStar size={"20px"} color='#ffa41c' />
                    <AiFillStar size={"20px"} color='#ffa41c' />
                    <AiFillStar size={"20px"} color='#ffa41c' />
                    <AiFillStar size={"20px"} color='#ffa41c' />
                    <Text color='#ffa41c'>5/5</Text>
                    <Text color="#575757" >  (2 Reviews)</Text>
                </Box>

                <Box display={"flex"} gap="10px" mt="10px">
                    <Text color="#575757" fontSize={"12px"} >5 STAR</Text>
                    <Input bg={'#ffa41c'} w="30%" h="10px" mt="7px" />
                    <Text color="#575757" fontSize={"13px"}>100.0%</Text>
                </Box>

                <Box display={"flex"} gap="10px" mt="10px">
                    <Text color="#575757" fontSize={"12px"}>4 STAR</Text>
                    <Input w="30%" h="10px" mt="7px" bg={'RGBA(0, 0, 0, 0.16)'} />
                    <Text color="#575757" fontSize={"13px"}>0%</Text>
                </Box>

                <Box display={"flex"} gap="10px" mt="10px">
                    <Text color="#575757" fontSize={"12px"}>3 STAR</Text>
                    <Input w="30%" h="10px" mt="7px" bg={'RGBA(0, 0, 0, 0.16)'} />
                    <Text color="#575757" fontSize={"13px"}>0%</Text>
                </Box>

                <Box display={"flex"} gap="10px" mt="10px">
                    <Text color="#575757" fontSize={"12px"}>2 STAR</Text>
                    <Input bg={'RGBA(0, 0, 0, 0.16)'} w="30%" h="10px" mt="7px" />
                    <Text color="#575757" fontSize={"13px"}>0%</Text>
                </Box>

                <Box display={"flex"} gap="10px" mt="10px">
                    <Text color="#575757" fontSize={"12px"}>1 STAR</Text>
                    <Input w="30%" h="10px" mt="7px" bg={'RGBA(0, 0, 0, 0.16)'} />
                    <Text color="#575757" fontSize={"13px"}>0%</Text>
                </Box>

                <Box>
                    <Box display={"flex"} gap="10px" mt="50px">
                        <Text color={"80868b"} fontSize="16px">Sanskar Bhatwani</Text>
                        <Box mt="5px" display={"flex"} >
                            <FaExclamationCircle color="#008000" />
                            <Text color="#008000" as="small">Certified Buyer</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"}  >
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <Text as="strong">Quality good</Text>
                    </Box>
                    <Box display={"flex"} >
                        <Text color="#80868b">Mungeli</Text>
                        <Text color="#80868b">, 11/17/2022</Text>
                    </Box>
                    <Box textAlign={"left"}>
                        <Text fontSize={"14px"}>Good product very good tv happy with purchase</Text>
                    </Box>
                    <Box textAlign={"left"} mt="10px">
                        <Button colorScheme='blue' variant='outline' color={"blue"} fontSize="13px" rounded={"sm"}>Helpful</Button>
                    </Box>
                </Box>


                <Box >
                    <Box display={"flex"} gap="10px" mt="20px" >
                        <Text color={"80868b"} fontSize="16px">Lopamudra Swain</Text>
                        <Box mt="5px" display={"flex"} >
                            <FaExclamationCircle color="#008000" />
                            <Text color="#008000" as="small">Certified Buyer</Text>
                        </Box>
                    </Box>
                    <Box display={"flex"}  >
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <AiFillStar size={"20px"} color='#ffa41c' />
                        <Text as="strong">Quality good</Text>
                    </Box>
                    <Box display={"flex"} >
                        <Text color="#80868b">Sundergarh</Text>
                        <Text color="#80868b">, 10/21/2022</Text>
                    </Box>
                    <Box textAlign={"left"}>
                        <Text fontSize={"14px"}>Very good tv in affordable price</Text>
                    </Box>
                    <Box textAlign={"left"} mt="10px">
                        <Button colorScheme='blue' variant='outline' color={"blue"} fontSize="13px" rounded={"sm"}>Helpful</Button>
                    </Box>
                </Box>

            </Box>
            <Footer />
        </>
    )
}
