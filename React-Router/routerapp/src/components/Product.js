import React from 'react'
import { NavLink,Outlet } from 'react-router-dom'

export default function Product() {
  return (
    <div>
        <h1>Products</h1>
       
       <NavLink className='ml-3' to = "featured">Featured Products </NavLink>
       <NavLink className='ml-3' to = "newproduct">New Products </NavLink>
     <Outlet/>
    </div>
  )
}
