import React from 'react'
import '../Footer/footer.css'
import LogoW from '../images/Logo-Fashion-White.png'
import { FaRegCopyright } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";


function Footer() {
    return (
        <div className='container-fluid bg-dark '>
            <div className='container footer'>

                <div className='row py-5'>
                    <div className='col-sm-6 col-lg-3'>
                        <img src={LogoW} height={50} />
                        <p className='mt-4 '>101, Retro street, Sunny Isles Beach, FL 33160, United States</p>
                        <p >Zodiac@company.com</p>
                        <p >031-965-456</p>
                    </div>
                    <div className='col-sm-6 col-lg-3'><h5 className='fw-bold'>Shopping & Categories</h5>
                        <p className='mt-4 '>Men's Shopping</p>
                        <p>Women's Shopping</p>
                        <p>Kid's Shopping</p>
                        <p>All Variety</p>

                    </div>
                    <div className='col-sm-6 col-lg-3'><h5 className='fw-bold'>Explore Us</h5>
                        <p className='mt-4 '>Home</p>
                        <p>About Us</p>
                        <p>Products</p>
                        <p>Contact Us</p></div>
                    <div className='col-sm-6 col-lg-3'><h5 className='fw-bold'>Help & Support</h5>
                        <p className='mt-4 '>Help</p>
                        <p>FAQ's</p>
                        <p>Shipping</p>
                        <p>Tracking</p></div>

                </div>
                <hr />

                <div className='footer-txt'>
                    <p>Copyrights <FaRegCopyright />	2022 Zodiac Co., Ltd. All Rights Reserved.  </p>
                    <p>Developed by: <span> Joseph Benny </span> </p>
                    <div className='d-flex justify-content-center'>
                        <a href='https://github.com/JosephBenny28' target='blank'><FaGithub /></a>
                        <a href='https://www.linkedin.com/in/joseph-benny-c-2aa2241b6/' target='blank'><FaLinkedin /></a>
                        <a href='https://twitter.com/JOSEPHBENNY28' target='blank'> <FaTwitter /></a>
                        <a href='https://www.instagram.com/_ben_ny_28/' target='blank'> <FaInstagram /></a>
                    </div>

                </div>
                <hr />

            </div>



        </div>
    )
}

export default Footer