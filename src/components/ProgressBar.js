// import React from "react";

// const ProgressBar = (props) => {
//   const { bgcolor, completed } = props;
//   return (
//     <div>
//       <div>
//         <span>{`${completed}%`}</span>
//       </div>
//     </div>
//   );
// };

// export default ProgressBar;
import './progressbar.css'
const ProgressBar = (props) => {
    const { bgcolor, completed ,high,low} = props;
  
  
    const fillerStyles = {
      height: "100%",
      width: `${completed}%`,
      backgroundColor: bgcolor,
      borderRadius: "inherit",
      textAlign: "right",
    };
  
    const labelStyles = {
      padding: 5,
      color: "white",
      fontWeight: "bold",
    };
    
    const red ={
        margin:"0 2vw",
        "background-color": "#ffc6c6",
        color:"red"
    }
    const med ={
        margin:"0 17vw"
        // width:"300px"
    }
    const green ={
        margin:"0 2vw",
        "background-color": "#aaffaa",
        color:"green"
    }
    return (<>
      <div className='containerStyles'>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
      <price className='pricestyle'>
        <div style={red}>{low}</div>
        <div style={med}>24H_Range</div>
        <div style={green}>{high}</div>
      </price>
    </>
    );
  };
  
  export default ProgressBar;