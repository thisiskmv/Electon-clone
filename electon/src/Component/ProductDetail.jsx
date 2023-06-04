import React, { useEffect, useReducer, useState } from 'react';
import { AiFillHeart, AiFillStar, AiOutlineStar, AiOutlineCheck, AiTwotoneCheckCircle, AiOutlineHeart, AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
// import {
//   p, Alert,
//   AlertIcon,
//   AlertTitle,
//   AlertDescription, div, button, img, input, Textarea, div, Spacer
// } from '@chakra-ui/react';
import axios from 'axios';
import { initialStates, productReducer } from '../Redux/reducer';
import '../Style/ProductDetail.css';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

export default function ProductDetail({ product }) {
  const [selectedSize, setSelectedSize] = useState([]);
  const [isInWishlist, setIsInWishlist] = useState(false); const [isDescriptionVisible, setDescriptionVisible] = useState(true);
  const [isReviewsVisible, setReviewsVisible] = useState(false);
  const [isWriteReviewVisible, setWriteReviewVisible] = useState(false);
  const [username, setUsername] = useState('');
  const [comment, setComment] = useState('');
  const [customerRating, setCustomerRating] = useState('');
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
      rating: customerRating,
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

        setCustomerReviews(updatedProduct.customer_reviews)
        handleReviewsButtonClick()
      })
      .catch((error) => {
        // Handle error if needed
        console.error(error);
      });

    // Reset form values
    setUsername('');
    setComment('');
    setCustomerRating(' ');
  };



  const handleImageClick = (imageUrl) => {
    dispatch({ type: 'SET_SELECTED_IMAGE', payload: imageUrl });
  };

  const [state, dispatch] = useReducer(productReducer, initialStates);

  const navigate = useNavigate()

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

  const handleAddToBuy = () => {
    const payload = {
      color: state.selectedColor,
      size: state.selectedSize,
      quantity: state.selectedQuantity,
      price: product.price * state.selectedQuantity,
      ...product,
    }

    // axios
    //   .post('https://electon-server.onrender.com/cartArr', payload)
    //   .then((response) => {
    //     console.log(response.data);

        

    //   })
    //   .catch((error) => {
    //     console.error(error);

    //   });



    navigate('/cart')
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
    if (state.selectedQuantity > 1) {
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

    <div className="detail_page_main_container">
      <div className="detail_page_navbar">

      </div>
      <div className="detail_page_first_container">
        <div className="detail_page_image_container">
          <div className="big_img">
            <img className="main_img" src={state.selectedImage || product.image[0]} />
          </div>
          <div className="two_img">
            {product.image.map((imageUrl, index) => (
              <img
                className="img_first"
                src={imageUrl}
                onClick={() => handleImageClick(imageUrl)}
                key={index}
                alt={`img ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="product_detail_container">
          <div>
            <div className="product_title_div">
              <h1>{product.name}</h1 >
            </div>
            <div className="product_price_div">
              <h1>${product.price}</h1 >
            </div>
            <div className="reviews_div">

              {product.review_star >= 1 ? <AiFillStar size={'30px'} color="#eda515" /> : <AiOutlineStar size={'30px'} color="#eda515" />}
              {product.review_star >= 2 ? <AiFillStar size={'30px'} color="#eda515" /> : <AiOutlineStar size={'30px'} color="#eda515" />}
              {product.review_star >= 3 ? <AiFillStar size={'30px'} color="#eda515" /> : <AiOutlineStar size={'30px'} color="#eda515" />}
              {product.review_star >= 4 ? <AiFillStar size={'30px'} color="#eda515" /> : <AiOutlineStar size={'30px'} color="#eda515" />}
              {product.review_star >= 5 ? <AiFillStar size={'30px'} color="#eda515" /> : <AiOutlineStar size={'30px'} color="#eda515" />}

              <p>{product.review_star >= 1 ? " " : "No reviews"}</p>
            </div>
            <div className="availability_div">
              <h3>
                Availability: </h3 ><AiOutlineCheck color="green" size={'20px'} /> <h3 className='in_stock'>In stock</h3 >

            </div>
            <div className="left_products_div">
              <h4>Hurry up! only {product.id * 5} product left in stock!</h4 >
            </div>
            <hr />
            <div className="product_color_div">
              <h3>Color:</h3>
              {product.color.map((color, index) => (
                <button
                  key={index}
                  style={{ background: color }}
                  className={selectedColor === color ? 'selected' : ''}
                  onClick={() => handleColorClick(color)}
                ></button>
              ))}
            </div>

            <div className="product_size_div">
              <h3>
                Size:
                {product.size && product.size.length > 0 ? (
                  product.size.map((size, index) => (
                    <button
                      onClick={() => handleSizeClick(size)}
                      key={index}
                      className={selectedSize === size ? 'selected' : ''}
                    >
                      {size}
                    </button>
                  ))
                ) : (
                  <span>No sizes available</span>
                )}
              </h3>
            </div>
            <div className="product_quantity_div">
              <h3>
                Quantity:
                <span className='quantity_span'>
                  <button className='red_btn' onClick={handleDecrementQuantity}>-</button>
                  <button className='value_btn'>{state.selectedQuantity}</button>
                  <button className='inc_btn' onClick={handleIncrementQuantity}>+</button>
                </span>
              </h3 >
            </div>
            <div className="button_div">
              <button onClick={handleAddToCart}>Add to cart</button>
              <button onClick={handleAddToBuy}>Buy it now</button>
              {isInWishlist ? (
                <button className='wishlist_btn_del' onClick={handleRemoveWishlist}>
                  <AiFillHeart size={'30px'} color="#eda515" />
                </button>
              ) : (
                <button className='wishlist_btn_add' onClick={handleAddWishlist}>
                  <AiOutlineHeart size={'30px'} color="black" />
                </button>
              )}

            </div>
            <hr />
            <div className="sku_div">
              <h3>
                Sku: <span>01133-9-9</span>
              </h3 >
            </div>
            <div className="category_div">
              <h3>
                Category: <span>20% off, 49% off {product.category}</span>
              </h3 >
            </div>
            <div className="share_div">
              <h3>
                Share: </h3 >
              <button >
                <AiFillGoogleCircle size={'25px'} />
              </button>
              <button>
                <BsFacebook size={'22px'} />
              </button>
              <button>
                <RiWhatsappFill size={'25px'} />
              </button>

            </div>
          </div>
        </div>
        <div className="detail_page_second_container">
          <div className='rev_btn_div'>
            <button className='desc_btn' onClick={handleDescButtonClick}>Description</button>
            <button className='reviews_btn' onClick={handleReviewsButtonClick}>Reviews</button>
          </div>
          <div className='D_R_WR_div'>
            {isDescriptionVisible && (
              <div className='description_show_div'>
                <h3>Product Description:</h3 >
                <p>{product.description}</p>
              </div>
            )}
            {isReviewsVisible && (
              <div className='con_review_div'>
                <h3>Customer reviews</h3 >
                <div className="review_show_div">
                  {customerReviews.map((review, index) => (

                    <div key={index}>
                      {/* <h3>{review.username}</h3> */}
                      <div className='rating_div'>
                        <h4>{review.username}: </h4>


                        {review.rating >= 1 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 2 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 3 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 4 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}
                        {review.rating >= 5 ? <AiFillStar size={'20px'} color="#eda515" /> : <AiOutlineStar size={'20px'} color="#eda515" />}




                      </div>
                      <p>{review.comment}</p>
                    </div>
                  ))}
                </div>

                {!isWriteReviewVisible && (
                  <button className='write_review_btn' onClick={handleWriteReviewButtonClick}>Write a review</button>
                )}
                {isWriteReviewVisible && (
                  <div className='write_review_div'>
                    <input type="text" placeholder='User Name..' value={username} onChange={(e) => setUsername(e.target.value)} />

                    <input placeholder='Rating...' type='number' onChange={(e) => setCustomerRating(e.target.value > 5 ? alert("Please rate this product out of 5 ") : e.target.value)}></input>
                    <textarea typeof='text' placeholder='Write your reviews...' lineHeight={1} value={comment} onChange={(e) => setComment(e.target.value)} />

                    <button className='submit_review_btn' onClick={handleReviewSubmit}>Submit</button>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>



        <div className="detail_page_third_container">
          <div >
            <h2>Wishlist Product</h2>
            <div >

              {wishproducts.length > 0 && (
                <div className='wishlist_main_container' >
                  {wishproducts.map((elm) => {
                    return (
                      <div

                      >

                        <div >
                          <img
                            src={elm.image[0]}
                            width="200px"
                            height={"180px"}

                          />
                        </div>
                        {/* <Spacer /> */}
                        <div >
                          <h3>{elm.name.slice(0, 26)}</h3>
                          <h3>{elm.price}</h3>
                          <div className="reviews_div">

                            {product.review_star >= 1 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                            {product.review_star >= 2 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                            {product.review_star >= 3 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                            {product.review_star >= 4 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}
                            {product.review_star >= 5 ? <AiFillStar size={'25px'} color="#eda515" /> : <AiOutlineStar size={'25px'} color="#eda515" />}

                            <p>{product.review_star >= 1 ? " " : "No reviews"}</p>
                          </div>
                        </div>


                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
          <div className="detail_page_footer">

          </div>
        </div>
      </div>
    </div>
  );
}
