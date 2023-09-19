import React from 'react'
import Logo from '../assets/images/logo.svg'
import { BiSolidUserCircle } from "react-icons/bi"

export default function Header() {
  return (
    <header>
      <img src={Logo} alt="logo" className='logo' />
      <h2>Gallery</h2>
      <button>Sign In</button>
      <input type="text" placeholder='Search For Images With Tags' />
      <BiSolidUserCircle className='user-icon' />
    </header>
  )
}
