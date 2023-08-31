import React from "react";
import {
  Box,
  Checkbox,
  Flex,
  Stack,
  Skeleton,
  Spacer,
  Text,
  Image,
  Divider,
  Button,
  Center,
  HStack,
} from "@chakra-ui/react";
function Skelton(props) {
  return (
    <Flex>
      <Box m="0.5rem" w="25%" h="100vh">
        <Box p="1rem 0">
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>
        <Box p="1rem 0">
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>

        <Box>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>

        <Box>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>

        <Box p="1rem 0">
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>

        <Box p="1rem 0">
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>

        <Box>
          <Stack>
            <Skeleton height="20px" />
            <Skeleton height="20px" />
            <Skeleton height="20px" />
          </Stack>
        </Box>
      </Box>

      <Box m="0.5rem" w="75%" h="90vh">
        <HStack m="1rem">
          <Skeleton height="200px" w="300px" />
          <Skeleton height="200px" w="300px" />
          <Skeleton height="200px" w="300px" />
        </HStack>

        <HStack m="1rem">
          <Skeleton height="200px" w="300px" />
          <Skeleton height="200px" w="300px" />
          <Skeleton height="200px" w="300px" />
        </HStack>

        <HStack m="1rem">
          <Skeleton height="200px" w="300px" />
          <Skeleton height="200px" w="300px" />
          <Skeleton height="200px" w="300px" />
        </HStack>
      </Box>
    </Flex>
  );
}

export default Skelton;
