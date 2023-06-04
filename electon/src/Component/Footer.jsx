import React from 'react'
import {
  Box,
  Container,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

const Logo = props => {
  return (
    <img
      height={32}
      viewBox="0 0 120 28"
      xmlns="http://www.w3.org/2000/svg"
      src='https://res.cloudinary.com/admitad-gmbh/image/upload/v1645289711/fwgb4vfb9en87kht1zzb.jpg'
      {...props}
    />
  )
}

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={"bold"} fontSize={"xl"} mb={2}>
      {children}
    </Text>
  )
}


const Footer = () => {
  return (
    <div>
      <Box
        bg={useColorModeValue('blue.50')}
        color={useColorModeValue('blue.700')}>
        <Container as={Stack} maxW={'90%'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '1fr 1fr 1fr 1fr' }}
            spacing={250}>
            <Stack spacing={6}>
              <Box>
                <Logo color={useColorModeValue('gray.700', 'white')} />
              </Box>
              <Text fontSize={'sm'}>
                64 st james boulevard <br /> hoswick, ze2 7zj
              </Text>
            </Stack>
            <Stack align={'flex-start'} fontSize={"md"} >
              <ListHeader>Find Product</ListHeader>
              <Link href={'#'}>Brownze arnold</Link>
              <Link href={'#'}>Chronograph blue</Link>
              <Link href={'#'}>Smart phones</Link>
              <Link href={'#'}>Automatic watch</Link>
              <Link href={'#'}>Hair straighteners</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={"md"}>
              <ListHeader>Get help</ListHeader>
              <Link href={'#'}>About us</Link>
              <Link href={'#'}>Contact us</Link>
              <Link href={'#'}>Return policy</Link>
              <Link href={'#'}>Privacy policy</Link>
              <Link href={'#'}>Payment policy</Link>
            </Stack>
            <Stack align={'flex-start'} fontSize={"md"}>
              <ListHeader>About us</ListHeader>
              <Link href={'#'}>News</Link>
              <Link href={'#'}>Service</Link>
              <Link href={'#'}>Our policy</Link>
              <Link href={'#'}>Custmer care</Link>
              <Link href={'#'}>Faq's</Link>
            </Stack>
            {/* <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={'#'}>Facebook</Link>
              <Link href={'#'}>Twitter</Link>
              <Link href={'#'}>Dribbble</Link>
              <Link href={'#'}>Instagram</Link>
              <Link href={'#'}>LinkedIn</Link>
            </Stack> */}
          </SimpleGrid>
        </Container>
      </Box>
    </div>
  )
}

export default Footer