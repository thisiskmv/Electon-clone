import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./PopularProducts.css";
import { Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { BsFillCircleFill, BsCircle } from 'react-icons/bs';
import ReviewComp from "./ReviewComp"
// import black_img from "./blck_img.png"
const PopularProducts = () => {
  const [catArr, setCatArr] = useState([]);
  const [productData, setProductData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);

  useEffect(() => {
    axios.get('https://electon-server.onrender.com/products')
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
    <div>
      <div className='popularProductHeading'>
        <h2 onClick={() => setCatArr([])}>Popular Products</h2>
        <div className='categories'>
          <Button value="camera" onClick={() => filterCategory("camera")}>Cameras</Button>
          <Button value="laptop" onClick={() => filterCategory("laptop")}>Laptops</Button>
          <Button value="tablet" onClick={() => filterCategory("tablet")}>Tablets</Button>
          <Button value="mouse" onClick={() => filterCategory("mouse")}>Mouse</Button>
        </div>
      </div>
      <div className="box">
        <div>
          <div className="grid-container">
            {currentProducts.map((elm) => (
              // <Link to={`/product/${elm.id}`}>
              <div className="box-item" key={elm.id}>
                <div className="image-container">
                  <img className="image" src={elm.image[0]} alt="" />
                </div>
                <div className="box-item-content">
                  <h3>{elm.name.slice(0, 26)}</h3>
                  <h3>${elm.price}</h3>
                  <div className="star-container">
                    {Array.from({ length: 5 }, (_, i) => (
                      <span key={i}>
                        {elm.review_star >= i + 1 ? (
                          <AiFillStar size={'20px'} color="grey" />
                        ) : (
                          <AiOutlineStar size={'20px'} color="grey" />
                        )}
                      </span>
                    ))}
                    <p>{elm.review_star >= 1 ? " " : "No reviews"}</p>
                  </div>
                </div>
              </div>
              // </Link>
            ))}
          </div>
        </div>
        <div className="pagination">
          {catArr.length > 0 ? (
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={catArr.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          ) : (
            <Pagination
              productsPerPage={productsPerPage}
              totalProducts={productData.length}
              currentPage={currentPage}
              paginate={paginate}
            />
          )}



        </div>

        <div className='big_img'>
          <img src='https://lh3.googleusercontent.com/pw/AJFCJaX_JruIPea5PsEyi8BGVsk7Xed7afdph3EGhZjaa4_Vzm_zvDewIQuEd_hqn-y17m6WkTSyoMYCx4gHMWdNIls0iy5Zz6JBMzLLIB8CL_0-_q8w1Mw2a4nv9wO1TDuMw_q21Di8y7poC5LjuT1VIpOd=w1352-h415-s-no?authuser=0' />
        </div>


        <div className='offer_div'>
          <img src="https://lh3.googleusercontent.com/eCQ5mH_L2SH_VG1YIFx5lMrEt9aTrRiF2sHFBS_fWnnysHNAnaQg7f59vOfjGAxKVI4dPGI63foWXgs1jdjVNB-wEO-333pH7K7Hi1eM1SydKvtwoFj93MXDbXMQhACMfAKKU6SZi7YSQESVTMUUUxPVcROquJkYw3S0SOzUF5JeLulmzP0QGVS7cC-mIKWDY-G5CA-fp3oqHNNqbxTRhRv0UtbxGU_PLRVfEOzx8E2HnHwV70kdmQEryjWZmdUdbzlFU2fnF8S-g4ntBjCEk5IijphRWcm9fGneJxk08coLFNvJt4l43K34lpyY2PCllFYuo9D8FNfAGu1DYLT1wanqgN2ebU56DA0muyB_m29F71U13S54QbqhP2bEeAa0HuT1A98EcvllC1BBbE6g1bnOdRZ8V8ovPMkWvt2K8sLptc0jOLBzimQF5zR1ArjrjEawArGSCXlwCg4khv57vJymoBBrkfZVUSaTUe2D11fbD-uAkio2nGBdeMbN056CepAtccJPk87jOIJY-LdneQwU8nE8n8UdOY71pLneND4B3BUHfTMeg56BuS-EUnEr9y5mHZM6G5AsbvreIscmkgVCXT49I370KUluhXfa-rp0k4lpbDnMhFKxrCy_A_FYtJvoh513ggMOa8iVt1nYi5QuN_-2JIQOjdN05vonBgcd2LbuWyFKGLvphot1c1_hys5v1iTz-_oFnjl62uvAT5B_guahQ8vL4j-VICjbmgXV5W8r5KtVIdA1C5wawYc92cmKAEGT9WkIMuJJ7hyz6PeX-1DxSfIu4lO3HpLb8A0eq4RQdqEWpoxVv8UZoKxOBQC1S3OMEzu7ziV8EMOAQ52abyNyMkZMl1k2JY3gqNtlkLnCRNeJW0H9dSijcQGhAbFX0ezCga0v7eyHLfoBHrs4vAsH_I93qdIM2DUUiFpMHaT0wp2JpNq3pa0qgC2JTtg88HNDs3Y2jHq8NnETvMWtLHD9qYwZwtVNgWh8SQSO8JQ2ple6fg=w1368-h171-s-no?authuser=1https://photos.google.com/u/1/search/_tra_/photo/AF1QipNn452gbsbqtxy8A5JWZ2smXAmpF7rNyNNf5tKn" alt="" />
        </div>

        <div>
          <ReviewComp />
        </div>
      </div>
    </div>
  );
};

const Pagination = ({ productsPerPage, totalProducts, currentPage, paginate }) => {
  const pageNumbers = Math.ceil(totalProducts / productsPerPage);
  const limitedPageNumbers = Math.min(pageNumbers, 3);

  return (
    <nav className="pagination">
      {Array.from({ length: limitedPageNumbers }, (_, i) => {
        const pageNumber = i + 1;
        const isActive = pageNumber === currentPage;

        return (
          <a
            key={pageNumber}
            href="#"
            className={`page-link ${isActive ? 'active' : ''}`}
            onClick={() => paginate(pageNumber)}
          >
            {isActive ? <BsFillCircleFill size={"18px"} color='#eda515' /> : <BsCircle color='rgb(216, 216, 216)' size={"17px"} />}
          </a>
        );
      })}
    </nav>
  );
};


export default PopularProducts;


