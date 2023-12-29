import { useState } from 'react'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import About from './pages/About'
import Signup from './components/Signup'
import Signin from './components/Signin'
import Footer from './components/Footer'
import ProductDescription from './components/ProductDescription'
import Products from './pages/Products'
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/Store';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   
<BrowserRouter>
 <Header/>
    <Routes>
    <Route path = "/" element= {<Home/>}/>
    <Route path = "/about" element= {<About/>}/>
    <Route path = "/products" element= {<Products/>}/>
    <Route path = "/signin" element= {<Signin/>}/>
    <Route path = "/signup" element= {<Signup/>}/>
    <Route path="/products/:id" element={<ProductDescription/>}></Route>
    </Routes> 
   
 <Footer/>
 </BrowserRouter> 



    


   
    </> 
  )
}


export default App
