import "./App.css";
import { Heading, VStack, Container } from "@chakra-ui/react";

import { GlobalProvider } from "./context/GlobalState";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Country from "./Pages/Country";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <GlobalProvider>
      <VStack minH="100vh" py={5} bgColor="#121212">
        <Heading as="h1" my="4" textAlign="center" size="xl" color="gray.400">
          GLOBAL COVID INFO
        </Heading>

        <Container maxW="90%">
          <Router>
            <Switch>
              <Route exact path="/" children={<Home />} />
              <Route exact path="/country/:id" children={<Country />} />
            </Switch>
          </Router>
          <Footer />
        </Container>
      </VStack>
    </GlobalProvider>
  );
}

export default App;
