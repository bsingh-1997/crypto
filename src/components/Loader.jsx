import React from 'react'
import logo from './loading3.gif'
const Loader = () => {
  const styleload={
    // position: "absolute",
    display: "flex",
    // margin-left: "39%",
    margin: "15% 39%",
    width: "10vw"
}
  
  return (
    
    <div >
      <img style={styleload} src={logo}/>
    </div>
  )
}

export default Loader
