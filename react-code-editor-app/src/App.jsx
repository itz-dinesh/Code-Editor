import { Box, Text } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#0f0a19" color="gray.500" px={6} py={8}>
      <Text fontSize="2xl" fontWeight="bold" color="white" mb={4}>
        D Code Editor
      </Text>
      <CodeEditor />
    </Box>
  );
}

export default App;
