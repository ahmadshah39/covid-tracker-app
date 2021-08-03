
import { Heading, HStack, Icon, Box, Text} from "@chakra-ui/react";

const InfoCards = ({ colorText, colorBorder, iconName, iconColor }:{ colorText:string , colorBorder:string , iconName:any, iconColor:string}) => {
    return (
        <Box p={4} width="100%"  borderTop='5px' borderStyle='solid' bgColor="#1e1e1e" borderRadius="md" borderTopColor={colorBorder}>
            <HStack py={1}  justifyContent="space-between" >
                <Heading as="h3" size="md" color="#ffffff" >
                    Total Cases 
                </Heading>
                <Icon color={iconColor} as={iconName}/>
            </HStack>
            <HStack py={1} alignItems="baseline">
                <Heading as="h3" size="lg" color="#ffffffb3" >
                192,991,042 
                </Heading>
                <Text size='sm'  color={colorText} >
                +195,895
                </Text>
            </HStack>
            <HStack py={1}>
                <Text size='sm'  color={colorText} >
                +195,895
                </Text>.
                <Text size='sm' display='none' color="red.500" >
                +195,895
                </Text>
            </HStack>
        </Box>
    )
}

export default InfoCards
