
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./ReviewComp.css";
import { Button } from "@chakra-ui/react";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import Footer from './Footer';

export default function ReviewComp() {
    const [catArr, setCatArr] = useState([]);
    const [productData, setProductData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [productsPerPage] = useState(8);

    useEffect(() => {
        axios.get('https://electon-server.onrender.com/userArr')
            .then((res) => setProductData(res.data));
    }, []);

    const filterCategory = (value) => {
        const filtArr = productData.filter((item) => item.category === value);
        setCatArr(filtArr);
        setCurrentPage(1); // Reset current page when applying filters
    };

    // Pagination
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = catArr.length > 0 ? catArr.slice(indexOfFirstProduct, indexOfLastProduct) : productData.slice(indexOfFirstProduct, indexOfLastProduct);

    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    return (
        <>


            <div className="offer-grid-container">
                {currentProducts.map((elm) => (
                    <div className="offer-box" key={elm.id}>
                        <div className="image-box">
                            <img className="image" src={elm.image} alt="" />
                            <h3>{elm.user_name}</h3>
                        </div>
                        <div className="offer_comment">
                            <p>{elm.user_Comment}</p>
                        </div>
                    </div>
                ))}
            </div>

           <div className='company_div'>
            <img src="https://lh3.googleusercontent.com/f08z0SOnvlAnmLcVQ93z2b5Dyoi2I-eSdLBlB8Bbu3tRhkiy82i39wc7ejEqDbJlIZNdlnt3S6BIaSckV_KzwG0VpQ8RTb3yHGIiE-2FWCL4hkXbFhT-T2PS4vapY05UpmwJSX1_h56V3MMdkkhe5zVSvpg8OGGB1e-SkoHVjdZF-M7pwSGaBTBEcQiret6BIsI6yDrORkiU5kw8fBw54djX3STG-sXACZhmXKE5rClUzqqlOSH9H8RH0k-E4_4PynCc1RVnWOESgIlNiDrXHro9atQ-wq6hBsIMnS_ls-iK5i5PAYZxrZN4piK7l03-fze93Ckt_lrRGvSUeNjUdrBdBxhwFNXCREHHCw4GZ1-gl5CVO8F0hmCoVxrQDvnyW9Iq0X4xyqN_MH-DulPsuHNFIPtsztqtXsS9Lv1zliusZ3Lgt4VZdnzZ_i3E4WuHnciowsN8raf7f2HJsRsLqz9e3sFIAbjGq4hEF1lbgnVl9b0ZrAtqwVu7Om32vmhAAH145dK78ohJPQyg55A2N8Kk8fbafy7FjUMpl7RrNKNWbvEDeOrlw976PMn_Zx8DeWl9UbCoz5RxG_Om1RUJ4ttCWZyKna4MlOkE4Zx-Qxhrs9LdrC4anaBOYJ9tbpXZWiSNA7w9nsu0lEK86U1E9hecMAW7xNVs1QmH9Vjyj4lswjnk1O20MjWG_qP_IhB8V2cSTlKo-73eehyUJ_Idm7P0uxVRFNhAokNSqcX-6DTZieEMsJXLpYr8IDWl3mM27sUzzqUOIm1vuzIA8Jq9W4EzMFY5XK727YiBwQXYqcrupTvVcZQqSf-HpqbQU6pOTxg6nf6OJncWJaqfxGDNcH8kj4rLyBuqcQD3Lz9hFdeMaUHtF9Stw1e_Y-pp0OeJ4kNoKmze7kpJ9GA7CwAmcC_g5EZ7844aVoADVr6Pt1eKgCXZuSYCVkhSE_xQfpEZPHKZO1FV5GpV_y-DfrBtkdVen7PYrZGurdhhn739AHNdi7lZ_ntQ0g=w1376-h172-s-no?authuser=1" alt="" />
           </div>


            <div />
<Footer/>
        </>
    )
}
