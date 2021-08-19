import { VStack } from "@chakra-ui/react";
import Datatable from "./DataTable/Datatable";
import SearchData from "./SearchData";
const TableSection = () => {
  return (
    <VStack spacing="30px" mt="30px" width="100%">
      <SearchData />
      <Datatable />
    </VStack>
  );
};

export default TableSection;
