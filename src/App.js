
import  React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';

import 'bootstrap/dist/css/bootstrap.min.css';

import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';

import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  


  return (
    <BrowserRouter>
     <ToastContainer/>
      <Routes>
        
        <Route path="/products" element={<Products />} />
        <Route path="/products/:Id" element={<ProductDetails />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
       
      </Routes>

   </BrowserRouter>
    
   
  );
}

export default App;
