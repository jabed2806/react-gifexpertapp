import React, { useState } from 'react'
import { AddHijos } from './components/AddHijos'
import { GifGrid } from './components/GifGrid'

export const GifExpertApp = () => {
  // const hijos = ['Anyelo', 'Naiara']
  // console.log(hijos)
  // return <><li> {hijos[key]} </li></>

  const [hijos, sethijos] = useState(['Anyelo'])

  return (
    <>
      <h1>App Anyenaia</h1>
      <AddHijos sethijos={sethijos} />
      <hr />

      <ol>
        {
          hijos.map(hijo => (
            <GifGrid
              key={hijo}
              hijo={hijo}
            />
          )
          )
        }
      </ol>
    </>
  )
}
