import React, { useEffect, useReducer, useState } from 'react';
import { AiFillHeart, AiFillStar, AiOutlineStar, AiOutlineCheck, AiTwotoneCheckCircle, AiOutlineHeart, AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import {
  Text, Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription, Box, Button, Image, Input, Textarea, Flex, Spacer
} from '@chakra-ui/react';
import axios from 'axios';
import { initialStates, productReducer } from '../Redux/reducer';
import '../Style/ProductDetail.css';
import { Link } from 'react-router-dom';

export default function ProductDetail({ product }) {
  const [selectedSize, setSelectedSize] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false); const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [isReviewsVisible, setReviewsVisible] = useState(false);
  const [isWriteReviewVisible, setWriteReviewVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [customerReviews, setCustomerReviews] = useState(product.customer_reviews);
  const [products, setProduct] = useState({});

  const handleDescButtonClick = () => {
    setDescriptionVisible(true);
    setReviewsVisible(false);
    setWriteReviewVisible(false);
  };

  const handleReviewsButtonClick = () => {
    setDescriptionVisible(false);
    setReviewsVisible(true);
    setWriteReviewVisible(false);
  };

  const handleWriteReviewButtonClick = () => {
    setDescriptionVisible(false);
    setReviewsVisible(true);
    setWriteReviewVisible(true);
  };

  const handleReviewSubmit = () => {
    const newReview = {
      username: username,
      rating: 4,
      comment: comment,
    };

    // Create a new array with updated reviews
    const updatedReviews = [...customerReviews, newReview];

    axios
      .put(`https://electon-server.onrender.com/Products/${product.id}`, { customer_reviews: updatedReviews })
      .then((response) => {
        console.log(response);
        // Handle success response if needed
        console.log(response.data);
        // Update the state with the updated reviews
        setCustomerReviews(updatedReviews);
        handleReviewsButtonClick(true)
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });

    // Reset form values
    setUsername('');
    setComment('');
  };

  const handleImageClick = (imageUrl) => {
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: imageUrl });
  };



  const [state, dispatch] = useReducer(productReducer, initialStates);



  const handleAddToCart = () => {
    const payload = {
      color: state.selectedColor,
      size: state.selectedSize,
      quantity: state.selectedQuantity,
      price: product.price * state.selectedQuantity,
      ...product,
    }

    axios
      .post('https://electon-server.onrender.com/cartArr', payload)
      .then((response) => {
        console.log(response.data);

        alert('Item added to cart successfully!');
      })
      .catch((error) => {
        console.error(error);

        alert('Item already added to cart!');
      });
  };


  const [wishproducts, setWishproducts] = useState([]);

  const checkWishlist = () => {
    axios
      .get('https://electon-server.onrender.com/wishlistArr')
      .then((response) => {
        const wishlistArr = response.data;
        const foundProduct = wishlistArr.find((item) => item.id === product.id);
        setIsInWishlist(foundProduct !== undefined);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    checkWishlist();
    fetchProducts(); // Fetch wishlist items on initial load
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('https://electon-server.onrender.com/wishlistArr');
      setWishproducts(res.data);
    } catch (error) {
      console.log('Error fetching products:', error);
    }
  };

  const handleAddWishlist = () => {
    const payload = {
      color: state.selectedColor,
      size: state.selectedSize,
      quantity: state.selectedQuantity,
      price: product.price * state.selectedQuantity,
      ...product,
    };

    axios
      .post('https://electon-server.onrender.com/wishlistArr', payload)
      .then((response) => {
        console.log(response.data);
        setIsInWishlist(true);
        fetchProducts(); // Fetch updated wishlist items after adding an item
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleRemoveWishlist = () => {
    axios
      .delete(`https://electon-server.onrender.com/wishlistArr/${product.id}`)
      .then((response) => {
        console.log(response.data);
        setIsInWishlist(false);
        fetchProducts(); // Fetch updated wishlist items after removing an item
      })
      .catch((error) => {
        console.error(error);
      });
  };
  const handleDecrementQuantity = () => {
    if (state.selectedQuantity > 0) {
      dispatch({ type: 'DECREMENT_QUANTITY' });
    }
  };

  const handleIncrementQuantity = () => {
    dispatch({ type: 'INCREMENT_QUANTITY' });
  };


  const [selectedColor, setSelectedColor] = useState(null);

  const handleColorClick = (color) => {
    if (selectedColor === color) {
      setSelectedColor(null); // Deselect the color if it is already selected
    } else {
      setSelectedColor(color); // Select the color if it is not already selected
    }
  };
  const handleSizeClick = (size) => {
    if (selectedSize === size) {
      setSelectedSize(null); // Deselect the size if it is already selected
    } else {
      setSelectedSize(size); // Select the size if it is not already selected
    }
  };

  return (

    <Box className="detail_page_main_container">
      <Box className="detail_page_navbar">

      </Box>
      <Box className="detail_page_first_container">
        <Box className="detail_page_image_container">
          <Box className="big_img">
            <Image className="main_img" src={state.selectedImage || product.image[0]} />
          </Box>
          <Box className="two_img">
            {product.image.map((imageUrl, index) => (
              <Image
                className="img_first"
                src={imageUrl}
                onClick={() => handleImageClick(imageUrl)}
                key={index}
                alt={`Image ${index + 1}`}
              />
            ))}
          </Box>
        </Box>
        <Box className="product_detail_container">
          <Box>
            <Box className="product_title_div">
              <Text as="h1">{product.name}</Text >
            </Box>
            <Box className="product_price_div">
              <Text as="h1">${product.price}</Text >
            </Box>
            <Box className="reviews_div">
              <span>
                {product.review_star >= 1 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                {product.review_star >= 2 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                {product.review_star >= 3 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                {product.review_star >= 4 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                {product.review_star >= 5 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
              </span>
              <Text>{product.review_star >= 1 ? " " : "No reviews"}</Text>
            </Box>
            <Box className="availability_div">
              <Text as="h3">
                Availability: </Text ><AiOutlineCheck color="green" size={'20px'} /> <Text as="h3" className='in_stock'>In stock</Text >

            </Box>
            <Box className="left_products_div">
              <Text as="h4">Hurry up! only {product.id * 5} product left in stock!</Text >
            </Box>
            <hr />
            <Box className="product_color_div">
              <Text as="h3">Color:</Text>
              {product.color.map((color, index) => (
                <Button
                  key={index}
                  style={{ background: color }}
                  className={selectedColor === color ? 'selected' : ''}
                  onClick={() => handleColorClick(color)}
                ></Button>
              ))}
            </Box>

            <Box className="product_size_div">
  <Text as="h3">
    Size:
    {product.size && product.size.length > 0 ? (
      product.size.map((size, index) => (
        <Button
          onClick={() => handleSizeClick(size)}
          key={index}
          className={selectedSize === size ? 'selected' : ''}
        >
          {size}
        </Button>
      ))
    ) : (
      <span>No sizes available</span>
    )}
  </Text>
</Box>
            <Box className="product_quantity_div">
              <Text as="h3">
                Quantity:
                <span className='quantity_span'>
                  <Button className='red_btn' onClick={handleDecrementQuantity}>-</Button>
                  <Button className='value_btn'>{state.selectedQuantity}</Button>
                  <Button className='inc_btn' onClick={handleIncrementQuantity}>+</Button>
                </span>
              </Text >
            </Box>
            <Box className="button_div">
              <Button onClick={handleAddToCart}>Add to cart</Button>
              <Button onClick={handleAddToCart}>Buy it now</Button>
              {isInWishlist ? (
                <Button className='wishlist_btn_del' onClick={handleRemoveWishlist}>
                  <AiFillHeart size={'30px'} color="#eda515" />
                </Button>
              ) : (
                <Button className='wishlist_btn_add' onClick={handleAddWishlist}>
                  <AiOutlineHeart size={'30px'} color="black" />
                </Button>
              )}

            </Box>
            <hr />
            <Box className="sku_div">
              <Text as="h3">
                Sku: <span>01133-9-9</span>
              </Text >
            </Box>
            <Box className="category_div">
              <Text as="h3">
                Category: <span>20% off, 49% off {product.category}</span>
              </Text >
            </Box>
            <Box className="share_div">
              <Text as="h3">
                Share: </Text >
              <Button >
                <AiFillGoogleCircle size={'25px'} />
              </Button>
              <Button>
                <BsFacebook size={'22px'} />
              </Button>
              <Button>
                <RiWhatsappFill size={'25px'} />
              </Button>

            </Box>
          </Box>
        </Box>
        <Box className="detail_page_second_container">
          <Box className='rev_btn_div'>
            <Button className='desc_btn' onClick={handleDescButtonClick}>Description</Button>
            <Button className='reviews_btn' onClick={handleReviewsButtonClick}>Reviews</Button>
          </Box>
          <Box className='D_R_WR_div'>
            {isDescriptionVisible && (
              <Box className='description_show_div'>
                <Text as="h3">Product Description:</Text >
                <Text>{product.description}</Text>
              </Box>
            )}
            {isReviewsVisible && (
              <Box className='con_review_div'>
                <Text as="h3">Customer reviews</Text >
                <div className="review_show_div">
                  {customerReviews.map((review, index) => (
                    <div key={index}>
                      {/* <h3>{review.username}</h3> */}
                      <Box className='reviews_div'>
                      <h4>{review.username}: </h4>
                      
                        {review.rating >= 1 ? <AiFillStar size={'2px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 2 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 3 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 4 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 5 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                     
                      
                      </Box>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>

                {!isWriteReviewVisible && (
                  <Button className='write_review_btn' onClick={handleWriteReviewButtonClick}>Write a review</Button>
                )}
                {isWriteReviewVisible && (
                  <Box className='write_review_div'>
                    <Input type="text" placeholder='User Name..' value={username} onChange={(e) => setUsername(e.target.value)} />
                    <Textarea placeholder='Write your reviews...' lineHeight={1} value={comment} onChange={(e) => setComment(e.target.value)} />
                    <Button className='submit_review_btn' onClick={handleReviewSubmit}>Submit</Button>
                  </Box>
                )}
              </Box>
            )}
          </Box>
        </Box>



        <Box className="detail_page_third_container">
          <Box m="0.5rem" w="100%" h="90vh">
            <h2>Wishlist Product</h2>
            <div>

              {wishproducts.length > 0 && (
                <div
                  style={{
                    display: "flex",

                    textAlign: "left",

                    overflow: "hidden"
                  }}
                >
                  {wishproducts.map((elm) => {
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
                        <Box mt="1rem" lineHeight={"2rem"}>
                          <h3>{elm.name.slice(0, 26)}</h3>
                          <h3>{elm.price}</h3>
                          <Box className="reviews_div">
                            <span>
                              {product.review_star >= 1 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                              {product.review_star >= 2 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                              {product.review_star >= 3 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                              {product.review_star >= 4 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                              {product.review_star >= 5 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                            </span>
                            <Text>{product.review_star >= 1 ? " " : "No reviews"}</Text>
                          </Box>
                        </Box>


                      </Box>
                    );
                  })}
                </div>
              )}
            </div>
          </Box>
          <Box className="detail_page_footer">

          </Box>
        </Box>
      </Box>
    </Box>
  );
}
