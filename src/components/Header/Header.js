import React from 'react'
import {Link} from "react-router-dom"
import {AiOutlineUser} from "react-icons/ai"
import "./Header.css"


export default function Header() {
  return (
    <div className='header '>
      <Link to="/" style={{textDecoration: "none"}}>
        <div className='logo'>
          Movie App
        </div>
      </Link>
        <div className='user-image'>
          <AiOutlineUser style={{fontSize: "32px", color: "white"}}/>
        </div>
    </div>
  )
}
