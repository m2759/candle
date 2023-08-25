import { ChainId, DAppProvider, useEtherBalance, useEthers } from '@usedapp/core'
import { useState, useEffect } from "react";
import Logo from '../Pictures/Logo.png'
import Wformula from '../Pictures/formula.png'
import { Button, 
  Box, 
  Text, 
  ChakraProvider, 
  useDisclosure, 
  Flex, 
  Center,
  Image, 
  HStack, 
  Container, 
  VStack,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Img,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
Tooltip} from "@chakra-ui/react";
import ConnectButton from '../components/ConnectButton';
import greencandle from "../Pictures/greencandle.png"
import redcandle from "../Pictures/redcandle.png"



export const Header = () =>{

    const { activateBrowserWallet, account, deactivate} = useEthers()
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [redcount, setredcount] = useState("")
    const [greencount, setgreencount] = useState("")
    const [candletimer, setcandletimer] = useState("")
    

    function redpercent() {
      return ((parseInt(redcount)/480)*100).toFixed(2)
    }

    function greenpercent() {
      return ((parseInt(greencount)/480)*100).toFixed(2)
    }

    var candletime = ((Date.now() - parseInt(candletimer))/3600000).toFixed(0)
    
    useEffect(() => {

        fetch("http://ggoodwork.com/api/candlecount")
        .then(response => response.json())

        .then(data => { 
            if(data != null){
              setredcount(data[0])
              setgreencount(data[1])
                
            }

        })
        .catch(err=> {
      })
    
    },[])


    
    useEffect(() => {
        
        fetch("http://ggoodwork.com/api/candletimer")
        .then(response => response.json())

        .then(data => { 
            if(data != null){
              setcandletimer(data)
                
            }
            
            
                 
        })
        .catch(err=> {

      })
      

        },[])


    
        
        

  
  return (
    <div>
      <div>
        <VStack spacing="0px">
          <Container maxW="10000px" bg="gray.900" draggable="false" userSelect="none">
            <Center>
            <Flex>

              <Box  height ="65px" width="950px"bg="gray.900" position="relative" right="30px">
                <HStack>
                  <Image src={Logo} right="70px" height="30px" position="relative" top="7px"draggable="false"userSelect="none"/>

                  <Box height ="55px" width="460px" bg="gray.900" position="relative" top="13px" left="15px">
                    <Center>
                      <HStack position="relative" left="10px">
                        {/* green candle count */}
                        <Box boxShadow="dark-lg" height="45px" width="100px" bg="gray.900" zIndex="1" >
                                <Flex >
                                    <Box boxShadow="dark-lg" height="45px" width="30px" bg="gray.900" zIndex="0">
                                        <Center>
                                            <Img src={greencandle} position="relative" top="3px" height="40px" />
                                        </Center>
                                    </Box>
                                    
                                    <Stat position="relative" top = "10px">
                                    
                                        <Center>
                                          <Tooltip label={"Updated " + candletime + " hours ago" } placement='left' >
                                            <StatNumber fontSize="17" position="relative" right ="px" top ="-7px">{greencount}</StatNumber>
                                          </Tooltip>
                                        </Center>

                                        <Center>
                                          <Tooltip label={"% of green candles"}>
                                            <StatHelpText fontSize="11" color="green.400" position="relative" right ="0px" top ="-8px">
                                              {greenpercent()}% 
                                            </StatHelpText>
                                          </Tooltip>
                                        </Center>
                                        
                                    </Stat>
                                </Flex>
                            </Box>
                        {/* red candle count */}
                        <Box boxShadow="dark-lg" height="45px" width="100px" bg="gray.900" zIndex="0">
                              <Flex >
                                  <Box boxShadow="dark-lg" height="45px" width="30px" bg="gray.900" zIndex="0">
                                      <Center>
                                          <Img src={redcandle} position="relative" top="3px" height="40px" />
                                      </Center>
                                  </Box>
                                  
                                  <Stat position="relative" top = "10px">
                                  
                                      <Center>
                                        <Tooltip label={"Updated " + candletime + " hours ago" } placement='right' >
                                          <StatNumber fontSize="17" position="relative" right ="px" top ="-7px">{redcount}</StatNumber>
                                        </Tooltip>
                                      </Center>

                                      <Center>
                                        <Tooltip label={"% of red candles"}>
                                          <StatHelpText fontSize="11" color="red.500" position="relative" right ="0px" top ="-8px">
                                            {redpercent()}% 
                                          </StatHelpText>
                                        </Tooltip>
                                      </Center>
                                      
                                      
                                  </Stat>

                              </Flex>
                          </Box>

                      </HStack>
                    
                    </Center>
                    <Button color="gray.100" bg="green.600" zIndex={1} position="relative" bottom="38px" left="725px" size='sm' 
                    _hover={{ bg: "green.500"}}
                    _active={{ bg: "green.500"}}

                      onClick={onOpen}
                      _focus={{
                        boxShadow:
                          '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
                      }}>
                        FAQ</Button>
                  </Box>
                  
                  <Box height ="45px" width="300px" bg="gray.900" position="relative" top="10px" left ="75px">
                    <Flex direction="column" align="flex-end">
                      <ConnectButton handleOpenModal={onOpen} />
                    </Flex>
                  </Box>
          
                </HStack>
              </Box>
          
            </Flex>
            </Center>
          
          </Container>
          
          <Container boxShadow="dark-lg" maxW="10000px" height="5px" bg="gray.700" zIndex="1"></Container>
          <Container maxW="10000px" height="15px" bg="gray.800" ></Container>

        </VStack>
      </div>

    

    <Modal closeOnOverlayClick={true} isOpen={isOpen} onClose={onClose} size = "3xl" >
        <ModalOverlay/>
        <ModalContent bg="gray.800" height='835px' opacity="2" >
          <ModalHeader>
            <Text fontSize="24">Frequently Asked Questions</Text></ModalHeader>
          <ModalCloseButton 
            _focus={{
              boxShadow:
                '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
            }} />
          <ModalBody pb={6} >

            <Text fontSize="18" fontWeight="bold">
              How does it work? 
            </Text>

            <Text>
            <br/>
            &nbsp;&nbsp;- This DApp is a game where you can earn rewards by correctly predicting the color of future candles <br/>
            &nbsp;&nbsp;- The color of future candles are determined by prices from a price oracle <br/>
            &nbsp;&nbsp;- Every 3 minutes a new price is confirmed by the price oracle <br/>
            <br/>
            <br/>
            <Text fontWeight="bold">Within that 3 minute window you can :</Text>

            <br/>
            - <Text as='b' color="red.500">Enter Short</Text> if you believe the next candle will be red<br/>
            &nbsp;&nbsp;&nbsp;<Text as='u' >{"Red candles = current epoch price < previous epoch price "}</Text><br/>
            <br/>
            - <Text as='b' color="green.500">Enter Long</Text> if you believe the next candle will be Green<br/>
            &nbsp;&nbsp;&nbsp;<Text as='u' >{"green candles = current epoch price > previous epoch price "}</Text><br/>
            <br/>
            
            &nbsp;&nbsp;The previous 9 epoch prices can be seen in the chart below the main UI<br/>
            <br/>

            <Text fontWeight="bold">Is the chart data accurate?</Text>
            <br/>
            -  Yes, the chart is plotted with data from price oracles, the same data is used for winnings calculation.<br/>
            
            -  Occasionally the chart may fail to display a candle.<br/>
            <br/>
            <br/>

            </Text>
            <Text fontSize="18" fontWeight="bold">
            How are winnings calculated?
            <br/>
            <br/>
            </Text>
             - If your prediction is <Text as='u'><Text as='b' >Correct</Text></Text>, your winnings will be automatically sent to your wallet<br/>
            <br/>
            <Img src={Wformula} position = "relative" left="5px"></Img>
            
            
          </ModalBody>


        </ModalContent>
    </Modal>
            
    </div>
    )
}

