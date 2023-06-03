import React, { useState } from 'react'
import { CloseButton, Flex, Link, Select, useColorModeValue } from '@chakra-ui/react'
import PriceTag from './PriceTag'
import CartProductMeta from './CartProductMeta'
import { useDispatch } from 'react-redux'
import { removeItem } from '../Redux/actionCreator'

const QuantitySelect = (props) => {

  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
      focusBorderColor={useColorModeValue('blue.500', 'blue.200')}
      {...props}
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

const CartItem = ({ item, updateCart, removeItem }) => {
  const product = item;

  const handleQuantity = (q) => {
    const newProduct = { ...product, quantity: q }
    // setProduct()
    updateCart(newProduct);
    // setProduct(newProduct);
  }

  const handleDelete = () => {
       removeItem(item)
  }

  const {
    // isGiftWrapping,
    name,
    color,
    size,
    description,
    quantity,
    imageUrl,
    currency,
    price,
    onChangeQuantity,
    onClickDelete,
  } = product

  return (
    <Flex
      direction={{
        base: 'column',
        md: 'row',
      }}
      justify="space-between"
      align="center"
    >
      <CartProductMeta
        name={name}
        description={description}
        color={color}
        image={imageUrl}
        size={size}
      // isGiftWrapping={isGiftWrapping}
      />

      {/* Desktop */}
      <Flex
        width="full"
        justify="space-between"
        display={{
          base: 'none',
          md: 'flex',
        }}
      >
        <PriceTag price={price} currency={currency} />
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            handleQuantity(e.target.value)
          }}
        />
        <CloseButton aria-label={`Delete ${name} from cart`} onClick={handleDelete} />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{
          base: 'flex',
          md: 'none',
        }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quantity}
          onChange={(e) => {
            onChangeQuantity?.(+e.currentTarget.value)
          }}
        />
        <PriceTag price={price} currency={currency} />
      </Flex>
    </Flex>
  )
}

export default CartItem
