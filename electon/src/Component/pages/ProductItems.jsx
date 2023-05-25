import React, { useEffect, useState } from "react";
import { AiTwotoneStar } from "react-icons/ai";
import axios from "axios"
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
import { thunkActionCreator } from "../../Redux/thunk";
import { useDispatch } from "react-redux";
import { errorActionCreator, productActionCreator } from "../../Redux/actionCreator";
function ProductItems({ product, filterData, limitData,toggle,setToggle }) {
  
  const dispatch=useDispatch()
  // useEffect(()=>{
  //   dispatch(thunkActionCreator("productData"));
  // },[])
  return (
    <Flex>
      <Box m="0.5rem" w="25%" h="100vh">
        <Box
          m="1rem"
          lineHeight={"2.2rem"}
          p="1rem 0"
          borderBottom={"1px solid rgb(216,216,216)"}
        >
          <Flex>
            <Text>Categories</Text>
            <Spacer />
            <Text>Reset</Text>
          </Flex>

          <Flex>
            <Checkbox size="lg" isDisabled defaultChecked>
              AllCategories
            </Checkbox>
            <Spacer />
            <Text>10</Text>
          </Flex>

          <Flex>
            <Checkbox
              size="lg"
              onChange={(e) => {
                if(e.target.checked){
                  filterData("tablet");
                }else{
                  filterData(null);
                }
              }}
            >
              Tablets
            </Checkbox>
            <Spacer />
            <Text>3</Text>
          </Flex>

          <Flex>
            <Checkbox
              onChange={(e) => {
                if(e.target.checked){
                  filterData("laptop");
                }else{
                  filterData(null);
                }
              }}
              size="lg"
            >
              Laptop
            </Checkbox>
            <Spacer />
            <Text>4</Text>
          </Flex>

          <Flex>
            <Checkbox
              size="lg"
              onChange={(e) => {
                if(e.target.checked){
                  filterData("headfone");
                }else{
                  filterData(null);
                }
              }}
            >
              Headfone
            </Checkbox>
            <Spacer />
            <Text>5</Text>
          </Flex>

          <Flex>
            <Checkbox
              size="lg"
              onChange={(e) => {
                if(e.target.checked){
                  filterData("watch");
                }else{
                  filterData(null);
                }
              }}
            >
              Watch
            </Checkbox>
            <Spacer />
            <Text>3</Text>
          </Flex>

          <Flex>
            <Checkbox
              size="lg"
              onChange={(e) => {
                if(e.target.checked){
                  filterData("speaker");
                }else{
                  filterData(null);
                }
              }}
            >
              Speakers
            </Checkbox>
            <Spacer />
            <Text>1</Text>
          </Flex>
        </Box>

        <Box
          m="1rem"
          lineHeight={"2.2rem"}
          p="1rem 0"
          borderBottom={"1px solid rgb(216,216,216)"}
        >
          <Flex>
            <Text>Avaliablity</Text>
          </Flex>

          <Flex>
            <Text>0 Selected</Text>
            <Spacer />
            <Text>Reset</Text>
          </Flex>

          <Flex>
            <Checkbox size="lg">In Stock</Checkbox>
            <Spacer />
            <Text>5</Text>
          </Flex>

          <Flex>
            <Checkbox disabled size="lg">Out of Stock</Checkbox>
            <Spacer />
            <Text color="rgb(163,166,171)">0</Text>
          </Flex>
        </Box>

        <Box
          m="1rem"
          lineHeight={"2.2rem"}
          p="1rem 0"
          borderBottom={"1px solid rgb(216,216,216)"}
        >
          <Flex>
            <Text>Product Type</Text>
          </Flex>

          <Flex>
            <Text>0 Selected</Text>
            <Spacer />
            <Text>Reset</Text>
          </Flex>

          <Flex>
            <Checkbox
              size="lg"
              value=""
              onChange={(e) => {
                if(e.target.checked){
                  filterData("camera");
                }else{
                  filterData(null);
                }
              }}
            >
              Camera
            </Checkbox>
            <Spacer />
            <Text>8</Text>
          </Flex>
        </Box>

        <Box
          m="1rem"
          lineHeight={"2.2rem"}
          p="1rem 0"
          borderBottom={"1px solid rgb(216,216,216)"}
        >
          <Flex>
            <Text>Brand</Text>
          </Flex>

          <Flex>
            <Text>0 Selected</Text>
            <Spacer />
            <Text>Reset</Text>
          </Flex>

          <Flex>
            <Checkbox
              size="lg"
              onChange={(e) => {
                if(e.target.checked){
                  filterData("watch");
                }else{
                  filterData(null);
                }
              }}
            >
              Smart Watches
            </Checkbox>
            <Spacer />
            <Text>3</Text>
          </Flex>
        </Box>

        <Box
          m="1rem"
          lineHeight={"2.2rem"}
          p="1rem 0"
          borderBottom={"1px solid rgb(216,216,216)"}
        >
          <Flex>
            <Text>Color</Text>
          </Flex>

          <Flex>
            <Text>0 Selected</Text>
            <Spacer />
            <Text>Reset</Text>
          </Flex>

          <HStack mt="1rem" spacing={"1.3rem"}>
            <Box w="13px" h="13px" borderRadius="50%" background="red"></Box>
            <Box w="13px" h="13px" borderRadius="50%" background="yellow"></Box>
            <Box w="13px" h="13px" borderRadius="50%" background="green"></Box>
            <Box w="13px" h="13px" borderRadius="50%" background="blue"></Box>
            <Box w="13px" h="13px" borderRadius="50%" background="grey"></Box>
            <Box w="13px" h="13px" borderRadius="50%" background="black"></Box>
            <Box w="13px" h="13px" borderRadius="50%" background="coral"></Box>
          </HStack>
        </Box>

        <Box m="1rem" lineHeight={"2.2rem"}>
          <Flex>
            <Text>Size</Text>
          </Flex>

          <Flex>
            <Text>0 Selected</Text>
            <Spacer />
            <Text>Reset</Text>
          </Flex>

          <Flex>
            <Checkbox size="lg">M</Checkbox>
            <Spacer />
            <Text>5</Text>
          </Flex>

          <Flex>
            <Checkbox size="lg">S</Checkbox>
            <Spacer />
            <Text>5</Text>
          </Flex>

          <Flex>
            <Checkbox size="lg">X</Checkbox>
            <Spacer />
            <Text>5</Text>
          </Flex>

          <Flex>
            <Checkbox size="lg">XX</Checkbox>
            <Spacer />
            <Text>8</Text>
          </Flex>
        </Box>
      </Box>

      <Box m="0.5rem" w="75%" h="90vh">
        <div>
          {product.length > 0 && (
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3,1fr)",
                textAlign: "left",
              }}
            >
              {product.map((elm) => {
                return (
                  <Box
                    key={elm.id}
                    border="1px solid rgb(216,216,216)"
                    borderRadius={"1.5rem"}
                    p="1rem"
                    m="0.5rem"
                  >
                    <Flex justify={"center"}>
                      <Image
                        src={elm.image[0]}
                        width="200px"
                        height={"180px"}
                        alt=""
                      />
                    </Flex>
                    <Spacer />
                    <Box mt="1rem" lineHeight={"2.2rem"}>
                      <h3>{elm.name.slice(0, 26)}</h3>
                      <h3>₹{elm.price}</h3>
                      <Flex mt="0.6rem">
                        <AiTwotoneStar color="grey" />
                        <AiTwotoneStar color="grey" />
                        <AiTwotoneStar color="grey" />
                        <AiTwotoneStar color="grey" />
                        <AiTwotoneStar color="grey" />
                      </Flex>
                    </Box>
                  </Box>
                );
              })}
            </div>
          )}
        </div>

        <Center>
          <Button
            onClick={() => {
              axios
              .get(`https://electon-server.onrender.com/products?_limit=27`)
              .then((res) => {
                console.log(res.data);
                dispatch(productActionCreator(res.data))
              }).catch(()=>{
                  dispatch(errorActionCreator())
              })
            }}
            m="1rem"
            p="1.5rem 3rem"
          >
            Load More
          </Button>
        </Center>
      </Box>
    </Flex>
  );
}

export default ProductItems;
