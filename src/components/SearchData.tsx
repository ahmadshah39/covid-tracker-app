import {
  Grid,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";
import { useGlobalContext } from "../context/GlobalState";
const SearchData = () => {
  const { filterCountries } = useGlobalContext();
  const onChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    e.preventDefault();
    if (e.target.value !== "") {
      filterCountries(e.target.value);
    } else {
      filterCountries("");
    }
  };
  return (
    <Grid
      width="100%"
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(2, 1fr)"]}
    >
      <Heading color="#ffffff">ALL COUNTRIES</Heading>
      <InputGroup size="md" variant="flushed" color="#ffffff">
        <Input
          pr="4.5rem"
          type="text"
          placeholder="Search..."
          focusBorderColor="#ffffff"
          onChange={onChange}
        />
        <InputRightElement children={<FaSearch />} />
      </InputGroup>
    </Grid>
  );
};

export default SearchData;
