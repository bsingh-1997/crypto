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

const ProgressBar = (props) => {
    const { bgcolor, completed ,high,low} = props;
  
    const containerStyles = {
      height: "20px",
      width: "27%",
      backgroundColor: "#e0e0de",
      borderRadius: 50,
      margin: "10px 36vw",
    };
  
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
    const pricestyle = {
        display:"inline-flex"
    }
    const red ={
        margin:"0 2vw",
        "background-color": "#ffc6c6",
        color:"red"
    }
    const med ={
        margin:"0 2vw"
    }
    const green ={
        margin:"0 2vw",
        "background-color": "#aaffaa",
        color:"green"
    }
    return (<>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}></span>
        </div>
      </div>
      <price style={pricestyle}>
        <div style={red}>{low}</div>
        <div style={med}>24H Range</div>
        <div style={green}>{high}</div>
      </price>
    </>
    );
  };
  
  export default ProgressBar;