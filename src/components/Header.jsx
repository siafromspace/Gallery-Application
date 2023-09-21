import React from 'react'
import Logo from '../assets/images/logo.svg'
import { BiSolidUserCircle } from "react-icons/bi"
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { auth } from '../firebase'
import { signOut } from 'firebase/auth'

export default function Header({searchInput, setSearchInput}) {
  const { isAuth, setIsAuth } = useContext(AuthContext)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        alert('User signed out.')
        setIsAuth(false)
        localStorage.removeItem('isAuth')
      })
      .catch((err) => {
        console.log(err.message)
      })
  }
  return (
    <>
      <header>
        <div className='desktop'>
          <img src={Logo} alt="logo" className='logo' />
          <h2>Gallery</h2>
          {!isAuth ? <Link to="/signin">Sign In</Link> : <button className='logout' onClick={handleSignOut}>Log Out</button>}
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
