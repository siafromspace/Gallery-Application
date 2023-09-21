import React from 'react'
import { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'
import { Draggable } from 'react-beautiful-dnd'

export default function ImageContainer({tag, url, id, index}) {
  const { isAuth } = useContext(AuthContext)
  
  if(isAuth === false) {
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
  
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div 
        className={isAuth ? 'img-container draggable' : 'img-container'}
        ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}
         >
            <div className='image'>
              <img src={url} alt="image" />
            </div>
            <div className='img-text'>
                <h3 className='img-tag'>{tag}</h3>
                <p>TAG</p>
            </div>
        </div>
      )}
    </Draggable>
  )
}
