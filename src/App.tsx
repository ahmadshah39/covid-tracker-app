import "./App.css";
import { Heading, VStack,  Container, } from "@chakra-ui/react";
// components
import TableSection from "./components/TableSection";

import Datachart from "./components/Datachart";
import {GlobalProvider} from "./context/GlobalState";
import Cards from "./components/Cards/Cards";
function App() {
  return (
    <GlobalProvider>
      <VStack minH="100vh"  bgColor="#121212">
          <Heading as="h1" my='4' display={['none', 'block']} textAlign='center' size='2xl' color="gray.400">
            GLOBAL COVID INFO 
          </Heading>
          <Heading as="h1" my='4' display={['block', 'none']} textAlign='center' size='lg' color="gray.400">
            GLOBAL COVID INFO 
          </Heading>
          <Container maxW="90%">
            <VStack justifyContent="space-between">
              <Cards/>
              <Datachart/>
              <TableSection/>
            </VStack>
          </Container>
      </VStack>
      </GlobalProvider>
    
  );
}

export default App;
