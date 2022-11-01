import React from 'react'
import { NavLink} from 'react-router-dom'
import "./NavStyle.css"

export function NavBar() {
    return (
        <nav className='mt-2'>
            <NavLink to='/' className='link'>Home</NavLink>
            <NavLink to='about' className='link'> About</NavLink>
            <NavLink to='product' className='link'> Product</NavLink>
            <NavLink to='users' className='link'> Users</NavLink>
        </nav>
    )
}
