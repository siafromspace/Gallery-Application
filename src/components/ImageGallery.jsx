import React from 'react'
import ImageContainer from './ImageContainer'
import { useRef, useState } from 'react'

export default function ImageGallery({setData, data, searchInput}) {
  
  const filteredData = data.filter(item =>
    item.txtVal.toLowerCase().includes(searchInput.toLowerCase())
  );

  const dragItem = useRef(null)
    const dragOverItem = useRef(null)

    const handleDragStart = (e, index) => {
        dragItem.current = index
    }
    const handleDragEnter = (e, index) => {
        dragOverItem.current = index
    }
    const handleDragEnd = (e, index) => {
        let copyData = [...filteredData]
        const dragItemContent = copyData.splice(dragItem.current, 1)[0]
        copyData.splice(dragOverItem.current, 0, dragItemContent)
        dragItem.current = null
        dragOverItem.current = null
        setData(copyData)
    }

  return (
    <main>
      {filteredData.map((item, i) => (
      <ImageContainer key={item.txtVal} index={i} tag={item.txtVal} url={item.imgUrl} handleDragEnd={handleDragEnd} handleDragEnter={handleDragEnter} handleDragStart={handleDragStart}  />
      ))}
    </main>
  )
}
