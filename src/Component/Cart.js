import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { remove, incrementQuantity, decrementQuantity } from '../Store/CartSlice';
import Table from 'react-bootstrap/Table';
import { TbGardenCartOff } from "react-icons/tb";

const Cart = () => {
  const productCart = useSelector(state => state?.cart ?? []);
  console.log("productCart", productCart)
  const dispatch = useDispatch();

  const removeCart = (id) => {
    dispatch(remove(id));
  };

  const increaseQuantity = (id) => {
    dispatch(incrementQuantity(id));
  };

  const decreaseQuantity = (id) => {
    dispatch(decrementQuantity(id));
  };

  const calculateTotal = () => {
    let total = 0;
    productCart.cart.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2);
  };
  
  return (
    <>
      {productCart?.cart?.length ? (
        <div className='cart'>
          <div className='container'>
            <Table className='flex-direction-column'>
              <thead>
                <tr className='text-center'>
                  <th>Product</th>
                  <th className='cart-product-name'>Product Name</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className='cart-table'>
                {productCart.cart.map(products => (
                  <tr key={products.id}>
                    <td><img src={products.image} width={100} alt='Product' /></td>
                    <td className='cart-product-name-d'>{products.title}</td>
                    <td>${products.price}</td>
                    <td className='cart-input'>
                      <button className='cart-btn' onClick={() => decreaseQuantity(products.id)}> - </button>
                      <input className='cart-inp' value={products.quantity || 0} readOnly />
                      <button className='cart-btn' onClick={() => increaseQuantity(products.id)}> + </button>
                    </td>
                    <td><button className='cart-rem-btn' onClick={() => removeCart(products.id)}> Remove</button></td>
                    <td>${Number((products.price * products.quantity).toFixed(2)) }</td>
                  </tr>
                ))}
              </tbody>
            </Table>
            <div className='d-flex justify-content-end '><h5 className='  total-cart'>Total: ${calculateTotal()}</h5></div>
          </div>
        </div>
      ) : (
        <div className='empty-cart'>
          <h2 className='text-muted'><TbGardenCartOff /></h2>
          <h1 className='text-muted'>Cart is empty</h1>
        </div>
      )}
     
    </>
  );
};


export default Cart;

