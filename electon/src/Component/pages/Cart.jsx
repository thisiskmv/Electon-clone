import React, { useEffect, useState } from 'react'
import {
  Box,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from '@chakra-ui/react'
import CartItem from '../CartItem'
import CartOrderSummary from '../CartOrderSummary'
import { useDispatch, useSelector } from 'react-redux'
import { UPDATE_CART } from '../../Redux/actionTypes'
import { FaCommentsDollar } from 'react-icons/fa'

const Cart = () => {
  const cartData = useSelector((store) => {
    return store.cart
  });

  const dispatch = useDispatch();

  const updateCart = (newItem) => {

    console.log(newItem)
    const newcart = cartData.map((item) => {
      return item.id === newItem.id ? newItem : item
    })
    console.log(newcart);
    // setCartData(newcart)

    const total = newcart.reduce((acc, elem) => {
      return acc + elem.price * elem.quantity
    }, 0)
    console.log(total);

    dispatch({
      type: UPDATE_CART,
      payload: {
        cart: newcart,
        total: total
      }
    })

  }

  const removeItem = (removeditem) => {
    const newcart = cartData.filter((item) => {
      return item.id !== removeditem.id
    })

    const total = newcart.reduce((acc, elem) => {
      return acc + elem.price * elem.quantity
    }, 0)
    console.log(total);

    dispatch({
      type: UPDATE_CART,
      payload: {
        cart: newcart,
        total: total
      }
    })

  }

  return (
    <Box
      maxW={{
        base: '3xl',
        lg: '7xl',
      }}
      mx="auto"
      px={{
        base: '4',
        md: '8',
        lg: '12',
      }}
      py={{
        base: '6',
        md: '8',
        lg: '12',
      }}
    >
      <Stack
        direction={{
          base: 'column',
          lg: 'row',
        }}
        align={{
          lg: 'flex-start',
        }}
        spacing={{
          base: '8',
          md: '16',
        }}
      >
        <Stack
          spacing={{
            base: '8',
            md: '10',
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart (3 items)
          </Heading>

          <Stack spacing="6">
            {cartData.map((item) => (
              <CartItem key={item.id} item={item} updateCart={updateCart} removeItem={removeItem} />
            ))}
          </Stack>
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  )
}

export default Cart