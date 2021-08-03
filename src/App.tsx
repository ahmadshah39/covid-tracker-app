import "./App.css";
import { Heading,  Grid,  VStack,  Container, Box,} from "@chakra-ui/react";
// components
import InfoCard from "./components/InfoCard";
import TableSection from "./components/TableSection";

import { FaGlobeAmericas, FaHeart, FaSkullCrossbones} from "react-icons/fa";
import { RiSurgicalMaskFill} from "react-icons/ri";
import Datachart from "./components/Datachart";
function App() {
  return (
      <VStack minH="100vh"  bgColor="#121212">
          <Heading as="h1" my='4' display={['none', 'block']} textAlign='center' size='2xl' color="gray.400">
            GLOBAL COVID INFO 
          </Heading>
          <Heading as="h1" my='4' display={['block', 'none']} textAlign='center' size='lg' color="gray.400">
            GLOBAL COVID INFO 
          </Heading>
          <Container maxW="90%">
            <Grid width='100%'  templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)', 'null','repeat(4, 1fr)']} gap={5}>
              <InfoCard colorText="#ff5252" iconColor='#ffffff' colorBorder='#424242' iconName={FaGlobeAmericas}/>
              <InfoCard colorText="#ff5252" iconColor='#2196f3' colorBorder='#2196f3' iconName={RiSurgicalMaskFill}/>
              <InfoCard colorText="#4caf50" iconColor='#4caf50' colorBorder='#4caf50' iconName={FaHeart}/>
              <InfoCard colorText="#ff5252" iconColor='#ff5252' colorBorder='#ff5252' iconName={FaSkullCrossbones}/>
            </Grid>
       
            <Grid width='100%' marginTop={5} templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(1, 1fr)' , 'repeat(2, 1fr)']} gap={5}>
              <Datachart/>
              <Datachart/>
            </Grid>
            
            <TableSection/>
          </Container>
      
      </VStack>
    
  );
}

export default App;
