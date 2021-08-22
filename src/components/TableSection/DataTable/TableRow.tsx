import { Tr, Td, Avatar } from "@chakra-ui/react";
import { CountryDataType } from "../../../context/ActionTypes";
import { useHistory } from "react-router-dom";
const TableRow = ({ country }: { country: CountryDataType }) => {
  let history = useHistory();

  function handleClick() {
    history.push(`/country/${country.countryInfo.iso2}`);
  }
  return (
    <>
      <Tr onClick={handleClick} _hover={{ bgColor: "#505050b3" }}>
        <Td borderBottomColor={"#484a4c"}>
          <Avatar
            size="2xs"
            display="inline-block"
            mr={3}
            name={country.country}
            src={country.countryInfo.flag}
          />
          {country.country}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.cases}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.casesPerOneMillion}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.critical}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.recovered}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.deaths}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.deathsPerOneMillion}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.tests}
        </Td>
        <Td borderBottomColor={"#484a4c"} textAlign="center">
          {country.testsPerOneMillion}
        </Td>
      </Tr>
    </>
  );
};

export default TableRow;
