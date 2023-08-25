import React, { ReactElement, useEffect, useState, useRef,useCallback } from 'react'
import { Box, Center, Flex, HStack, useInterval, useTimeout, VStack } from "@chakra-ui/react";
import {Tooltip} from '@chakra-ui/react';
import { InfoOutlineIcon } from '@chakra-ui/icons'
import { formatEther } from "@ethersproject/units"
import { createChart, ColorType, PriceScaleMode } from 'lightweight-charts';
import { useGetEpochPriceXXX,useGetCurrentPrice,} from "../hooks";
import { Icon,} from '@chakra-ui/react'

var newDiv = document.createElement('div')
newDiv.id = "xx2"

document.body.append(newDiv)

const ENDPOINT = "http://ggoodwork.com/api/charteth";

let chart = createChart(document.getElementById("xx2"), { 
    width: 375, 
    height: 300,
    rightPriceScale:{
        scaleMargins:{}
    },
    layout: {
        backgroundColor: "#131722",
        textColor: "#d1d4dc"
        },
    grid: {
    vertLines: {
        color: "rgba(42, 46, 57, 0)"
    },
    horzLines: {
        color: "rgba(42, 46, 57, 0.6)"
    }
    },
    timeScale: {
        lockVisibleTimeRangeOnResize: true,
        barSpacing: 3, //how many bars are on screen
        timeVisible: false,
        fixRightEdge: true, fixLeftEdge: true,
        secondsVisible: false
    },
    crosshair: {
        vertLine:{
            width:1,
            labelVisible:false,
        }
    },
}); 
    
    
let candleSeries = chart.addCandlestickSeries();

var tick = 0
var t3 = 10000


export const Charteth = () =>{
    const XGetCurrentPrice = useGetCurrentPrice()

    function GetCurrentPrice(){
        if (XGetCurrentPrice){
            return (parseFloat(formatEther(XGetCurrentPrice[0]._hex))*10000000000000)
        }}

    const GCP = GetCurrentPrice()

    let t = 10000


    
    useEffect(()=>{
        //loads chart data points
        setTimeout(() => {

            fetch(ENDPOINT)
            .then(response => response.json())
                
            .then(data => { 
                const cdata = data.map(d =>{

                    return {time: (t--).toString(), open: d?.open, high: d?.high, low: d?.low, close: d?.close}
                })
            
                candleSeries.setData(cdata.reverse()) 

            })
            .catch(err=> {})
        
            }, 1000);

    },[])
    

    useEffect(() => {
        //prevent the first time opening from updating
        tick ++

        if(tick>2){
            t3++


            setTimeout(()=> {

        
                fetch(ENDPOINT)
                .then(response => response.json())
                    
                .then(data => { 
                    var obj = {
                        time: (t3).toString(),
                        open: data[1]?.close,
                        high: data[1]?.close,
                        low: data[1]?.close,
                        close: data[0]?.close
                    }

                    candleSeries.update(obj)

        
                })
                .catch(err=> {
                })
            },30000)



        }







        },[GCP])

    
    return (
        <div>
            <br/>
            <br/>

        <Center>

            <VStack>
                <Box boxShadow="dark-lg" height="305px" width="382px"  border="1px" borderColor="gray.700" bg="#131722" borderRadius="md" position = "relative" bottom="30px" >
                    <Tooltip label={"Ethereum price feed (3 minutes)"} placement='right'>
                        <Icon as={InfoOutlineIcon} boxSize="20px"position="relative" top="2px" left="5px" zIndex="3"/>
                    </Tooltip>
                </Box>
            </VStack>
      
        </Center>
        
       
        </div>

    )
    






}
