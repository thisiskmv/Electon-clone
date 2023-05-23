import React, { useEffect} from "react";
import { Box, Checkbox, Flex, VStack, Spacer, Text,Image, Divider } from "@chakra-ui/react";
import {useDispatch, useSelector} from "react-redux"
import { thunkActionCreator } from "../../Redux/thunk";
function Product(props) {
  const dispatch=useDispatch()
  useEffect(() => {
   dispatch(thunkActionCreator("productData"))
  }, []);

  const {product} =useSelector((store)=>{
    return store
  })
  return (
    <div>
      <Box m="4rem 2.5rem">
        <Flex>
          <Box m="0.5rem" w="25%" h="100vh">
            <Box m="1rem" lineHeight={"2.2rem"} p="1rem 0" borderBottom={"1px solid rgb(216,216,216)"}>
              <Flex>
                <Text>Categories</Text>
                <Spacer />
                <Text>Reset</Text>
              </Flex>

              <Flex>
                <Checkbox  size='lg' isDisabled defaultChecked >AllCategories</Checkbox>
                <Spacer />
                <Text>10</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Tablets</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Laptop</Checkbox>
                <Spacer />
                <Text>10</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Headfone</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Watch</Checkbox>
                <Spacer />
                <Text>2</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Speakers</Checkbox>
                <Spacer />
                <Text>10</Text>
              </Flex>
            </Box>

        

            <Box m="1rem" lineHeight={"2.2rem"} p="1rem 0" borderBottom={"1px solid rgb(216,216,216)"}>
              <Flex>
                <Text>Avaliablity</Text>
              </Flex>

              <Flex>
                <Text>0 Selected</Text>
                <Spacer />
                <Text>Reset</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>In Stock</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Out of Stock</Checkbox>
                <Spacer />
                <Text>0</Text>
              </Flex>
            </Box>

            <Box m="1rem" lineHeight={"2.2rem"} p="1rem 0" borderBottom={"1px solid rgb(216,216,216)"}>
              <Flex>
                <Text>Product Type</Text>
              </Flex>

              <Flex>
                <Text>0 Selected</Text>
                <Spacer />
                <Text>Reset</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Smart Watches</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>
            </Box>

            <Box m="1rem" lineHeight={"2.2rem"} p="1rem 0" borderBottom={"1px solid rgb(216,216,216)"}>
              <Flex>
                <Text>Brand</Text>
              </Flex>

              <Flex>
                <Text>0 Selected</Text>
                <Spacer />
                <Text>Reset</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>Smart Watches</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>
            </Box>

            <Box m="1rem" lineHeight={"2.2rem"} p="1rem 0" borderBottom={"1px solid rgb(216,216,216)"}>
              <Flex>
                <Text>Color</Text>
              </Flex>

              <Flex>
                <Text>0 Selected</Text>
                <Spacer />
                <Text>Reset</Text>
              </Flex>

              <Flex>color</Flex>
            </Box>

            <Box m="1rem" lineHeight={"2.2rem"} >
              <Flex>
                <Text>Size</Text>
              </Flex>

              <Flex>
                <Text>0 Selected</Text>
                <Spacer />
                <Text>Reset</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>M</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>S</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>X</Checkbox>
                <Spacer />
                <Text>5</Text>
              </Flex>

              <Flex>
                <Checkbox size='lg'>XX</Checkbox>
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
                       
                          border= "1px solid rgb(216,216,216)"
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
                        <Spacer/>
                        <Box mt="1rem" lineHeight={"2rem"}>
                        <h3>{elm.name.slice(0,26)}</h3>
                        <h3>{elm.price}</h3>
                        <h2>⭐⭐⭐⭐⭐⭐</h2>
                        </Box>
                        

                      </Box>
                    );
                  })}
                </div>
              )}
            </div>
          </Box>
        </Flex>
      </Box>
    </div>
  );
}

export default Product;
