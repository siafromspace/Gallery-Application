import React from 'react'
import ImageContainer from './ImageContainer'
import { useRef, useState } from 'react'
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

export default function ImageGallery({setData, data, searchInput}) {

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;
    const items = Array.from(data);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    setData(items)
  }
  const filteredData = data.filter(item =>
    item.txtVal.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId='gallery'>
        {
          (provided) => (
            <main {...provided.droppableProps} ref={provided.innerRef}>
            {filteredData.map((item, i) => (
            <ImageContainer key={item.txtVal} index={i} id={item.txtVal} tag={item.txtVal} url={item.imgUrl} 
            />
            ))}
            {provided.placeholder}
        </main>
          )
        }
      </Droppable>
    </DragDropContext>
  )
}
