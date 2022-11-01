import React from 'react'
import { useParams } from 'react-router-dom'

export default function UserDetails() {
    const {userId} = useParams()
    // const userId =  params.userId
    // console.log(params.userId)
  return (
    <div>
        <h1>UserDetails of user {userId}</h1>
    </div>
  )
}
