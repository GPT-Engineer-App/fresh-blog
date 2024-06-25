import { Container, VStack, Heading, Text, Box, Link as ChakraLink } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Posts = () => {
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={8} align="stretch">
        <Heading as="h1" size="xl">Blog Posts</Heading>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Post 1</Heading>
          <Text mt={4}>This is a summary of the first post.</Text>
          <ChakraLink as={Link} to="/posts/1" color="teal.500" mt={2} display="block">Read More</ChakraLink>
        </Box>
        <Box p={5} shadow="md" borderWidth="1px">
          <Heading fontSize="xl">Post 2</Heading>
          <Text mt={4}>This is a summary of the second post.</Text>
          <ChakraLink as={Link} to="/posts/2" color="teal.500" mt={2} display="block">Read More</ChakraLink>
        </Box>
      </VStack>
    </Container>
  );
};

export default Posts;