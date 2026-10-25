import React from 'react'
import B from './B'

function A({name,setName}) {
  return (
      <B name={name} setName = {setName} />
  )
}

export default A
