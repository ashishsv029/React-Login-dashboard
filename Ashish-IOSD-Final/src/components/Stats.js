import React, { useReducer, useEffect, useState } from "react";

const Stats=({name,value,children})=>{
    return(
      <div style={{height:"5rem",backgroundColor:"white",borderRadius:"15px"}}>
        <div style={{float:"left",width:"70%",padding:"0.3rem"}}>
            <div>
                <p style={{fontSize:"13px",marginTop:"0.4rem",marginLeft:"1rem"}}>{name}</p>
                <h4 style={{fontWeight:"bold",marginTop:"-1rem",marginLeft:"1rem",marginTop:"-1rem"}}>{value}</h4>
            </div>
        </div>
        <div style={{width:"30%",float:"right"}}>
            {children}  
        </div>
      </div>

    )
}
export default Stats