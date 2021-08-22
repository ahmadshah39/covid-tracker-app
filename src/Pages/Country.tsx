import { useEffect } from "react";
import { VStack, Spinner, Flex, Button } from "@chakra-ui/react";
import { useHistory, useParams } from "react-router-dom";
// components
import Datachart from "../components/DataChart/Datachart";
import Cards from "../components/Cards/Cards";
import { useGlobalContext } from "../context/GlobalState";

export interface RouteParams {
  id: string;
}
const Country = () => {
  let history = useHistory();

  function handleClick() {
    history.push("/");
  }
  let { id } = useParams<RouteParams>();
  const {
    countryData,
    countryHistory,
    loading,
    setLoading,
    getCountryData,
    getCountryHistoricalData,
  } = useGlobalContext();

  useEffect(() => {
    setLoading();
    getCountryData(id);
    getCountryHistoricalData(id);
    // eslint-disable-next-line
  }, []);

  if (loading === true) {
    return (
      <Flex
        justifyContent="center"
        alignItems="center"
        minH="100vh"
        bgColor="#121212"
      >
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Flex>
    );
  }
  return (
    <>
      <VStack spacing="24px" justifyContent="space-between">
        <Cards data={countryData} />
        <Datachart data={countryHistory} />
      </VStack>
      <Flex justifyContent="flex-end" mt={4}>
        <Button
          onClick={handleClick}
          bgColor="#1e1e1e"
          _hover={{ bgColor: "#1e1e1e" }}
          color="#ffffff"
        >
          Go to Home
        </Button>
      </Flex>
    </>
  );
};

export default Country;
