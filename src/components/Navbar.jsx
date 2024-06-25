import { Box, Flex, HStack, Link as ChakraLink, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4}>
      <Flex h={16} alignItems="center" justifyContent="space-between">
        <HStack spacing={8} alignItems="center">
          <ChakraLink as={Link} to="/" color="white" fontSize="lg" fontWeight="bold">My Blog</ChakraLink>
          <HStack as="nav" spacing={4} display={{ base: "none", md: "flex" }}>
            <ChakraLink as={Link} to="/" color="white">Home</ChakraLink>
            <ChakraLink as={Link} to="/posts" color="white">Posts</ChakraLink>
          </HStack>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;