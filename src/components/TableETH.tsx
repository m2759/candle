import React, { ReactElement, useEffect, useState } from 'react'
import { Box, Center, Button, Input, Stack, Text, HStack, Flex, VStack,
    Img,CircularProgress,} from "@chakra-ui/react"
import { useTotalUp,
     useTotalDown,
      useGetCurrentEpochId,
       useGetCurrentPrice,
       useGetEpochPrice0,
        useGetEpochPrice,
         useGetEpochPrice2,
         useGetEpochPrice3,
         useGetEpochPrice4,
         useGetEpochPrice5,
         useGetEpochPrice6,
         useGetEpochPrice7,
         useGetEpochPrice8,
         useGetEpochPrice9,
         useGetEpochPrice10,
         useGetEpochPriceETH,
         useGetCurrentPriceETH
         } from "../hooks";
import { formatEther } from "@ethersproject/units"
import ethlogo from "../Pictures/ethlogo.png"

import CountUp from 'react-countup';



declare let window: any;


export const TableETH = () =>{
    //server test  

    const [initialState, setinitialState] =useState([])


    //gameEnd Logic
    const [count, setCount] = useState(0);
    useEffect(() => {    
        setCount(count + 1)
    },[])
    
    



    //server test  
    const ENDPOINT = "http://ggoodwork.com/api"

    const XGetCurrentEpochId = useGetCurrentEpochId()
    function GetCurrentEpochId(){
        if (XGetCurrentEpochId){
            return (parseFloat(formatEther(XGetCurrentEpochId[0]._hex))*1000000000000000000)
        }

        }

    const XGetCurrentPrice = useGetCurrentPriceETH()


    const Getethprice = useGetEpochPriceETH(0)




    function GetCurrentPrice(){
        if (XGetCurrentPrice){
            return (parseFloat(formatEther(XGetCurrentPrice[0]._hex))*10000000000000)
        }}
    

    const GetEpochPrice = useGetEpochPriceETH(1)
    const XGetEpochPrice0 = useGetEpochPriceETH(0)
    const XGetEpochPrice2 = useGetEpochPriceETH(2)
    const XGetEpochPrice3 = useGetEpochPriceETH(3)
    const XGetEpochPrice4 = useGetEpochPriceETH(4)
    const XGetEpochPrice5 = useGetEpochPriceETH(5)
    const XGetEpochPrice6 = useGetEpochPriceETH(6)
    const XGetEpochPrice7 = useGetEpochPriceETH(7)
    const XGetEpochPrice8 = useGetEpochPriceETH(8)
    const XGetEpochPrice9 = useGetEpochPriceETH(9)
    const XGetEpochPrice10 = useGetEpochPriceETH(10)

    function GetEpochPrice0(){
        if (XGetEpochPrice0){
            return (parseFloat(formatEther(XGetEpochPrice0[0]._hex))*10000000000000)
        }}
    function GetEpochPrice2(){
        if (XGetEpochPrice2){
            return (parseFloat(formatEther(XGetEpochPrice2[0]._hex))*10000000000000)
        }}
    function GetEpochPrice3(){
        if (XGetEpochPrice3){
            return (parseFloat(formatEther(XGetEpochPrice3[0]._hex))*10000000000000)
        }}
    function GetEpochPrice4(){
        if (XGetEpochPrice4){
            return (parseFloat(formatEther(XGetEpochPrice4[0]._hex))*10000000000000)
        }}
    function GetEpochPrice5(){
        if (XGetEpochPrice5){
            return (parseFloat(formatEther(XGetEpochPrice5[0]._hex))*10000000000000)
        }}
    function GetEpochPrice6(){
        if (XGetEpochPrice6){
            return (parseFloat(formatEther(XGetEpochPrice6[0]._hex))*10000000000000)
        }}
    function GetEpochPrice7(){
        if (XGetEpochPrice7){
            return (parseFloat(formatEther(XGetEpochPrice7[0]._hex))*10000000000000)
        }}
    function GetEpochPrice8(){  
        if (XGetEpochPrice8){
            return (parseFloat(formatEther(XGetEpochPrice8[0]._hex))*10000000000000)
        }}  
    function GetEpochPrice9(){  
        if (XGetEpochPrice9){
            return (parseFloat(formatEther(XGetEpochPrice9[0]._hex))*10000000000000)
        }}  
    function GetEpochPrice10(){  
        if (XGetEpochPrice9){
            return (parseFloat(formatEther(XGetEpochPrice10[0]._hex))*10000000000000)
        }}  
    
        const P = GetCurrentPrice()

        const XTotalUp = useTotalUp()
    
        function TotalUp(){
            if (XTotalUp){
                return (parseFloat(formatEther(XTotalUp[0]._hex)))
            }}





    function Row1Logic() {
        if ((GetEpochPrice2())  == (GetCurrentPrice())  ){
         return (<Text position="relative" right="30px"><Center>
               
                                        
                                    
             <CircularProgress isIndeterminate color='green.300' size="21px"/>
             
             
         </Center>

         </Text>)   
        }
        else if((GetEpochPrice2() )  != (GetCurrentPrice())  ){
            return (GetCurrentPrice().toFixed(2) +"")
        }
    }


    function colorOfText1() {
        if ((GetCurrentPrice()) > (GetEpochPrice2()))
            {
            return ("green.400")
            }
        return ("red.600")
        }
        function colorOfText2() {
            if ((GetEpochPrice2()) > (GetEpochPrice3()))
                {
                return ("green.400")
                }
            return ("red.600")
            }
            function colorOfText3() {
                if ((GetEpochPrice3()) > (GetEpochPrice4()))
                    {
                    return ("green.400")
                    }
                return ("red.600")
                }
                function colorOfText4() {
                    if ((GetEpochPrice4()) > (GetEpochPrice5()))
                        {
                        return ("green.400")
                        }
                    return ("red.600")
                    }
                    function colorOfText5() {
                        if ((GetEpochPrice5()) > (GetEpochPrice6()))
                            {
                            return ("green.400")
                            }
                        return ("red.600")
                        }
                        function colorOfText6() {
                            if ((GetEpochPrice6()) > (GetEpochPrice7()))
                                {
                                return ("green.400")
                                }
                            return ("red.600")
                            }
                            function colorOfText7() {
                                if ((GetEpochPrice7()) > (GetEpochPrice8()))
                                    {
                                    return ("green.400")
                                    }
                                return ("red.600")
                                }    
                                function colorOfText8() {
                                    if ((GetEpochPrice8()) > (GetEpochPrice9()))
                                        {
                                        return ("green.400")
                                        }
                                    return ("red.600")
                                    }    
                                    function colorOfText9() {
                                        if ((GetEpochPrice9()) > (GetEpochPrice10()))
                                            {
                                            return ("green.400")
                                            }
                                        return ("red.600")
                                        }    

    function colorOfTable1() {
        if ((GetCurrentPrice()) > (GetEpochPrice2()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable2() {
        if ((GetEpochPrice2()) > (GetEpochPrice3()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable3() {
        if ((GetEpochPrice3()) > (GetEpochPrice4()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable4() {
        if ((GetEpochPrice4()) > (GetEpochPrice5()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable5() {
        if ((GetEpochPrice5()) > (GetEpochPrice6()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable6() {
        if ((GetEpochPrice6()) > (GetEpochPrice7()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable7() {
        if ((GetEpochPrice7()) > (GetEpochPrice8()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable8() {
        if ((GetEpochPrice8()) > (GetEpochPrice9()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }
    function colorOfTable9() {
        if ((GetEpochPrice9()) > (GetEpochPrice10()))
            {
            return ("gray.700")
        }
        return ("gray.900")
    }

    const EID =(GetCurrentEpochId())

    const row1Epoch = (GetCurrentEpochId() -1).toFixed(0) 
    const row2Epoch = (GetCurrentEpochId() -2).toFixed(0) 
    const row3Epoch = (GetCurrentEpochId() -3).toFixed(0) 
    const row4Epoch = (GetCurrentEpochId() -4).toFixed(0) 
    const row5Epoch = (GetCurrentEpochId() -5).toFixed(0) 
    const row6Epoch = (GetCurrentEpochId() -6).toFixed(0) 
    const row7Epoch = (GetCurrentEpochId() -7).toFixed(0) 
    const row8Epoch = (GetCurrentEpochId() -8).toFixed(0) 
    const row9Epoch = (GetCurrentEpochId() -9).toFixed(0) 


    //fetch prize data from api
    const [PrizeDataRow1, setPrizeDataRow1] = useState(null)
    const [PrizeDataRow2, setPrizeDataRow2] = useState(null)
    const [PrizeDataRow3, setPrizeDataRow3] = useState(null)
    const [PrizeDataRow4, setPrizeDataRow4] = useState(null)
    const [PrizeDataRow5, setPrizeDataRow5] = useState(null)
    const [PrizeDataRow6, setPrizeDataRow6] = useState(null)
    const [PrizeDataRow7, setPrizeDataRow7] = useState(null)
    const [PrizeDataRow8, setPrizeDataRow8] = useState(null)
    const [PrizeDataRow9, setPrizeDataRow9] = useState(null)

    var dataobj = [
        //#2
        {epoch: (GetCurrentEpochId()-2).toFixed(0), price: GetEpochPrice2(), prize: PrizeDataRow2, tablecolor: colorOfTable2(), textcolor: colorOfText2()},
        {epoch: (GetCurrentEpochId()-3).toFixed(0), price: GetEpochPrice3(), prize: PrizeDataRow3, tablecolor: colorOfTable3(), textcolor: colorOfText3()},
        {epoch: (GetCurrentEpochId()-4).toFixed(0), price: GetEpochPrice4(), prize: PrizeDataRow4, tablecolor: colorOfTable4(), textcolor: colorOfText4()},
        {epoch: (GetCurrentEpochId()-5).toFixed(0), price: GetEpochPrice5(), prize: PrizeDataRow5, tablecolor: colorOfTable5(), textcolor: colorOfText5()},
        {epoch: (GetCurrentEpochId()-6).toFixed(0), price: GetEpochPrice6(), prize: PrizeDataRow6, tablecolor: colorOfTable6(), textcolor: colorOfText6()},
        {epoch: (GetCurrentEpochId()-7).toFixed(0), price: GetEpochPrice7(), prize: PrizeDataRow7, tablecolor: colorOfTable7(), textcolor: colorOfText7()},
        {epoch: (GetCurrentEpochId()-8).toFixed(0), price: GetEpochPrice8(), prize: PrizeDataRow8, tablecolor: colorOfTable8(), textcolor: colorOfText8()},
        {epoch: (GetCurrentEpochId()-9).toFixed(0), price: GetEpochPrice9(), prize: PrizeDataRow9, tablecolor: colorOfTable9(), textcolor: colorOfText9()},

    ]
    
    function renderRow(){
        if(dataobj){
            return dataobj?.map(data => <Box bg = {data.tablecolor} 
            height="30px"
            width="355px"
            borderRadius="md"
            opacity="0.7"
            >
                <HStack position="relative" top="7px" left="20px" spacing="42">
                    <Box height="30px" width="80px" position="relative" bottom="3px">
                        <Text fontWeight="semibold" fontSize={14}>
                        {data.epoch}
                            
                        </Text>
                    </Box>
                    <Box height="30px" width="90px" position="relative" left="18px" bottom="3px">
                        <Text fontWeight="bold" color={data.textcolor} fontSize={14}>
                        <CountUp preserveValue={true} end={data.price} duration= {0.3} decimals={2}/>
       
                        </Text>
                    </Box>
                    
                    <Box height="30px" width="80px" position="relative" bottom="3px">
                        <Center>
                        
                            <Text fontWeight="semibold" fontSize={14}>
                            <CountUp preserveValue={true} end={data.prize} duration= {0.3} decimals={2}/>
                                
                            </Text>
                        
                        </Center>
                    </Box>
                </HStack>
        </Box>

                
                )
        }

    }


//ROW1 @@@@@@@@@@@@@@@@@@@@@@@@@
useEffect(() => {
    setTimeout(()=> {
    
    fetch(ENDPOINT)
    .then(response => response.json())
    .then(data => { 
        if((data.find(o=>o.epoch == parseInt(row1Epoch))) != null){
            setPrizeDataRow1((data.find(o=>o.epoch == parseInt(row1Epoch)).prize))
        }
        else{
            setPrizeDataRow1(0)
        }            
    })
    .catch(err=> {
    })
    }
    ,15000)
    //row2
    setTimeout(()=> {
    
        fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => { 
            if((data.find(o=>o.epoch == parseInt(row2Epoch))) != null){
                setPrizeDataRow2((data.find(o=>o.epoch == parseInt(row2Epoch)).prize))
            }
            else{
                setPrizeDataRow2(0)
            }   
        })
        .catch(err=> {
        })}
        ,5000)
        //row3
        setTimeout(()=> {
            fetch(ENDPOINT)
            .then(response => response.json()) 
            .then(data => { 
                if((data.find(o=>o.epoch == parseInt(row3Epoch))) != null){
                    setPrizeDataRow3((data.find(o=>o.epoch == parseInt(row3Epoch)).prize))
                }
                else{
                    setPrizeDataRow3(0)
                }            
            })
            .catch(err=> {
            })}
            ,5000)
        //row4
        setTimeout(()=> {
            fetch(ENDPOINT)
            .then(response => response.json())
            .then(data => { 
                if((data.find(o=>o.epoch == parseInt(row4Epoch))) != null){
                    setPrizeDataRow4((data.find(o=>o.epoch == parseInt(row4Epoch)).prize))
                }
                else{
                    setPrizeDataRow4(0)
                }            
            })
            .catch(err=> {
            })}
            ,5000)
        //row5
        setTimeout(()=> {
        fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => { 
            if((data.find(o=>o.epoch == parseInt(row5Epoch))) != null){
                setPrizeDataRow5((data.find(o=>o.epoch == parseInt(row5Epoch)).prize))
            }
            else{
                setPrizeDataRow5(0)
            }            
        })
        .catch(err=> {
        })}
        ,5000)
        //row6
        setTimeout(()=> {
        fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => { 
            if((data.find(o=>o.epoch == parseInt(row6Epoch))) != null){
                setPrizeDataRow6((data.find(o=>o.epoch == parseInt(row6Epoch)).prize))
            }
            else{
                setPrizeDataRow6(0)
            }            
        })
        .catch(err=> {
        })}
        ,5000)
        //row7
        setTimeout(()=> {
        fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => { 
            if((data.find(o=>o.epoch == parseInt(row7Epoch))) != null){
                setPrizeDataRow7((data.find(o=>o.epoch == parseInt(row7Epoch)).prize))
            }
            else{
                setPrizeDataRow7(0)
            }            
        })
        .catch(err=> {
        })}
        ,5000)
        //row8
        setTimeout(()=> {
            fetch(ENDPOINT)
            .then(response => response.json())
            .then(data => { 
                if((data.find(o=>o.epoch == parseInt(row8Epoch))) != null){
                    setPrizeDataRow8((data.find(o=>o.epoch == parseInt(row8Epoch)).prize))
                }
                else{
                    setPrizeDataRow8(0)
                }            
            })
            .catch(err=> {
            })}
            ,5000)
        //row9
        setTimeout(()=> {
        fetch(ENDPOINT)
        .then(response => response.json())
        .then(data => { 
            if((data.find(o=>o.epoch == parseInt(row9Epoch))) != null){
                setPrizeDataRow9((data.find(o=>o.epoch == parseInt(row9Epoch)).prize))
            }
            else{
                setPrizeDataRow9(0)
            }            
        })
        .catch(err=> {
        })}
        ,5000)



    },[P,EID])


    

    
    
    return(
        <div>
             

            <Center>
        <VStack>
        <Box height="5px" width="360px"  bg='gray.700' shadow='md'
        
        > 
        </Box>
        <Box height="360px" width="390px"  bg='gray.800' borderRadius="md" > 
        

         <Center>


            
         </Center>

        <Center>
        <Box bg="gray.800"
            height="30px"
            width="360px"

            >
                <Center>
            <HStack spacing="35">
                <Box bg="gray.800"
                    height="30px"
                    width = "100px">
                        <Center>
                    <Text fontWeight="bold" color="gray.400" position="relative" left="3px">
                           Round #
                    </Text>
                    </Center>
                </Box>

                <Box bg="gray.800"
                    height="30px"
                    width = "100px">
                        
                        <Center>
                        
                    <Text fontWeight="bold" color="gray.400" position="relative" left="1px" >
                    Price
                    </Text>
                    <Img src ={ethlogo} width='15px' position="relative" bottom="1px" left="8px" top="1px"></Img>
                    </Center>
                </Box>
                <Box bg="gray.800"
                 height="30px"
                    width = "100px">
                        <Center>
                    <Text fontWeight="bold" color="gray.400" position="relative" left="0px">
                    Pool
                    
                    </Text>
                    {/* <Img src={''} boxSize="25px" position="relative" bottom="1px" left="12px"/> */}
                    </Center>
                </Box>

                
                </HStack>
                </Center>
        </Box>
        </Center>


        <VStack spacing="5px">
        <Box height="0px" width="355px"  bg='gray.800' 
        
        /> 



        {/* ROW 1 @@@@@@@@@@@@@@@@@@@@@@@@@@*/}
        <Box bg = {colorOfTable1()} 
            height="30px"
            width="355px"
            borderRadius="md"
            opacity="0.7"
            
            
            >
                <HStack position="relative" top="7px" left="0px" spacing="42" >
                    <Box height="30px" width="80px" position="relative" bottom="3px" left="20px">
                        <Text fontWeight="semibold" fontSize={14}>
                            {(GetCurrentEpochId()-1).toFixed(0)  }
                        </Text>
                    </Box>
                    <Box height="30px" width="90px" position="relative" left="3px" bottom="3px">
                    
                        <Text fontWeight="bold" color={colorOfText1()} fontSize={14} position="relative" left="35px">
                           {/* {GetEpochPrice && (parseFloat(formatEther(GetEpochPrice))*10000000000000).toFixed(4) +" $ "} */}
                           
                           {Row1Logic()}
                           
                        </Text>
                        
                    </Box>
                    
                    <Box height="30px" width="80px" position="relative" bottom="3px" left="20px">
                        <Center>
                        
                            <Text fontWeight="semibold" fontSize={14}>
                                {PrizeDataRow1?.toFixed(2)}
                            </Text>
                            
                            </Center>
                    </Box>
                </HStack>
        </Box>

        {renderRow()}





        </VStack>

        </Box>
        
        </VStack>

        </Center>

        </div>
    )
    }