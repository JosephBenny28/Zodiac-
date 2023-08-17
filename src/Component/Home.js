import React from 'react'
import Products from './Product/Product'
import AboutUs from './About/AboutUs'
import Contact from './Contact/Contact';

function Home() {
  return (
    <  >
      <div className='container-fluid lef-ban  '>
        <div className='home-cap'  >
          <h1 className='display-3 fw-bold  '> We are Zodiac Fashion</h1>
          <p className=' display-5  '>Enjoy your shopping</p>
        </div>
      </div>
      <Products />
      <AboutUs />
      <Contact/>
    </>
  )
}

export default Home