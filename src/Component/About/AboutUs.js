import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";
import './about.css'
import leatherbag from "../images/explore-image-01.jpg"
import womenbag from "../images/explore-image-02.jpg"
import { Link } from 'react-router-dom';

function AboutUs() {
  return (
    <>
      <div className='container my-5 py-5'>
        <div className='row'>
          <div className='col-lg-6 about-des '>
            <h1 className='text-uppercase fw-bold '>Explore our products</h1>
            <p className='text-muted'>A vibrant, knee-length sundress with a floral print and a sweetheart neckline. The dress features a fitted bodice and a flared skirt, creating a feminine and playful silhouette. Its lightweight fabric makes it perfect for a summer day out.</p>
            <h5 className='align-item-center fw-bold'> <FaAngleDoubleRight /> Elevate your style at our fashion sanctuary.</h5>
            <p className='text-muted'>A cozy, oversized sweater in a rich burgundy color. It has a chunky knit texture and a relaxed fit, providing both comfort and style. The sweater features a turtleneck and ribbed cuffs, making it a perfect choice for a chilly autumn evening.</p>
            <p className='text-muted'>A sleek and tailored navy blue suit, consisting of a single-breasted blazer and matching trousers. The blazer is adorned with a notched lapel and has a slim fit, while the trousers are straight-legged and sit comfortably at the waist.</p>
            <button className='btn btn-outline-dark' ><Link to="/" className="nav-link"  >Discover More</Link> </button>
          </div>

          <div className='col-lg-6 des-bag '>
            <div className='row'>
              <div className='col-6 des-txt' >
                <h3>Leather Bags</h3>
                <p className='text-muted'>Latest Collection</p>
              </div>
              <div className='col-6 about-img' > <img  src={leatherbag} alt='Leather items' /> </div>
              <div className='col-6 about-img'><img src={womenbag} alt='Leather items' /></div>
              <div className='col-6 des-txt'><h3>Elegant Outfit</h3>
                <p className='text-muted'>Large Collection</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    
    </>
  )
}

export default AboutUs