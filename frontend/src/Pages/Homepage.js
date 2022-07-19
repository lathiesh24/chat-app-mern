import React from 'react';
import { Container,Box,Text,TabList,Tabs,Tab,TabPanels,TabPanel } from '@chakra-ui/react';
import Login from '../components/authentication/Login';
import SignUp from '../components/authentication/SignUp';
const Homepage = () => {
  return <Container maxW='x1' centerContent>
    <Box
    display='flex'
    justifyContent ="center"
    padding ={3}
    bg="black"
    w="100%"  
    margin="40px 0 15px 0"
    borderRadius="lg"
    borderWidth="1px"
    >
      <Text
      fontSize="50px" fontFamily="Work sans" color='red'>
        Chatify
      </Text>
    </Box>
    <Box bg="black" w="100%" p={4} borderRadius='lg' borderWidth="1px">
 <Tabs variant='soft-rounded' colorScheme='green'>
  <TabList>
    <Tab w="50%">Login</Tab>
    <Tab w="50%">Sign Up</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
      <Login/>
    </TabPanel>
    <TabPanel>
      <SignUp/>
    </TabPanel>
  </TabPanels>
</Tabs>
    </Box>

  </Container>;
};

export default Homepage;