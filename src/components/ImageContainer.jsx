import React from 'react'

export default function ImageContainer({tag, url, index, handleDragEnd, handleDragEnter, handleDragStart}) {
  
  return (
    <div 
    className='img-container'
    draggable="true"
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
