import React from 'react'
import logo from "./images/Logo-Fashion-Black.png"
import {  Link } from "react-router-dom";
import { RiLoginBoxLine } from "react-icons/ri";
import { FaCartShopping } from "react-icons/fa6";
import "../Component/Nav.css"
import {  useSelector } from 'react-redux/es/hooks/useSelector';
export default function Navs() {

  const cartProducts=useSelector(state=>state.cart)
  return (
    <>

      <div className='container-fluid nav-top'>
        <div className='container-lg '>
          <nav className="navbar  navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid nav ">
              <Link className="navbar-brand " to="/"><img src={logo} height={60} alt='Hexaware' /></Link>
              <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav fw-bold gap-lg-4  gap-sm-2">

                  <li className="nav-item">
                    <Link to="/" className="nav-link" aria-current="page">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/product" className="nav-link">Product</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/aboutUs" className="nav-link">About Us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact</Link>
                  </li>

                  <Link type="button"  to="/login" className="btn btn-outline-dark ms-2 my-2 my-lg-0"><RiLoginBoxLine /> Login</Link>
                  <Link type="button"  to="/cart" className="btn btn-outline-dark ms-2 my-2 my-lg-0"><FaCartShopping /> Cart {cartProducts?.cart?.length}</Link>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  )
}
