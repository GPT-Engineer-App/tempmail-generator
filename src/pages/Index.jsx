import React, { useState, useEffect } from "react";
import { Box, Button, Container, Flex, Heading, IconButton, Image, Input, Link, Stack, Text, VStack } from "@chakra-ui/react";
import { FaCopy } from "react-icons/fa";

const Index = () => {
  const [email, setEmail] = useState("");
  const [inbox, setInbox] = useState([]);

  const generateEmail = () => {
    const randomEmail = `temp_${Math.random().toString(36).substring(7)}@example.com`;
    setEmail(randomEmail);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
  };

  useEffect(() => {
    const fetchEmails = async () => {
      try {
        const response = await fetch("/api/emails");
        const data = await response.json();
        setInbox(data);
      } catch (error) {
        console.error("Error fetching emails:", error);
      }
    };

    fetchEmails();
    const interval = setInterval(fetchEmails, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Box>
      {}
      {/* Header */}
      <Box bg="gray.100" py={4}>
        <Container maxW="container.lg">
          <Flex align="center" justify="space-between">
            <Image src="https://images.unsplash.com/photo-1596526131083-e8c633c948d2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbWFpbCUyMGxvZ298ZW58MHx8fHwxNzEwNDcyMTYzfDA&ixlib=rb-4.0.3&q=80&w=1080" alt="Logo" h={8} />
            <Stack direction="row" spacing={4}>
              <Link>Home</Link>
              <Link>About</Link>
              <Link>FAQ</Link>
              <Link>Contact</Link>
            </Stack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8}>
          <Button colorScheme="blue" size="lg" onClick={generateEmail}>
            Generate Email
          </Button>
          {email && (
            <Flex align="center" justify="center" w="400px">
              <Input value={email} isReadOnly />
              <IconButton icon={<FaCopy />} ml={2} onClick={copyEmail} aria-label="Copy Email" />
            </Flex>
          )}
          {inbox.length > 0 && (
            <Box w="80%">
              <Heading size="lg" mb={4}>
                Inbox
              </Heading>
              <VStack align="stretch" spacing={4}>
                {inbox.map((mail, index) => (
                  <Box key={index} borderWidth={1} borderRadius="md" p={4}>
                    <Heading size="md">{mail.subject}</Heading>
                    <Text mt={2}>{mail.content}</Text>
                  </Box>
                ))}
              </VStack>
            </Box>
          )}
        </VStack>
      </Container>

      {/* Footer */}
      <Box bg="gray.100" py={4} mt={8}>
        <Container maxW="container.lg">
          <Text textAlign="center">&copy; {new Date().getFullYear()} Temp Mail Generator. All rights reserved.</Text>
          <Flex justify="center" mt={2}>
            <Link mr={4}>Terms of Service</Link>
            <Link>Privacy Policy</Link>
          </Flex>
        </Container>
      </Box>
    </Box>
  );
};

export default Index;
