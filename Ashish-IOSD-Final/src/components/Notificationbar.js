
import React, { useReducer, useEffect, useState } from "react";
import { FaCheck, FaExclamation, FaEyeSlash } from "react-icons/fa";
import { Col, Dropdown, DropdownToggle, Row } from "reactstrap";
import Stats from "./Stats";

const Notificationbar=()=>{
    return(

                <Row>

                  <Col md="3" style={{maxWidth:"14rem",marginTop:"1.45rem",marginBottom:"1rem"}}>
                    <div style={{float:"left"}}>
                        <span style={{fontWeight:"bold"}}>Date Range:</span>
                    </div>
                    
                    <Dropdown size="sm" style={{float:"right"}}>
                      <DropdownToggle caret> Last 7 days </DropdownToggle>
                    </Dropdown>
                  </Col>

                  <Col md="3" style={{maxWidth:"13rem",marginBottom:"1rem"}} >
                      <Stats name={"Manual Action"} value={35}>
                          <div style={{float:"right",height:"2rem",borderRadius:"50%",padding:"0.5rem",marginRight:"1.3rem",marginTop:"1.4rem",backgroundColor:"#ff0051"}}>    
                              <span> <FaExclamation style={{margin:"auto",fontSize:"1rem",marginBottom:"10px",color:"white"}}/> </span>
                          </div>
                      </Stats>
                  </Col>
                  <Col md="3" style={{maxWidth:"13rem",marginBottom:"1rem"}}>
                      <Stats name={"Marked as safe"} value={128}>
                        <div style={{float:"right",height:"2rem",borderRadius:"50%",padding:"0.5rem",marginRight:"1.3rem",backgroundColor:"lightGreen",marginTop:"1.4rem"}}>
                          <span><FaCheck style={{margin:"auto",fontSize:"1rem",marginBottom:"10px",color:"white"}}/></span>
                        </div>
                      </Stats>
                  </Col>
                  <Col md="3" style={{maxWidth:"13rem",marginBottom:"1rem"}}>
                      <Stats name={"Hidden"} value={128}>
                          <div style={{float:"right",height:"2rem",borderRadius:"50%",padding:"0.5rem",marginRight:"1.3rem",backgroundColor:"orange",marginTop:"1.4rem"}}>
                            <span><FaEyeSlash style={{margin:"auto",fontSize:"1rem",marginBottom:"10px",color:"white"}}/></span>    
                          </div>
                      </Stats>
                  </Col>

                </Row>

    )
}


export default Notificationbar