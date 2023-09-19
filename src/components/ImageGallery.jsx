import React from 'react'
import ImageContainer from './ImageContainer'

export default function ImageGallery({data}) {
  return (
    <main>
      {data.map((item, i) => (
        <ImageContainer tag={item.txtVal} url={item.imgUrl} />
      ))}
    </main>
  )
}
