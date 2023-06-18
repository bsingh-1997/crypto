import React from 'react'
import './error.css'
const Error = ({message}) => {
  return (
    <div>
      <img className='imgimg' src='https://ieeemait.com/images/error.gif'/>
        <div className='msg'>
          {message}
          
          </div>
    </div>
  )
}

export default Error
