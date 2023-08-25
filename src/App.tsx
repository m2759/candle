import {Header} from "./components/Header";
import {Chart} from './components/Chart';
import {Charteth} from './components/Charteth';
import {Chartltc} from './components/Chartltc';
import {Body} from './components/Body';
import { TableBTC } from './components/TableBTC'
import { TableETH} from './components/TableETH'
import { TableLTC} from './components/TableLTC'
import { BodyDisabled} from './components/BodyDisabled'

import { WelcomeScreen} from './components/WelcomeScreen';
import { ChakraProvider,Stack,HStack, Center, VStack} from "@chakra-ui/react";
import Theme from "./Theme/Theme"


function App() {
  
  
  
  return (
    
      <ChakraProvider theme={Theme} >
        <Stack spacing={0}>
          <Header/>
            
            <Center>
            <HStack spacing={-2}>
              {/* left */}
              <VStack>
              <Charteth />
              <BodyDisabled />
              <TableETH/>
              </VStack>

              {/* center */}
              <VStack>
              <Chart />
              <Body />
              <TableBTC/>
              </VStack>

              {/* right */}
              <VStack>
              <Chartltc />
              <BodyDisabled />
              <TableLTC/>
              </VStack>
              
            </HStack>
            </Center>
              
              <WelcomeScreen/>
            {/* <Maintenance/>*/}
        </Stack>
      </ChakraProvider>

   
  );
}

export default App;

