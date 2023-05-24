import React, { useReducer, useState } from 'react';
import { AiFillStar, AiOutlineStar, AiOutlineCheck, AiTwotoneCheckCircle, AiOutlineHeart, AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import { Box, Button, Image, Input, Textarea } from '@chakra-ui/react';
import axios from 'axios';
import { initialStates, productReducer } from '../Redux/reducer';
import '../Style/ProductDetail.css';

export default function ProductDetail({ product }) {
  const [isDescriptionVisible, setDescriptionVisible] = useState(true);
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
  
    // Create a new object with updated customer_reviews array
    const updatedProduct = {
      ...product,
      customer_reviews: [...product.customer_reviews, newReview]
    };
  
    axios
      .put(`https://electon-server.onrender.com/Products/${product.id}`, updatedProduct)
      .then((response) => {
        console.log(response);
        // Handle success response if needed
        console.log(response.data);
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });
  
    // Reset form values
    setUsername('');
    setComment('');
  };
  
  
  
  
  const [state, dispatch] = useReducer(productReducer, initialStates);

  const handleImageClick = (imageUrl) => {
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: imageUrl });
  };

  const handleAddToCart = () => {
    const payload = {
      color: state.selectedColor,
      size: state.selectedSize,
      quantity: state.selectedQuantity,
      price: product.price * state.selectedQuantity,
      ...product,
    }

    axios
      .post('https://electon-server.onrender.com/chartArr', payload)
      .then((response) => {
        console.log(response.data);
        alert('Item added to cart successfully!');
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred while adding item to cart!');
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

  return (
    
      <Box className="detail_page_main_container">
        <Box className="detail_page_first_container">
          <Box className="detail_page_image_container">
          <Box className="big_img">
              <Image className="main_img" src={state.selectedImage || product.image[0]} />
            </Box>
            <Box className="two_img">
              {product.image.map((imageUrl, index) => (
                <img
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
                <h1>{product.name}</h1>
              </Box>
              <Box className="product_price_div">
                <h1>${product.price}</h1>
              </Box>
              <Box className="reviews_div">
                <span>
                  {product.review_star >= 1 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                  {product.review_star >= 2 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                  {product.review_star >= 3 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                  {product.review_star >= 4 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                  {product.review_star >= 5 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                </span>
                <p>{product.review_star >= 1 ? " " : "No reviews"}</p>
              </Box>
              <Box className="availability_div">
                <h3>
                  Availability: <span> <AiOutlineCheck color="green" size={'20px'} /> In stock</span>
                </h3>
              </Box>
              <Box className="left_products_div">
                <h4>Hurry up! only {product.id * 5} product left in stock!</h4>
              </Box>
              <hr />
              <Box className="product_color_div">
                <h3>
                  Color:{product.color.map((color, index) => (
                    <Button
                      key={index}
                      style={{ background: color }}
                      className={state.selectedColor === color ? 'selected' : ''}
                    ></Button>
                  ))}
                </h3>
              </Box>
              <Box className="product_size_div">
                <h3>
                  Size: {product.size.map((size, index) => (
                    <button
                      key={index}
                      className={state.selectedSize === size ? 'selected' : ''}
                    >
                      {size}
                    </button>
                  ))}
                </h3>
              </Box>
              <Box className="product_quantity_div">
                <h3>
                  Quantity:
                  <span className='quantity_span'>
                    <Button className='red_btn' onClick={handleDecrementQuantity}>-</Button>
                    <Button className='value_btn'>{state.selectedQuantity}</Button>
                    <Button className='inc_btn' onClick={handleIncrementQuantity}>+</Button>
                  </span>
                </h3>
              </Box>
              <Box className="button_div">
                <Button onClick={handleAddToCart}>Add to cart</Button>
                <Button>Buy it now</Button>
                <Button className="wishlist_btn">
                  <AiOutlineHeart size={'30px'} color="black" />
                </Button>
              </Box>
              <hr />
              <Box className="sku_div">
                <h3>
                  Sku: <span>01133-9-9</span>
                </h3>
              </Box>
              <Box className="category_div">
                <h3>
                  Category: <span>20% off, 49% off Alex remote</span>
                </h3>
              </Box>
              <Box className="share_div">
                <h3>
                  Share:
                  <span>
                    <AiFillGoogleCircle size={'25px'} />
                  </span>{' '}
                  <span>
                    <BsFacebook size={'22px'} />
                  </span>{' '}
                  <span>
                    <RiWhatsappFill size={'25px'} />
                  </span>
                </h3>
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
                  <h3>Product Description:</h3>
                  <p>{product.description}</p>
                </Box>
              )}
              {isReviewsVisible && (
                <Box className='con_review_div'>
                  <h3>Customer reviews</h3>
                  <Box className='review_show_div'>
                    {product.customer_reviews.map((review, index) => (
                      <Box key={index}>
                        <h4>username: {review.username}</h4>
                        <h4>rating: {review.rating}</h4>
                        <p>{review.comment}</p>
                      </Box>
                    ))}
                  </Box>
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

          </Box>
        </Box>
      </Box>
      );
}


