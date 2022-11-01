import React from 'react'
import { Outlet, useSearchParams } from 'react-router-dom'

export default function Users() {

  const[searchParams, setSearchParams] = useSearchParams()
  

const showActiveUser = searchParams.get("filter") ==  "active"

  return (
    <div>
        <h1>Users</h1>
        <p>user1</p>
        <p>user2</p>
        <p>user3</p>
        <Outlet/>

        <div>
          <button onClick={()=>{setSearchParams({filter : "active"})}} >Active User</button>
          <button onClick={()=>{setSearchParams({})}}>Reset User</button>
        </div>

        <div>
          {showActiveUser ? <h>Showing Active Users</h> : <h>Showing All Users</h>  }
        </div>
    </div>
  )
}
