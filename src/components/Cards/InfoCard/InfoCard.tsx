import { Heading, HStack, Icon, Box, Text } from "@chakra-ui/react";
type data = {
  title: string;
  total: number;
  today: string;
  perMill: string;
  colorText: string;
  iconColor: string;
  colorBorder: string;
  iconName: any;
};

const InfoCards = ({
  data: {
    title,
    total,
    today,
    perMill,
    colorText,
    colorBorder,
    iconColor,
    iconName,
  },
}: {
  data: data;
}) => {
  return (
    <Box
      p={4}
      width="100%"
      borderTop="5px"
      borderStyle="solid"
      bgColor="#1e1e1e"
      borderRadius="md"
      borderTopColor={colorBorder}
    >
      <HStack py={1} justifyContent="space-between">
        <Heading as="h3" size="md" color="#ffffff">
          {title}
        </Heading>
        <Icon color={iconColor} as={iconName} />
      </HStack>
      <HStack py={1} alignItems="baseline">
        <Heading as="h3" size="lg" color="#ffffffb3">
          {total}
        </Heading>
        <Text fontSize="xs" fontWeight="bold" color={colorText}>
          {today}
        </Text>
      </HStack>
      <HStack py={1}>
        <Text fontSize="xs" fontWeight="bold" color={colorText}>
          {perMill}
        </Text>
      </HStack>
    </Box>
  );
};

export default InfoCards;
