import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function OrderSummery() {
  const navigate = useNavigate() 
  return (
    <div>
        <h1>Your Order Confirmed</h1>
        <button onClick={()=>{navigate(-1)}}>Go Home</button>
    </div>
  )
}
