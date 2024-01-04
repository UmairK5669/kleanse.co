import React from 'react'
import '../styles/HelloWorld.css'

function HelloWorld({int}) {
  return (
    <>
      <div className='button'>First num {'->'} {int + int}</div>
      <div className='button2'>Second num {'->'} {int}</div>
    </>
  )
}

export default HelloWorld;