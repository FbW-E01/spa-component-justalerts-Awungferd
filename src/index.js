import React from "react";
import ReactDOM, { render } from "react-dom";

const Box = (props) => {
   //- Figure out how to console.log all properties that are defined for the Box
   console.log("TYPE: ", props.type,". MESSAGE: ", props.message)

   // CODE to display Alert boxes
   if (props.type==="blue") {return <div className="alert alert-primary" role="alert">
  {props.message}
 
 </div>
  }
   if (props.hide=== undefined &&props.type==="red") {return <div className="alert alert-danger" role="alert">
  {props.message}
 
 </div>
   }
  if (props.type==="orange") {return <div className="alert alert-warning" role="alert">
  {props.message}
  
 </div>
    
 } 
  if (props.hide===true && props.type==="red") { return null
    
   
  }
   
 }

 
 // Do not edit below this line
 const jsx = <>
   <Box type="blue" message="Blue box" />
   <Box type="red" message="Red box" />
  <Box type="orange" message="Orange box" /> 
   <Box hide type="red" message="Hidden box" />   
 </>;
 const element = document.getElementById("target");
 
 ReactDOM.render(jsx, element); 
 