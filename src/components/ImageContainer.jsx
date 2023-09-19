import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

export default function ImageContainer({tag, url, index, handleDragEnd, handleDragEnter, handleDragStart}) {
  const { isAuth } = useContext(AuthContext)
  return (
    <div 
    className={isAuth ? 'img-container draggable' : 'img-container'}
    draggable={isAuth ? "true" : "false"}
    onDragStart={(e) => handleDragStart(e, index)}
    onDragEnter={(e) => handleDragEnter(e, index)}
    onDragEnd={(e) => handleDragEnd(e, index)}
    onDragOver={(e) => e.preventDefault()}

     >
        <div className='image'>
          <img src={url} alt="image" />
        </div>
        <div className='img-text'>
            <h3 className='img-tag'>{tag}</h3>
            <p>TAG</p>
        </div>
    </div>
  )
}
