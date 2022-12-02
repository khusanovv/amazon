import axios from 'axios';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import "./products.css";
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';

const Products = () => {
  
  const [allProductsData, setAllProductsData] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:8000/v2/allproducts")
      .then(response => setAllProductsData(response.data))
      .catch(err => console.log(err))
  }, [])

  return (

    <div className='nimadir'>
      <>
     <div className="ProductRating">
            <h4>Department</h4>
            <p>Any Department </p>
            <p>Video Games</p>
            <p>Nintendo Switch Consoles, Games & Accessories</p>
            <h4 className="ProductRatingtitle">Nintendo Switch Games</h4>
            <br />
            <h4>Customer Reviews</h4>
            <br />
            <AiFillStar className='rating-svg' />
            <AiFillStar className='rating-svg' />
            <AiFillStar  className='rating-svg' />
            <AiFillStar className='rating-svg'/>
            <AiOutlineStar  className='rating-svg' />
            <br />
            <AiFillStar  className='rating-svg' />
            <AiFillStar  className='rating-svg' />
            <AiFillStar  className='rating-svg' />
            <AiOutlineStar className='rating-svg'/>
            <AiOutlineStar  className='rating-svg'/>
            <br />
            <AiFillStar className='rating-svg' />
            <AiFillStar className='rating-svg' />
            <AiOutlineStar  className='rating-svg' />
            <AiOutlineStar  className='rating-svg' />
            <AiOutlineStar  className='rating-svg' />
            <br />
            <AiFillStar  className='rating-svg' />
            <AiOutlineStar  className='rating-svg' />
            <AiOutlineStar  className='rating-svg' />
            <AiOutlineStar  className='rating-svg' />
            <AiOutlineStar  className='rating-svg' />
            <br />
            <br />
            <h4>Featured Brands</h4>
            <ul>
              <li className="productList">
                <input type="checkbox" />
                <p>Nintendo</p>
              </li>
              <li className="productList">
                <input type="checkbox" />
                <p>SEGA</p>
              </li>
              <li className="productList">
                <input type="checkbox" />
                <p>Nighthawk Interactive</p>
              </li>
              <li className="productList">
                <input type="checkbox" />
                <p>Maximum Games</p>
              </li>
              <li className="productList">
                <input type="checkbox" />
                <p>Outright Games</p>
              </li>
              <li className="productList">
                <input type="checkbox" />
                <p>Ubisoft</p>
              </li>
              <li className="productList">
                <input type="checkbox" />
                <p>WARNER BROS</p>
              </li>
              <p>See more</p>
            </ul>
            <br />
            <h4>Price</h4>
            <br />
            <ul>
              <li>Under $10 </li>
              <li>$10 to $15</li>
              <li>$15 to $25</li>
              <li>$25 to $35</li>
              <li>$35 & Above</li>
            </ul>
            <div className="btngroup">
              <input type="text" placeholder="$Min" />
              <input type="text" placeholder="$Max" />
              <button>Go</button>
            </div>
          </div>
    </>,
    <div className='cartt'>
      {
        allProductsData.map(product => 
          
         <div className='cart-wrapper'>
         
           <Link className='products-cart' to={`/seemore/products/${product._id}`} key={product._id}>
            <img className='cartt__img' src={product?.image[0]?.url} alt="" />
            <h1>{product.name}</h1>
            {
            product.ratings % 1 === 0 ?
              new Array(product.ratings).fill("#").map(() => 
                <BsStarFill key={uuidv4()}/>
              ) : 
              <>
              { 
                new Array(Math.floor(product.ratings)).fill("#").map(() => 
                    <BsStarFill key={uuidv4()}/>
                )
              }
              <BsStarHalf/>
              </>
            }
          </Link>  
         </div>
         
        )
      }
    </div>
    </div>
  )
}

export default Products