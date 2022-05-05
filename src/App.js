
import  React ,{useEffect}from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { GetAllProduct } from './Actions/Poroducts';

function App() {
  const dispatch= useDispatch()
 const Products= useSelector(state=>state.products)
 
 console.log(Products)
useEffect(() => {
  dispatch(GetAllProduct())
 
})
  return (
    <div className="App">
    hello world
    </div>
  );
}

export default App;
