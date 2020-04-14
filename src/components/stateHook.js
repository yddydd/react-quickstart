import React, { useState } from 'react'

export default function (props) {

  const [value, setValue] = useState('')
  const self = this

  function handleChange(e) {
    // console.log(self)
    setValue(e.target.value)
  }

  return (
    <>
    <input value={value} onChange={handleChange} />
    </>
  )
}