import React, { useEffect } from 'react'
import { useLocation , Link} from 'react-router-dom';
import "./product.css"
import { useDispatch } from 'react-redux';
import { add } from '../../Store/CartSlice';

function ViewProduct() {

  const dispatch = useDispatch();

  const location = useLocation();
  console.log(location)

  const productData = location?.state?.data;


  useEffect(() => {
    console.log(location.state.data)
  }, [location?.state?.data])

  const addToCart = (productData) => {
    console.log("productData", productData)
    //dispatch add action
    dispatch(add(productData))
  }

  return (
    <>
      <div className='container view-product '>
        <div className='row'>
          <div className='col-md-5 ' >
            <img src={productData.image} className="  " alt={productData.title} />
          </div>
          <div className='col-md-7 view-des '>
            <h4 className="card-title fw-bold">{productData.heading}</h4>
            <h3 className="card-title py-3"> {productData.title}</h3>
            <p className="card-text">{productData.description}</p>
            <p className="card-text">${productData.price}</p>
            <button className='btn btn-outline-dark' onClick={() => addToCart(productData)}> Add to cart</button>
            <Link to="/cart" className="btn go-cart mx-3">Go to cart</Link>
          </div>
        </div>
      </div>

    </>
  )
}

export default ViewProduct