import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Box, Spinner } from "@chakra-ui/react";
import TableRow from "./TableRow";
import Pagination from "./Pagination";
import { useGlobalContext } from "../../../context/GlobalState";
const Datatable = () => {
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const { countriesData, countriesFiltered, getCountriesData } =
    useGlobalContext();
  useEffect(() => {
    getCountriesData();
    // eslint-disable-next-line
  }, []);

  if (countriesData === null) {
    return (
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="xl"
      />
    );
  }
  const data =
    countriesFiltered.length !== 0 ? countriesFiltered : countriesData;

  const indexOfLastCountry = currentPageNum * countriesPerPage;
  const indexOfFirstCountry = indexOfLastCountry - countriesPerPage;
  const currentCountries = data.slice(indexOfFirstCountry, indexOfLastCountry);

  const changePerPage = (val: string) => {
    if (val === "all") {
      setCountriesPerPage(data.length);
      return;
    }
    setCountriesPerPage(parseFloat(val));
  };
  const changeCurrentPage = (val: string) => {
    if (val === "next") {
      setCurrentPageNum(currentPageNum + 1);
      return;
    }
    if (val === "prev") {
      currentPageNum !== 1 && setCurrentPageNum(currentPageNum - 1);
      return;
    }
  };
  console.log("DataTable");

  return (
    <Box
      width="100%"
      overflowX="auto"
      bgColor="#1e1e1e"
      pt={3}
      overflowY="hidden"
    >
      <Table size="md" width="100%" textColor="#ffffff" overflowX="auto">
        <Thead>
          <Tr>
            <Th borderBottomColor={"#484a4c"}>Country</Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Cases
            </Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Cases Per Million
            </Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Critical
            </Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Recovered
            </Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Deaths
            </Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Deaths Per Million
            </Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Tests
            </Th>
            <Th borderBottomColor={"#484a4c"} textAlign="center">
              Tests Per Million
            </Th>
          </Tr>
        </Thead>
        <Tbody>
          {currentCountries.map((country) => (
            <TableRow key={country.country} country={country} />
          ))}
        </Tbody>
      </Table>
      <Pagination
        setPerPage={changePerPage}
        setCurrentPage={changeCurrentPage}
        iFirst={indexOfFirstCountry}
        iLast={indexOfLastCountry}
        length={data.length}
        currentPage={currentPageNum}
        perPage={countriesPerPage}
      />
    </Box>
  );
};

export default Datatable;
