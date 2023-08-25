import React, { useEffect, useState,} from 'react'
import {useEthers, transactionErrored, useEtherBalance, useNotifications,} from '@usedapp/core'
import { utils, } from 'ethers'
import { formatEther, parseEther } from "@ethersproject/units"
import { useGetEpochPrice, useTotalValue, useGetLatestPrice, useEnterGameLong,useEnterGameShort, useTotalUp, useTotalDown, useGetCurrentPrice, useGetCurrentEpochId, useEndGame, } from "../hooks";
import greenTrend from "../Pictures/green_trend_up.png"
import redTrend from "../Pictures/red_trend_down.png"
import { Box, Center, Button, Input, Stack, Text, HStack, Flex, Tooltip,NumberInput,NumberInputField,Img,VStack, Progress, useToast, Spinner} from "@chakra-ui/react"
import socketIOClient from "socket.io-client";
import CountUp from 'react-countup';
import wnat from '../Pictures/wnat.png'

declare let window: any;
const ENDPOINT = "http://ggoodwork.com/timer/";



export const Body = () =>{

    const [response, setResponse] =useState("")

    //code for Timer
    useEffect(() => {
        const socket = socketIOClient('http://ggoodwork.com',{path:"/timer/"});
        socket.on("FromAPI2", data => {
          setResponse(data);
        });
      }, []);

    const [counter, setCounter] = useState(60000000000000);
    useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 500);
    }, [counter]);

    let minutes = Math.floor((parseInt(response)) / 60 ).toFixed(0).padStart(2, "0");
    let seconds = Math.round((parseInt(response)) % 60).toFixed(0).padStart(2, "0");


    function TimerDisplay() {

        if (response?.includes("-"))
            {
            return ("00:00")
        }
        if (minutes === "NaN" && seconds === "NaN" ){
            return ("00:00")
        }
        else {
            return (minutes+ ":" + seconds)
        }
    }


    function InputInterface() {
        //conditional rendering of input interface. changes when timer is under 20 seconds.
        
        if(parseInt(response) < 20){
        //calculating... screen
            
                return(
                    <Box height="145px" width="330px" bg="gray.900"  zIndex="0" >
                   
                    <Center>
                        <VStack>
                        <Text fontWeight="semibold" fontSize="20px" position="relative" top="15px" left="8px" zIndex="2">
                            Calculating...
                            
                        </Text>

                        <Spinner
                            thickness='4px'
                            speed='0.65s'
                            emptyColor='gray.200'
                            color='green.500'
                            size='xl'
                            position="relative" 
                            top="25px"
                            />
                        </VStack>
                    </Center>
                   
                </Box>
                    ) 

        }
        
        return(
        //standard input interface 
            <Box height="145px" width="330px" bg="gray.900"  zIndex="0" >
                            <Center>
                                {/* Amount input */}
                                <NumberInput value = {amount.toString()} isDisabled = {!isconnected} height="" width="316px" focusBorderColor="gray.800" >  
                                <NumberInputField                             
                                    onChange = {handleInputChange} 
                                    placeholder= {"Enter Amount (1)"}
                                    bg="gray.700"
                                    border="gray.400"
                                    borderRadius="md"
                                />            
                                </NumberInput>
                            </Center>

                        <Box height="40px" width="330px" bg="gray.900" position="relative" top="" zIndex="3">
                            <Center>
                                <HStack spacing={1.5} position="relative" top="6px" textColor="gray.400" borderRadius="md" >
                                    {/* percentage buttons */}
                               
                                    <Button 
                                            isDisabled = {!isconnected}
                                            height="20px"
                                            width="58px" 
                                            backgroundColor="gray.700"
                                            onClick={()=>setAmount((etherBalanceNumber * 0.1).toFixed(2))}
                                            
                                            _hover={{ bg: "gray.700"}}
                                            _active={{
                                                bg: "gray.600",
                                                
                                                borderColor: "#bec3c9",
                                            }}
                                            _focus={{
                                                boxShadow:
                                                "",
                                            }}>
                                            
                                            <Text fontSize="12">
                                            10%
                                            </Text>
                                    </Button>
                              
                                    <Button 
                                            isDisabled = {!isconnected}
                                            height="20px" 
                                            width="58px"
                                            backgroundColor="gray.700"
                                            onClick={()=>setAmount((etherBalanceNumber * 0.25).toFixed(2))}

                                            _hover={{ bg: "gray.700"}}
                                            _active={{
                                                bg: "gray.600",
                                                
                                                borderColor: "#bec3c9",
                                            }}
                                            _focus={{
                                                boxShadow:
                                                "",
                                            }}
                                            >
                                        <Text fontSize="12">
                                        25%
                                        </Text>
                                        
                                    </Button>
                           
                                    <Button 
                                            isDisabled = {!isconnected}
                                            height="20px" 
                                            width="58px"
                                            backgroundColor="gray.700"
                                            onClick={()=>setAmount((etherBalanceNumber * 0.5).toFixed(2))}

                                            _hover={{ bg: "gray.700"}}
                                            _active={{
                                                bg: "gray.600",
                                                
                                                borderColor: "#bec3c9",
                                            }}
                                            _focus={{
                                                boxShadow:
                                                "",
                                            }}
                                        >
                                            <Text fontSize="12">
                                        50%
                                        </Text>
                                    </Button>
                       
                                    <Button 
                                            isDisabled = {!isconnected}
                                            height="20px" 
                                            width="58px"
                                            backgroundColor="gray.700"
                                            onClick={()=>setAmount((etherBalanceNumber * 0.75).toFixed(2))}

                                            _hover={{ bg: "gray.700"}}
                                            _active={{
                                                bg: "gray.600",
                                                
                                                borderColor: "#bec3c9",
                                            }}
                                            _focus={{
                                                boxShadow:
                                                "",
                                            }}
                                        >
                                            <Text fontSize="12">
                                        75%
                                        </Text>
                                    </Button>
                          
                                    <Button 
                                            isDisabled = {!isconnected}
                                            height="20px" 
                                            width="58px"

                                            backgroundColor="gray.700"
                                            onClick={()=>setAmount((etherBalanceNumber * 0.98).toFixed(2))}

                                            _hover={{ bg: "gray.700"}}
                                            _active={{
                                                bg: "gray.600",
                                                
                                                borderColor: "#bec3c9",
                                            }}
                                            _focus={{
                                                boxShadow:"",
                                            }}
                                        >
                                            <Text fontSize="12">
                                        100%
                                        </Text>
                                    </Button>
                                </HStack>
                            </Center>
                        </Box>

                        <Box position="relative" bottom="7px" left="22px" zIndex="3">
                            <Flex>
                            
                                <Img src={wnat} boxSize="25px" position="relative" bottom="2px" right="5px"/>
                                    <Text fontSize="14" color="gray.200">
                                        Balance :
                                    </Text>

                                    <Text fontSize="12" position="relative" top="3px" color="gray.200">
                                                
                                        &nbsp; {etherBalance && parseFloat(formatEther(etherBalance))}
                                    </Text>
                                

                                    <Text fontSize="11" position="relative" top="5px" color="gray.200">
                                        &nbsp;&nbsp; WNat
                                    </Text>

                            </Flex>
                        </Box>
                        
                    

                        
                        {/* Green/Red BUTTONS*/}
                        <Center>
                                    
                            
                            <Box height="30px" width="316px" bg="gray.900" zIndex="3">
                                <Center>

                                    <Button onClick={handleEnterGameLong} 
                                        isDisabled = {!inputcheck || !isconnected || !amountCheck}
                                        bg ="green.500" 
                                        width="170px" 
                                        height="30px"
                                        position="relative"                     
                                        right=""
                                        _hover={{ bg: "green.600"}}
                                                _active={{
                                                    bg: "green.600",
                                                    
                                                }}
                                                _focus={{
                                                    boxShadow:
                                                    "",
                                                }}> 

                                        <Text color="gray.200">
                                        &nbsp;&nbsp; Long &nbsp;&nbsp;
                                        </Text>
                                    </Button> 

                                    &nbsp;&nbsp; 


                                    <Button onClick={handleEnterGameShort}
                                        isDisabled = {!inputcheck || !isconnected || !amountCheck}
                                        bg="red.600" 
                                        width="170px"
                                        height="30px" 
                                        top=""
                                        _hover={{ bg: "red.700"}}
                                                _active={{
                                                    bg: "red.700",
                                                    
                                                }}
                                                _focus={{
                                                    boxShadow:
                                                    "",
                                                }}>

                                        <Text color="gray.200">
                                            Short
                                        </Text>
                                    </Button>
                                </Center>
                    </Box>
                </Center>
            </Box >
        )
        
}



    // const [amount, setAmount] = useState<number | string | Array<number | string>>("")
    const [amount, setAmount] = useState("")
    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newAmount = (event.target.value) === ""?"" : event.target.value
        setAmount((newAmount))
      
    }

    
   //blockchain interactions
    const XGetCurrentPrice = useGetCurrentPrice()
    const XGetCurrentEpochId = useGetCurrentEpochId()
    const XTotalUp = useTotalUp()
    const XTotalDown = useTotalDown()
    const XTotalValue = useTotalValue()

    function GetCurrentPrice(){
        if (XGetCurrentPrice){
            return (parseFloat(formatEther(XGetCurrentPrice[0]._hex))*10000000000000)
        }}
    function GetCurrentEpochId(){
        if (XGetCurrentEpochId){
            return (parseFloat(formatEther(XGetCurrentEpochId[0]._hex))*1000000000000000000)
        }}
    function TotalUp(){
        if (XTotalUp){
            return (parseFloat(formatEther(XTotalUp[0]._hex)))
        }}
    function TotalDown(){
        if (XTotalDown){
            return (parseFloat(formatEther(XTotalDown[0]._hex)))
        }}
    function TotalValue(){
        if (XTotalValue){
            return (parseFloat(formatEther(XTotalValue[0]._hex)))
        }}
    

    

    
    const EID = GetCurrentEpochId()?.toFixed(0)
    const GCP = GetCurrentPrice()
    const id2 = 'win-toast'
    const id = 'error-toast'

    const TotalLong = TotalUp()
    const TotalShort = TotalDown()
    const TotalValuee = TotalValue()

    //multiplier return calculator.
        function LongMultiplier() {
            if (TotalShort !== null && TotalShort !== 0 && TotalLong !== null && TotalLong !== 0){
                return ((TotalValuee/TotalLong))
            }
            else {
                return 0
            }
        }
        function ShortMultiplier() {
            if (TotalLong !== null && TotalLong !== 0 && TotalShort !== null && TotalShort !== 0){
                return ((TotalValuee/TotalShort))
            }
            else {
                return 0
            }
        }

//notification when user wins
    useEffect(() => {
        setTimeout(()=> {
        fetch("http://localhost:8080/win")
        .then(response => response.json())
        .then(data => { 
            if(data !== []){
                for (let i = 0; i < data.length; i++) {
            
                    if (data[i].Address == account){

                            toast({
                                id: id2,
                                title: 'Won: ' + (data[i].Win).toFixed(4) + ' SGB',
                                description: "",
                                status: 'success',
                                duration: 3000,
                                isClosable: true,
                                position: 'top',
                            })
                            break

                    }

            }}
        })
        .catch(err=> {
        })
        }
        ,10000)
        },[GCP]) 


    function EpochCount() {
        if(EID != null){
            return(EID)
        }
        else{
            return("000000")
        }
    }



    const {account} = useEthers()
    const etherBalance = useEtherBalance(account)
    const etherBalanceNumber = (Number(etherBalance)/1000000000000000000)


    const {state: enterGameLongState, send: enterGameLong} = useEnterGameLong();
    const {state: enterGameShortState, send: enterGameShort} = useEnterGameShort();

    const {notifications} = useNotifications()



    //process logic
    function progressLogic() {         
        //progress circle 
            return ((parseInt(response)/ 180)*100)
    }


    const toast = useToast();
    const statuses = ['success', 'error', 'warning', 'info']

        

    useEffect(() => {
        //error notification
        if(enterGameLongState.errorMessage  == "execution reverted: already entered this round" || enterGameShortState.errorMessage  == "execution reverted: already entered this round"){
            if (!toast.isActive(id)) {
                toast({
                    id,
                    title: 'already entered this round',
                    description: "",
                    status: 'error',
                    duration: 3000,
                    isClosable: true,
                    position: 'top',
                    
                    
                },)
            }
        }

        enterGameLongState.errorMessage = "blank"
        enterGameShortState.errorMessage = "blank"


    
    },[enterGameLongState,enterGameShortState])


    function handleEnterGameShort() {
        //blockchain interaction enters short position
        enterGameShort(0,{value:utils.parseEther(amount.toString())})
    }

    function handleEnterGameLong() {
        //blockchain interaction enters long position
        enterGameLong(1,{value:utils.parseEther(amount.toString())})
    }

    
    

    //calling smart contract functions with ethers js

    // async function XEnterGame0() {
        
    //     const overrides = {
    //         value: utils.parseEther(amount.toString())
            
    //     }

        
    //     if (typeof window.ethereum !== 'undefined') {
    //     await requestAccount()
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const signer = provider.getSigner();
    //     const contract = new ethers.Contract(contractAddress, PredictionV1, signer);
    //     const transation = await contract.EnterGame(0, overrides);
    //     await transation.wait();
        

    //     }
    // }
 
    // async function XEnterGame1() {
 
    //     const overrides = {
    //         value: utils.parseEther(amount.toString())
            
    //     }
    //     if (typeof window.ethereum !== 'undefined') {
    //     await requestAccount()
    //     const provider = new ethers.providers.Web3Provider(window.ethereum);
    //     const signer = provider.getSigner();
    //     const contract = new ethers.Contract(contractAddress, PredictionV1, signer);
    //     const transation = await contract.EnterGame(1, overrides);
    //     await transation.wait();

    //     }
    // }



    const [inputcheck, setinputcheck] = useState(false)
    const [isconnected, setisconnected] = useState(false)
    const [amountCheck, setamountCheck] = useState(false)
// console.log(parseInt(formatEther(etherBalance)))


    useEffect(() => {
        //checks conditions for input
        //disables input interface if conditions not met.

        //account needs to be connected
        if(etherBalance){
            if (parseInt(formatEther(etherBalance))  > 0){
            setisconnected(true)
            } 
        }



        if (etherBalance == null){
            setisconnected(false)
        }

       // amount should not include random symbols
        if (amount.toString().includes("-")){
            setinputcheck(false)

        }
        else{
            setinputcheck(true)
        }
        // amount should not include -
        if ( amount.toString().includes("-") ) {
            setamountCheck(false)
            
        }
        else{
            setamountCheck(true)
        }
        // amount should not have more than 1 
        if (((amount.toString().match(/\./g) || []).length) > 1 ){
            setamountCheck(false)
        }
        else{
            setamountCheck(true)
        }
        //amount should not only be a period
        if (amount.toString() == "."){
            setamountCheck(false)

        }
        //amount should be higher than 1
        if (parseFloat(amount) < 1 ){
            setamountCheck(false)

        }
        //amount should be less than 8 digits
        if (amount.toString().length > 8 ){
            setamountCheck(false)

        }
        if(!(/^[0-9.]*$/.test(amount.toString())) == true){
            setinputcheck(false)
        }
    

        if (amount == ""){
            //if input is blank
            setinputcheck(false)
        }

        }, [etherBalance,amount]);







    return (
        <div>             
        <Center>
            <HStack spacing="5">
            {/* middle box */}
                <Box height="283px" width="350px" bg="gray.800" zIndex="0">
                    <Center>
                        <HStack spacing="10px">

                            <Box boxShadow="dark-lg" height="283px" width="350px"  border="1px" borderColor="gray.700" bg="gray.900" borderRadius="md"  >
                                <VStack spacing="5px">
                                    {/* spacer*/}
                                
                                    {/* spacer*/}
                                    <Box height="8px" width="315px" bg="gray.900">
                                    </Box>
                                     {/* top indicators*/}
                                    <Box height="30px" width="330px" bg="gray.900">
                                        <Center>
                                        <VStack spacing="1">

                                            <HStack spacing="150">
                                                <Box bg="gray.900" height="25px" width="75px" >
                                                    <Center>
                                    
                                                        <Text fontSize="16" fontWeight="semibold" color="gray.300">
                                                            &nbsp;    #{EpochCount()}
                                                        </Text>
                                    
                                                    </Center>
                                                </Box>

                                                <Box bg="gray.900" height="25px" width="110px">
                                                <Box bg="gray.900" height="25px" width="30px">
                                                    <Text fontSize="18" fontWeight="semibold" color="gray.900" position="relative" left="25px">
                                                    ⏰
                                                    </Text>
                                                </Box>
                                                <Center>
                                                    <Tooltip label="Time left in the round" placement="top">
                                                    
                                                    <Text fontSize="18" fontWeight="semibold" color="gray.300" position="relative" bottom="24px" left="20px">
                                                    {TimerDisplay()}
                                                    </Text>
                                                    </Tooltip>
                                                </Center>
                                                </Box>
                                            </HStack>
                                        </VStack>
                                        </Center>
                                    </Box >
                            {/*spacer*/}
                            <Box height="9px" width="310px" bg="gray.900">
                                <Progress hasStripe value={100-progressLogic()} size='sm' colorScheme='blue' background="gray.700" borderRadius="sm"/>
                            </Box>
                            {/* green red coins*/}
                        <Box height="60px" width="330px" bg="gray.900">
                            <Center>
                                <HStack spacing="17">
                                    <Box height="55px" width="70px" bg="gray.900"  top="155px" zIndex="">
                                        <Center>
                                            <VStack>
                                                <Tooltip label= {TotalLong + " SGB in Long pool" } placement='top' >
                                                    <Img src={greenTrend} height="28px"  top="5px " position="relative" 
                                                    draggable="false"
                                                    userSelect="none"
                                                    />
                                                </Tooltip>
                                                <Flex>
                                                    <Text fontWeight="semibold" fontSize="medium" color="gray.500" left="5px" position="relative">
                                                        <CountUp preserveValue={true} end={LongMultiplier()} duration= {0.3} decimals={2}/> X
                                                    </Text>
                                                </Flex>
                                            </VStack>
                                        </Center>
                                    </Box>

                                    <Box height="55px" width="139px" bg="gray.900"  top="155px" zIndex="">
                                        <Center>
                                            <Text fontWeight="semibold" fontSize="19" top="2px" position="relative">
                                            Prize Pool
                                            <br/>
                                                <Center>
                                                    <CountUp preserveValue={true} end={TotalValue()} duration= {0.3} decimals={2} /> 

                                                </Center>
                                            </Text>
                                        </Center>
                                    </Box>
                                    <Box height="55px" width="70px" bg="gray.900"  top="155px" zIndex="">
                                        <Center>
                                            <VStack>
                                                <Tooltip label={TotalShort + " SGB in Short pool"} placement='top'>
                                                    <Img src={redTrend} height="28px"  top="7px " position="relative"
                                                    draggable="false"
                                                    userSelect="none"/> 
                                                </Tooltip>
                                                <Flex>
                                                    <Text fontWeight="semibold" fontSize="medium" color="gray.500" left="6px" position="relative">
                                                    <CountUp preserveValue={true} end={ShortMultiplier()} duration= {0.3} decimals={2}/> X
                                                    </Text>
                                                </Flex>
                                            </VStack>
                                        </Center>
                                    </Box> 
                                </HStack>  
                            </Center>                  

                        </Box>
                        {InputInterface()}

                
                                </VStack>
                            </Box>

              
                        </HStack>
                    </Center>
                </Box>
            </HStack>
        </Center>

           
        <br/>
        </div>
            

    )
    }


