import React from 'react';
import { AiOutlineStar, AiOutlineCheck, AiTwotoneCheckCircle, AiOutlineHeart, AiFillGoogleCircle } from 'react-icons/ai';
import { BsFacebook } from 'react-icons/bs';
import { RiWhatsappFill } from 'react-icons/ri';
import './ProductDetail.css';

export default function ProductDetail() {
    return (

        <div  >


            <div className="detail_page_main_container">


                <div className="detail_page_first_container">

                    <div className="detail_page_image_container">
                        <div className="big_img">
                            <img className='main_img' src='https://m.media-amazon.com/images/I/61xf2zTjBeL._SX679_.jpg' />
                        </div>

                        <div className="two_img">
                            <img className='img_first' src='https://m.media-amazon.com/images/I/31n4QmhrpBL._SY300_SX300_QL70_FMwebp_.jpg' />
                            <img className='img_second' src='https://m.media-amazon.com/images/I/41Pny+-hUxL.jpg' />
                        </div>

                    </div>
                    <div className='product_detail_container'>


                        <div className='product_title_div'>
                            <h1 > Play game </h1>
                        </div>
                        <div className='product_price_div'>
                            <h1 > $11.45 </h1>
                        </div>
                        <div className='reviews_div'>
                            <span><AiOutlineStar size={'25px'} color='
#eda515 '/> <AiOutlineStar size={'25px'} color='
#eda515 '/> <AiOutlineStar size={'25px'} color='
#eda515 '/> <AiOutlineStar size={'25px'} color='
#eda515 '/> <AiOutlineStar size={'25px'} color='
#eda515 '/> </span> <p>  No reviews</p>
                        </div>
                        <div className='availability_div'>

                            <h3>Availability: <span> <AiOutlineCheck color='green' size={'20px'} /> In stock </span> </h3>
                        </div>
                        <div className='left_products_div' >
                            <h4>Hurry up! only 34 product left in stock!</h4>
                        </div>
                        <hr />
                        <div className='product_color_div'>

                            <h3>Color: <span><AiTwotoneCheckCircle color='black' size={'20px'} /></span><span><AiTwotoneCheckCircle color='red' size={'20px'} /></span><span><AiTwotoneCheckCircle color='yellow' size={'20px'} /></span>




                            </h3> </div>
                        <div className='product_size_div'> <h3> Size: <span> 30</span> <span> 40</span> <span> 50</span> <span> 60</span> </h3></div>
                        <div className='product_quantity_div'>
                            <h3>Quntity: <button>-</button><span>2</span> <button>+</button> </h3>
                        </div>
                        <div className='button_div'>
                            <button>Add to cart</button>
                            <button>Buy it now</button>
                            <button className='wishlist_btn'><AiOutlineHeart size={'30px'} color='black' /></button>
                        </div>
                        <hr />
                        <div className='sku_div'>
                            <h3>Sku: <span>01133-9-9</span></h3>
                        </div>
                        <div className='category_div'>
                            <h3>Category: <span> 20% off,  49%off  Alex remote</span></h3>
                        </div>
                        <div className='share_div'> <h3>
                            Share:
                            <span><AiFillGoogleCircle size={'25px'} /></span> <span><BsFacebook size={'22px'} /> </span> <span><RiWhatsappFill size={'25px'} /></span>
                        </h3>
                        </div>






                    </div>


                    <div className="detail_page_second_container">

                        <div>

                        </div>

                    </div>

                    <div className="detail_page_third_container">

                        <div>

                        </div>

                    </div>


                </div>


            </div>
        </div>
    )
}



