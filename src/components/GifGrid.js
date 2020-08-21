import React, { useState, useEffect } from 'react'
import { GifGridItem } from './GifGridItem'
import { getGif } from '../helpers/getGifs'

export const GifGrid = ({ hijo }) => {
  const [images, setImages] = useState([])

  useEffect(() => {
    getGif(hijo)
      .then(img => setImages(img))
  }, [hijo])

  return (
    <>
      <h3>{hijo}</h3>
      <div className='card-grid'>
        {
          images.map(img => (
            <GifGridItem
              key={img.id}
              {...img}
            />
          ))
        }
      </div>
    </>
  )
}
