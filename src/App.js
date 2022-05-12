
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
import SignUp from './Pages/SignUp/SignUp';
import UpdateProfile from './Pages/UpdateProfile/UpdateProfile';
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
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/UpdateProfile" element={<UpdateProfile />} />
       
      </Routes>

   </BrowserRouter>
    
   
  );
}

export default App;
