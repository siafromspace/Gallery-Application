import React from 'react'
import LoaderIcon from '../assets/images/loader.svg'

export default function Loader() {
  return (
    <div className='loader'>
        <img src={LoaderIcon} alt="loader" />
    </div>
  )
}
