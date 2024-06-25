import { Container, Text, VStack, Heading, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={4}>
        <Heading as="h1" size="2xl">Welcome to My Blog</Heading>
        <Text fontSize="lg">Discover amazing content and stay updated with the latest posts.</Text>
        <Button as={Link} to="/posts" colorScheme="teal" size="lg">View Posts</Button>
      </VStack>
    </Container>
  );
};

export default Index;