import { useState, useEffect } from "react";
import { Table, Thead, Tbody, Tr, Th, Box } from "@chakra-ui/react";
import TableRows from "./TableRow";
import Pagination from "./Pagination";
import { CountryDataType } from "../../context/ActionTypes";
import { useGlobalContext } from "../../context/GlobalState";
const Datatable = () => {
  const [countriesPerPage, setCountriesPerPage] = useState(10);
  const [currentPageNum, setCurrentPageNum] = useState(1);

  const { countriesData, countriesFiltered, getCountriesData } =
    useGlobalContext();
  useEffect(() => {
    getCountriesData();
    // eslint-disable-next-line
  }, []);

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
            <Th borderBottomWidth="thin">Country</Th>
            <Th textAlign="center">Cases</Th>
            <Th textAlign="center">Cases Per Million</Th>
            <Th textAlign="center">Critical</Th>
            <Th textAlign="center">Recovered</Th>
            <Th textAlign="center">Deaths</Th>
            <Th textAlign="center">Deaths Per Million</Th>
            <Th textAlign="center">Tests</Th>
            <Th textAlign="center">Tests Per Million</Th>
          </Tr>
        </Thead>
        <Tbody>
          <TableRows countries={currentCountries} />
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
