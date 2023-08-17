import React from 'react'
import '../Contact/contact.css'
import con1 from '../images/instagram-01.jpg'
import con2 from '../images/instagram-02.jpg'
import con3 from '../images/instagram-03.jpg'
import con4 from '../images/instagram-04.jpg'
import con5 from '../images/instagram-05.jpg'
import con6 from '../images/instagram-06.jpg'
import { FaPaperPlane } from "react-icons/fa";
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';




function Contact() {
  return (
    <>
      < div className='container my-3 py-1'>
        <div className='pb-4'>
          <div className='mb-5'><h2 className='fw-bold text-uppercase'>Contact Us </h2>
            <p className='text-muted'>Details to details is what makes Zodiac Fashion different from the other stores</p>
          </div>
          <hr />
          <div className='con-imgsec py-5'>


            <div className='col-2 cont-imgs '>
              <div className='con-txt' >
                <h5> Grunge</h5>
              </div>
              <img className=' con-img' src={con1} alt='Contact 1' />
            </div>
            <div className='col-2 cont-imgs '>
              <div className='con-txt' >
                <h5> Elegant </h5>
              </div>
              <img className=' con-img' src={con2} alt='Contact 1' />
            </div>
            <div className='col-2 cont-imgs '>
              <div className='con-txt' >
                <h5> Retro </h5>
              </div>
              <img className=' con-img' src={con3} alt='Contact 1' />
            </div>
            <div className='col-2 cont-imgs '>
              <div className='con-txt' >
                <h5> Punk </h5>
              </div>
              <img className=' con-img' src={con4} alt='Contact 1' />
            </div>
            <div className='col-2 cont-imgs '>
              <div className='con-txt' >
                <h5> Hipster</h5>
              </div>
              <img className=' con-img' src={con5} alt='Contact 1' />
            </div>
            <div className='col-2 cont-imgs '>
              <div className='con-txt' >
                <h5> Trendy </h5>
              </div>
              <img className=' con-img' src={con6} alt='Contact 1' />
            </div>


          </div>
          <hr/> 

        </div>




        <div className='my-4 row '>
          <div className=' col-lg-8 con-info '><h1 className='fw-bold'>By Subscribing To Our Newsletter You Can Get 30% Off</h1>
            <p className='text-muted pt-3'>Details to details is what makes Zodiac Fashion different from the other stores</p>
            <input className='con-inp mt-3' placeholder=' Your Name'></input>
            <input className='con-inp ms-3' placeholder=' Your Email Address'></input>
            <Button className="snd-btn" variant="outline-dark"><Link to="/" className="nav-link"  ><FaPaperPlane /></Link> </Button>
          </div >
          <div className='col-lg-4 mt-md-5'>
            <div className='row'>
              <div className='col-md-6'>
                <p className='fw-bold mb-0'>Store Location :</p>
                <p className='text-muted'>Sunny Isles Beach, FL 33160, United States</p>
                <p className='fw-bold mb-0 mt-4'>Phone :</p>
                <p className='text-muted'>010-020-0340</p>
                <p className='fw-bold mb-0 mt-4'>Office Location:</p>
                <p className='text-muted'>North Miami Beach</p>
              </div>
              <div className='col-md-6'>
                <p className='fw-bold mb-0'>Work Hours:</p>
                <p className='mb-0 text-muted'>07:30 AM - 09:30 PM</p>
                <p className='text-muted' >Daily</p>
                <p className='fw-bold mb-0 mt-4'>Email:</p>
                <p className='text-muted'>colths@zodiac.com</p>
                <p className='fw-bold mb-0 mt-4'>Website</p>
                <p className='text-muted '>Zodiac.com</p>
              </div>

            </div>
          </div>




        </div>
      </div >
    
    </>

  )
}

export default Contact