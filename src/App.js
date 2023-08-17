import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Component/Home';
import Product from './Component/Product/Product';
import Contact from './Component/Contact/Contact';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from './Component/About/AboutUs';
import ViewProduct from './Component/Product/ViewProduct';
import Cart from "./Component/Cart";
import Login from './Component/Login/Login'
import Main from './Component/Main';

function App() {
  return (
    <div className="App">

      <BrowserRouter>

        <Routes>
          <Route path="/" element={<Main />}>
            <Route path="/" element={<Home />} />
            <Route path="product" element={<Product />} />
            <Route path="product/:id" element={<ViewProduct />} />
            <Route path="contact" element={<Contact />} />
            <Route path="cart" element={<Cart />} />
            <Route path="aboutus" element={<AboutUs />} />
          </Route>

          <Route path="login" element={<Login />} />
        </Routes>

      </BrowserRouter>
    </div >
  );
}

export default App;
