import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label, Nav, Navbar, Progress} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { FaAlignJustify, FaChevronRight, FaDollarSign, FaExclamation, FaExclamationCircle, FaEye, FaEyeSlash, FaFacebook, FaFacebookMessenger, FaHandPaper, FaHandshake, FaHandsHelping, FaInstagram, FaInstagramSquare, FaPlayCircle, FaPlus, FaRecycle, FaRegHandshake, FaSlack, FaThumbsUp } from "react-icons/fa"
import { FcApproval, FcCheckmark, FcGoogle, FcShare } from "react-icons/fc";

import dp from "../logos/closeup3.jpeg"

const Feed=()=>{
    return(
        <>
             <div className="growfeed" style={{backgroundColor:"white",marginTop:"2rem",borderRadius:"15px",padding:"1.5rem",paddingBottom:"3rem"}}>
                      
                      <div >
                        <img src={dp} alt="" style={{height:"3rem",width:"3rem",borderRadius:"50%",float:"left",marginRight:"2rem"}}/>

                        <div style={{float:"right",backgroundColor:"#fafafa",height:"2rem",float:"right",borderRadius:"50%",padding:"0.5rem",marginRight:"1rem",backgroundColor:"#ff0051"}}>
                          <span><FaExclamation style={{margin:"auto",fontSize:"1rem",marginBottom:"10px",color:"white"}}/></span>    
                        </div>
                      
                        <div >
                          <h3 style={{fontWeight:"bold",color:"#493799"}}>Nag Ashish S V</h3>
                          <p style={{fontSize:"0.8rem",opacity:"0.3"}}>12:00 PM, Today</p>
                        </div>
                        
                      </div>
                      
                      <h4 style={{fontSize:"0.9rem",opacity:"0.5"}}>prayag should marry piyush prayag should marry piyush prayag should marry piyush prayag should marry piyush prayag should marry piyush </h4>
                      <div style={{marginTop:"2rem"}}>
                          <div style={{backgroundColor:"#fafafa",height:"2.6rem",float:"left",borderRadius:"20px",padding:"0.5rem"}}>
                            <p style={{fontSize:"0.8rem"}}><span><FaInstagramSquare style={{marginRight:"0.5rem",color:"#ff0051",fontSize:"1.5rem",borderRadius:"20px"}}/></span>Rachanaranade3</p>
                          </div>
                          <div style={{backgroundColor:"#fafafa",height:"2.6rem",float:"right",borderRadius:"50%",padding:"0.5rem"}}>
                            <span><FcShare style={{margin:"auto",fontSize:"1.3rem"}}/></span>    
                          </div>
                          <div style={{backgroundColor:"#fafafa",height:"2.6rem",float:"right",borderRadius:"50%",padding:"0.5rem",marginRight:"1rem"}}>
                            <span><FaEyeSlash style={{margin:"auto",color:"gold",fontSize:"1.3rem",}}/></span>    
                          </div>
                          <div style={{backgroundColor:"#fafafa",height:"2.6rem",float:"right",borderRadius:"50%",padding:"0.5rem",marginRight:"1rem"}}>
                            <span><FcCheckmark style={{margin:"auto",fontSize:"1.3rem"}}/></span>    
                          </div>
                          </div>
                      </div>   
        </>

    )
}


export default Feed