import { useState, useEffect, Component } from "react";
import { Button, Center } from "@chakra-ui/react";
import { MetaMaskInpageProvider } from '@metamask/providers';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Text,
  Box,
  Link,
  Checkbox,
  Img
} from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useEthers} from '@usedapp/core'
import MetaMaskOnboarding from '@metamask/onboarding'


const ethereum = window.ethereum as MetaMaskInpageProvider;
declare var window: any

export const WelcomeScreen = () =>{
  
  const { activateBrowserWallet, account, chainId, error, active, deactivate, switchNetwork } = useEthers();
  const { isOpen:is1Open, onOpen:on1Open, onClose:on1Close } = useDisclosure()
  const onboarding = new MetaMaskOnboarding();

//automatically switch networks
  function networkCheck() {
    if (chainId != 19){
      switchNetwork(19)

    }
    else{

    }
  }
  
  useEffect(() => {
    networkCheck()
  },[account])

  async function handleSwitchNetworks() {
    try {
      await ethereum.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: '0x13' }],
      });

    } catch (switchError) {
      // This error code indicates that the chain has not been added to MetaMask.
      if (switchError.code === 4902) {
        try {
          await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [
              {
                chainId: '0x13',
                chainName: 'Songbird Canary-Network',
                nativeCurrency: {
                  name: "Songbird",
                  symbol: "SGB",
                  decimals: 18
                  },
                
                rpcUrls: ['https://songbird-api.flare.network/ext/C/rpc'] /* ... */,
                blockExplorerUrls: ['https://songbird-explorer.flare.network'],
              },
            ],
          });
        } catch (addError) {

        }
      }

    }
  }


 //runs once per load if user is not connected
  useEffect(() => {
      if( account == null){
        on1Open()
      }
  },[])

    
  return (
    <div>
      <Modal  closeOnOverlayClick={false} isOpen={is1Open} onClose={on1Close} isCentered size = "sm">
        <ModalOverlay />
          <ModalContent bg="gray.800" height='380px' >
            <ModalHeader>
              <ModalCloseButton
                            _focus={{
                              boxShadow:
                                '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
                            }}
              />

                <Center>
                  <Text fontSize="23" position="relative" right="px" top="5px">🕯️ Welcome  🕯️</Text>
                </Center>
            </ModalHeader>
            
            <ModalBody pb={0}>
              <Center>
                <Box height="40px" width="270px" bg = "gray.800" >
                  <Center>
                    <Text fontWeight="semibold" fontSize="18" >
                      {/*  */}
                    </Text>
                  </Center>
                  

                  <Center>
                    <Box height="42px" width="230px" bg = "gray.800" >
                      <Text fontWeight="thin" fontSize="14" position="relative" top="0px">
                        metamask is required to use this Dapp
                      </Text>
                    </Box>
                  </Center>

                </Box>
              </Center>


              <Center>

                <Button onClick={on1Close}
                        colorScheme='green' 
                        mr={0} 
                        position="relative" top="0px"
                        _focus={{
                          boxShadow:
                            '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                        >
                      Enter the Dapp
                    </Button>
              </Center>
              <br/>

              <Center>
                <Box height="70px" width="300px" bg = "gray.800">
                  <Center>
                    <Button colorScheme='orange' mr={0} 
                      onClick={()=>{
                        onboarding.startOnboarding()
                      }}
                      position="relative" top="0px"
                      _focus={{
                        boxShadow:
                          '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
                      }}
                    >
                      Install MetaMask
                    </Button>
                  </Center>
                  <br/>

                  <Center>
                  <Button 
                    colorScheme='blue' 
                    mr={0} 
                    onClick={handleSwitchNetworks} 
                    _focus={{
                      boxShadow:
                        '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
                    }}
                    >
                      Add Current network
                  </Button>
                  </Center>

                  <br/>

                  <Center>
                    <Link href='https://docs.flare.network/user/wallets/how-to-access-flare-network-with-metamask/' isExternal
                        _focus={{
                          boxShadow:
                            '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
                        }}
                        >
                        Manually add network <ExternalLinkIcon mx='2px'/>
                    </Link>
                  </Center>

                </Box> 
              </Center>
        
            </ModalBody>

          </ModalContent>
      </Modal>
    </div>
    
  );

}