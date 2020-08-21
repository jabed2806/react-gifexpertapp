import React, { useState } from 'react'
import PropTypes from 'prop-types'

export const AddHijos = (props) => {
  const [inputValue, setinputValue] = useState('prueba')
  const handleInputChange = (e) => {
    setinputValue(e.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    props.sethijos(hij => [inputValue, ...hij])
    setinputValue('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <h1> {inputValue} </h1>
      <input
        type='text'
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

AddHijos.propTypes = {
  sethijos: PropTypes.func
}