import { Box, Container } from "@chakra-ui/react";
import AddChar from "./components/AddChar";
import CharList from "./components/CharList";

const App = () => {
  return (
    <Box minH='100vh' backgroundImage='cover.avif'>
      <Container maxW='4xl' pt='1rem'>
        <AddChar />
        <CharList />
      </Container>
    </Box>
  );
};

export default App;
