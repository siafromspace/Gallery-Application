import React from 'react'

export default function ImageContainer({tag, url}) {
  return (
    <div className='img-container'>
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
