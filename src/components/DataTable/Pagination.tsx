import { Box, Flex, IconButton, Text, Select } from "@chakra-ui/react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Pagination = ({
  setPerPage,
  setCurrentPage,
  iFirst,
  iLast,
  length,
  currentPage,
  perPage,
}: {
  setPerPage: (val: string) => void;
  setCurrentPage: (val: string) => void;
  iFirst: number;
  iLast: number;
  length: number;
  currentPage: number;
  perPage: number;
}) => {
  return (
    <Flex justifyContent="flex-end" alignItems="center" p={5}>
      <Text color="#ffffff">Rows per page:</Text>
      <Box mr={2}>
        <Select
          border="none"
          _focus={{ border: "none" }}
          color="#ffffff"
          value={perPage === length ? "all" : perPage}
          onChange={(e) => setPerPage(e.target.value)}
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="all">All</option>
        </Select>
      </Box>
      <Text color="#ffffff">
        {iFirst + 1}-{iLast > length ? length : iLast} of {length}
      </Text>
      <IconButton
        aria-label="Previous Page"
        mx={2}
        bgColor="transparent"
        color="#ffffff"
        _hover={{
          bgColor: "#272727",
        }}
        _active={{
          bgColor: "#272727",
        }}
        isDisabled={currentPage === 1 ? true : false}
        _focus={{
          outline: "none",
        }}
        isRound={true}
        icon={<FaChevronLeft />}
        onClick={(e) => {
          setCurrentPage("prev");
        }}
      />

      <IconButton
        aria-label="Next Page"
        bgColor="transparent"
        color="#ffffff"
        _hover={{
          bgColor: "#272727",
        }}
        _active={{
          bgColor: "#272727",
        }}
        _focus={{
          outline: "none",
        }}
        isRound={true}
        icon={<FaChevronRight />}
        isDisabled={Math.ceil(length / perPage) === currentPage ? true : false}
        onClick={(e) => {
          setCurrentPage("next");
        }}
      />
    </Flex>
  );
};

export default Pagination;
