import React from 'react'
import './App.css';

import { Routes, Route, Router } from "react-router-dom"
import Home from './components/Home';
// import About from './components/About';
import PageNotFound from './components/PageNotFound';
import { NavBar } from "./components/NavBar";
import OrderSummery from './components/OrderSummery';
import Product from "./components/Product"
import Featured from './components/Featured';
import NewProduct from './components/NewProduct';
import Users from './components/Users';
import UserDetails from './components/UserDetails';
import Admin from './components/Admin';

const LazyAbout = React.lazy(() => import("./components/About"))

function App() {
  return (
    <div className="App">
      <NavBar style={{ "margin-bottom": "20px" }} />


      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={
          <React.Suspense fallback = "Loading...">
            <LazyAbout />
          </React.Suspense>}
        />
        <Route path='order-summary' element={<OrderSummery />} />

        <Route path='product' element={<Product />} >

          <Route index element={<Featured />} />
          <Route path='featured' element={<Featured />} />
          <Route path='newproduct' element={<NewProduct />} />
        </Route>

        <Route path="users" element={<Users />}>
          <Route path=":userId" element={<UserDetails />} />
          <Route path="admin" element={<Admin />} />
        </Route>




        <Route path='*' element={<PageNotFound />} />

      </Routes>
    </div>
  );
}

export default App;
