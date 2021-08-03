import { Grid, Heading, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { FaSearch } from "react-icons/fa";

const SearchData = () => {
    
    return (
        <Grid width='100%'  templateColumns={['repeat(1, 1fr)', 'repeat(1, 1fr)', 'repeat(2, 1fr)']} >
            <Heading color="#ffffff">
            ALL COUNTRIES
            </Heading>
            <InputGroup size="md" variant='flushed'
                        color="#ffffff" 
                     >
                <Input
                    pr="4.5rem"
                    type="text" 
                    placeholder="Search..."
                    focusBorderColor="#ffffff"
                />
                <InputRightElement  children={<FaSearch/>}/>
            </InputGroup>
        </Grid>
    )
}

export default SearchData
