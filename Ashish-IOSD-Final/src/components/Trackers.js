import React, { useReducer, useEffect, useState } from "react";
import { Progress } from "reactstrap";

const Trackers=({tracker_name,stats,progresspercent})=>{

        return(
        <div style={{marginBottom:"2rem"}}>
            <h6 style={{fontWeight:"bold"}}>{tracker_name}</h6>
            <Progress color="danger" value={progresspercent} />
            <p style={{float:"right",fontSize:"0.8rem"}}>{stats}</p>
          </div>
        )
}

export default Trackers