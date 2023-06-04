import React from 'react'
import {
    Button,
    Flex,
    Heading,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
} from '@chakra-ui/react'
import { FaArrowRight } from 'react-icons/fa'
import { formatPrice } from './PriceTag'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const OrderSummaryItem = (props) => {
    const { label, value, children } = props
    return (
        <Flex justify="space-between" fontSize="sm">
            <Text fontWeight="medium" color={mode('gray.600', 'gray.400')}>
                {label}
            </Text>
            {value ? <Text fontWeight="medium">{value}</Text> : children}
        </Flex>
    )
}

const CartOrderSummary = (props) => {

    const total = useSelector((store) => {
        return store.total
    })

    const navigate = useNavigate()

    return (
        <Stack spacing="8" borderWidth="1px" rounded="lg" padding="8" width="full">
            <Heading size="md">Order Summary</Heading>

            <Stack spacing="6">
                <OrderSummaryItem label="Subtotal" value={formatPrice(total)} />
                <OrderSummaryItem label="Shipping + Tax">
                    $40
                </OrderSummaryItem>
                <OrderSummaryItem label="Coupon Code">
                    <Link href="#" textDecor="underline">
                        Add coupon code
                    </Link>
                </OrderSummaryItem>
                <Flex justify="space-between">
                    <Text fontSize="lg" fontWeight="semibold">
                        Total
                    </Text>
                    <Text fontSize="xl" fontWeight="extrabold">
                        {formatPrice(total + 40)}
                    </Text>
                </Flex>
            </Stack>
            
            <Button onClick={()=>navigate('/checkout')} color='white' bg="#F6AD55" size="lg" fontSize="md" rightIcon={<FaArrowRight />} >
                Checkout
            </Button>
        </Stack>
    )
}

export default CartOrderSummary