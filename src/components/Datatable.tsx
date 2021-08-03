import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    Box,
    Flex,
    IconButton,
    Text,
    Select,
  } from "@chakra-ui/react"
  import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
const Datatable = () => {
    return (
      <Box width="100%" overflowX="auto" bgColor="#1e1e1e" pt = {3}>
        <Table size='md' width="100%" textColor="#ffffff" overflowX="auto">
        <Thead>
          <Tr>
            <Th borderBottomWidth='thin'>Country</Th>
            <Th textAlign="center">Cases</Th>
            <Th textAlign="center" >Cases Per Million</Th>
            <Th textAlign="center">Critical</Th>
            <Th textAlign="center">Recovered</Th>
            <Th textAlign="center">Deaths</Th>
            <Th textAlign="center">Deaths Per Million</Th>
            <Th textAlign="center">Tests</Th>
            <Th textAlign="center">Tests Per Million</Th>
          </Tr>
        </Thead>
        <Tbody>
          <Tr>
            <Td>inches</Td>
            <Td textAlign="center">35666669559</Td>
            <Td textAlign="center">35666669559</Td>
            <Td textAlign="center">35666669559</Td>
            <Td textAlign="center">35666669559</Td>
            <Td textAlign="center">35666669559</Td>
            <Td textAlign="center">35666669559</Td>
            <Td textAlign="center">35666669559</Td>
            <Td textAlign="center">35666669559</Td>
          </Tr>
        </Tbody> 
      </Table>
      <Flex justifyContent="flex-end" alignItems='center' p={5}>
      <Text color="#ffffff">
        Rows per page:
        </Text>
     <Box mr={2}>
      <Select border='none' _focus={{ border: "none"}} color="#ffffff" >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="all">All</option>
      </Select>
     </Box>
        <Text color="#ffffff">
        1-10 of 222
        </Text>
        <IconButton aria-label="Previous Page" mx={2} bgColor='transparent' 
          color="#ffffff"
        _hover={{
          bgColor:'#272727'
        }}
        _active={{
          bgColor:'#272727'
        }}
      _focus={{
          outline:'none'
        }}
        isRound={true} icon={<FaChevronLeft/>} />
        <IconButton aria-label="Next Page"   bgColor='transparent'   color="#ffffff"
        _hover={{
          bgColor:'#272727'
        }}
        _active={{
          bgColor:'#272727'
        }}
      _focus={{
          outline:'none'
        }} isRound={true} icon={<FaChevronRight/>} />
      </Flex>
      </Box>
    )
}

export default Datatable
