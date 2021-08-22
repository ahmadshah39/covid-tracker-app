import { useEffect } from "react";
import { VStack, Spinner, Flex } from "@chakra-ui/react";
// components
import TableSection from "../components/TableSection/TableSection";
import Datachart from "../components/DataChart/Datachart";
import Cards from "../components/Cards/Cards";
import { useGlobalContext } from "../context/GlobalState";
function Home() {
  const {
    global,
    getGlobalData,
    globalHistory,
    loading,
    setLoading,
    getHistoricalGlobalData,
  } = useGlobalContext();

  useEffect(() => {
    setLoading();
    getGlobalData();
    getHistoricalGlobalData();
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
    <VStack spacing="24px" justifyContent="space-between">
      <Cards data={global} />
      <Datachart data={globalHistory} />
      <TableSection />
    </VStack>
  );
}

export default Home;
