import React from 'react'
import Logo from '../assets/images/logo.svg'
import { BiSolidUserCircle } from "react-icons/bi"

export default function Header({searchInput, setSearchInput}) {
  return (
    <header>
      <div className='desktop'>
        <img src={Logo} alt="logo" className='logo' />
        <h2>Gallery</h2>
        <button>Sign In</button>
        <input type="text" placeholder='Search For Images With Tags' value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}/>
        <BiSolidUserCircle className='user-icon' />
      </div>
      <div className="mobile">
        <input type="text" placeholder='Search For Images With Tags' value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)} />
      </div>
    </header>
  )
}
