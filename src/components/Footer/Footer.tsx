import { Flex, Text, Link } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Flex justifyContent="center" mt={5} alignItems="center">
      <Text color="#ffffff">
        Developed by{" "}
        <Link
          target="_blank"
          color="#2196f3"
          href="https://github.com/ahmadshah39"
        >
          Muhammad Ahmad Shah
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
