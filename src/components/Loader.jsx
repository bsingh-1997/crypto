import React from 'react'
import logo from './throbber_13.gif'
const Loader = () => {
  const styleload={
    // position: "absolute",
    display: "flex",
    // margin-left: "39%",
    margin: "15% 45%",
    width: "10vw"
}
  
  return (
    
    <div >
      <img style={styleload} src={logo}/>
    </div>
  )
}

export default Loader
