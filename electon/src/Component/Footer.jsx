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
// import { ChakraProvider } from '@chakra-ui/react';

import  './Footer.css';
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
    <div class="footer">
  <div class="footer-container">
    <div class="footer-grid">
      <div class="footer-stack">
        <h1>Electon</h1>

        <p class="footer-address">
          64 st james boulevard <br />
          hoswick, ze2 7zj
        </p>
      </div>
      <div class="footer-stack">
        <h2 class="footer-header">Find Product</h2>
        <a href="#">Brownze arnold</a>
        <a href="#">Chronograph blue</a>
        <a href="#">Smart phones</a>
        <a href="#">Automatic watch</a>
        <a href="#">Hair straighteners</a>
      </div>
      <div class="footer-stack">
        <h2 class="footer-header">Get help</h2>
        <a href="#">About us</a>
        <a href="#">Contact us</a>
        <a href="#">Return policy</a>
        <a href="#">Privacy policy</a>
        <a href="#">Payment policy</a>
      </div>
      <div class="footer-stack">
        <h2 class="footer-header">About us</h2>
        <a href="#">News</a>
        <a href="#">Service</a>
        <a href="#">Our policy</a>
        <a href="#">Customer care</a>
        <a href="#">Faq's</a>
      </div>
    </div>
  </div>
</div>
  )
}

export default Footer