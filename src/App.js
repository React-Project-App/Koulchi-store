
import  React ,{useEffect} from 'react'


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import ProductDetails from './Pages/ProductDetails/ProductDetails';
import Products from './Pages/Products/Products';
import Home from './Pages/Home/Home';
import Cart from './Pages/Cart/Cart';
import { ToastContainer } from 'react-toastify';
import Login from './Pages/Login/Login';
import Footer from './Components/Footer/Footer';
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './Pages/SignUp/SignUp';
import Profile from './Pages/Profile/Profile';
import Navbar from './Components/Navbar/Navbar';
import FavoriteProduct from './Pages/FavoriteProducts/FavoriteProduct';
import PageNotFound from './Pages/PageNotFound/PageNotFound';
import ResetPassword from './Components/ResetPassword/ResetPassword';
import axios from 'axios';

function App() {



  
  


  return (
    <BrowserRouter>
     <ToastContainer/>
     <Navbar/>
      <Routes>
        
        <Route path="/store" element={<Products />} />
        <Route path="/products/:Id" element={<ProductDetails />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/ResetPassword" element={<ResetPassword />} />
        <Route path="/Signup" element={<SignUp />} />
        <Route path="/Profile" element={<Profile />} />
       <Route path='/FavoriteProducts' element={<FavoriteProduct/>}/>
       <Route path='/*' element={<PageNotFound/>}/>
      </Routes>
      {/* <Footer/> */}
   </BrowserRouter>
    
   
  );
}

export default App;
