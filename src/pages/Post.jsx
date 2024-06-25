import { Container, VStack, Heading, Text, Button } from "@chakra-ui/react";
import { Link, useParams } from "react-router-dom";

const Post = () => {
  const { id } = useParams();
  return (
    <Container maxW="container.md" py={8}>
      <VStack spacing={4} align="stretch">
        <Heading as="h1" size="xl">Post {id}</Heading>
        <Text>This is the content of post {id}.</Text>
        <Button as={Link} to="/posts" colorScheme="teal" size="md">Back to Posts</Button>
      </VStack>
    </Container>
  );
};

export default Post;