import { Tr, Td, Avatar } from "@chakra-ui/react";
import { CountryDataType } from "../../context/ActionTypes";
const TableRows = ({ countries }: { countries: CountryDataType[] }) => {
  return (
    <>
      {countries.map((country) => (
        <Tr key={country.countryInfo._id}>
          <Td>
            <Avatar
              size="2xs"
              display="inline-block"
              mr={3}
              name={country.country}
              src={country.countryInfo.flag}
            />
            {country.country}
          </Td>
          <Td textAlign="center">{country.cases}</Td>
          <Td textAlign="center">{country.casesPerOneMillion}</Td>
          <Td textAlign="center">{country.critical}</Td>
          <Td textAlign="center">{country.recovered}</Td>
          <Td textAlign="center">{country.deaths}</Td>
          <Td textAlign="center">{country.deathsPerOneMillion}</Td>
          <Td textAlign="center">{country.tests}</Td>
          <Td textAlign="center">{country.testsPerOneMillion}</Td>
        </Tr>
      ))}
    </>
  );
};

export default TableRows;
