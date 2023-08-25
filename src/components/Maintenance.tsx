import { Center,Img, Text } from '@chakra-ui/react'
import Fire from '../Pictures/Fire.gif'


export const Maintenance = () =>{

    return(
        <div>
            <Center>
            <Img src={Fire}></Img>

            
            </Center>
            <Center>
            <Text fontSize="40" fontWeight="extrabold">
                Under Maintenance

            </Text>
            </Center>
            <Center>
            <Text fontSize="18" fontWeight="bold">
                Check Telegram for updates
            </Text>
            </Center>
            
        </div>
    )





}