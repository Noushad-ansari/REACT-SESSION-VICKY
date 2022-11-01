import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function Home() {

  const navigate =  useNavigate()
  return (
    <div>
      <h1>Home</h1>

      <button onClick={()=>{navigate('order-summary')}}>Place Order</button>

      {/* <img className='mt-5'  src="https://cdn.searchenginejournal.com/wp-content/uploads/2019/10/25-of-the-best-examples-of-home-pages-5dc504205de2e.png" alt="" /> */}

    </div>
  )
}
