import React from 'react'
import ImageContainer from './ImageContainer'

export default function ImageGallery({data, searchInput}) {

  const filteredData = data.filter(item =>
    item.txtVal.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <main>
      {filteredData.map((item, i) => (
        <ImageContainer tag={item.txtVal} url={item.imgUrl} />
      ))}
    </main>
  )
}
