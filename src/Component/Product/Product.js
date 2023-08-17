import React, { useEffect, useState } from "react";
import { jsondata } from "./Products.js";
import './product.css';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { add } from '../../Store/CartSlice';

function Products() {
    const [gender, setGender] = useState('all')
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState(data);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    useEffect(() => {
        if (gender === 'all') {
            setFilter(jsondata)
        };

        if (gender === "men") {
            let mendata = jsondata.filter((data) => data.heading === `Men's Clothes`)
            console.log("mendata", mendata);
            setFilter(mendata);
        };

        if (gender === "women") {
            let womendata = jsondata.filter((data) => data.heading === `Women's Clothes`)
            console.log("womendata", womendata);
            setFilter(womendata);
        };

        if (gender === "kids") {
            let kiddata = jsondata.filter((data) => data.heading === `Kid's Clothes`)
            console.log("kidsdata", kiddata);
            setFilter(kiddata);
        };


    }, [gender])

    const viewProduct = (product) => {
        const data = { data: product }
        console.log(product);
        navigate(
            `/product/${product.id}`,
            { state: data }
        );
    }

    const addToCart = (product) => {
        //dispatch add action
        dispatch(add(product))
    }

    return (
        <div>
            <div className="container product-head pt-5 mt-5">
                <div className="row">
                    <div className="col-12 mb-3 ">
                        <h1 className="text-center display-3  fw-bolder text-uppercase ">New Arrivals</h1>
                    </div>
                </div>
                <div className="row justify-content-center mb-5 py-4">

                    <div className=" d-flex justify-content-center">
                        <button className="btn btnc btn-outline-dark me-2 " onClick={() => setGender("all")}>All</button>
                        <button className="btn btnc btn-outline-dark me-2 " onClick={() => setGender("men")}>Men</button>
                        <button className="btn btnc btn-outline-dark me-2 " onClick={() => setGender("women")}>Women</button>
                        <button className="btn btnc btn-outline-dark me-2 " onClick={() => setGender("kids")}>Kids</button>

                    </div>
                    <div className="col py-4">
                        <div className="row ">

                            {filter.map((product) => {
                                return (
                                    <div className=" col-sm-6 col-lg-3 p-3 my-3">
                                        <div >
                                            <div className="card " key={product.id} >                                                    
                                            <img src={product.image} onClick={() => viewProduct(product)} className="card-img-top" alt={product.title} />
                                                <div className="card-body"  >
                                                    <h4 className="card-title">{product.title}</h4>
                                                    <p className="card-text">${product.price}</p>
                                                    <button  onClick={() => addToCart(product)} class="btn btn-outline-dark "  >Add to cart </button>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}

export default Products;


