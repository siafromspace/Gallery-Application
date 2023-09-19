import React from 'react'
import Logo from '../assets/images/logo.svg'
import { BiSolidUserCircle } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function Header({searchInput, setSearchInput}) {
  const { isAuth } = useContext(AuthContext)

  return (
    <>
      <header>
        <div className='desktop'>
          <img src={Logo} alt="logo" className='logo' />
          <h2>Gallery</h2>
          {!isAuth && <Link to="/signin">Sign In</Link>}
          <input type="text" placeholder='Search For Images With Tags' value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}/>
          <BiSolidUserCircle className='user-icon' />
        </div>
        <div className="mobile">
          <input type="text" placeholder='Search For Images With Tags' value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} />
        </div>
      </header>
      {isAuth ? <p className='drag-drop'>Click, hold and drag the white portion (tag portion) of the image container to rearrange the images</p> : <p className='drag-drop'>Sign in to use the drag and drop feature</p>}
    </>
  )
}
