import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label, Nav, Navbar, Progress} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css"
import { FaAlignJustify, FaBan, FaChevronRight, FaDollarSign, FaExclamation, FaExclamationCircle, FaEye, FaEyeSlash, FaFacebook, FaFacebookMessenger, FaHandPaper, FaHandshake, FaHandsHelping, FaInstagram, FaInstagramSquare, FaPlayCircle, FaPlus, FaRecycle, FaRegHandshake, FaSlack, FaSmile, FaStop, FaThumbsUp } from "react-icons/fa"
import { FcApproval, FcCheckmark, FcGoogle, FcShare } from "react-icons/fc";
import logo from "../logos/health2.jpg"
import dp from "../logos/closeup3.jpeg"




const Profilecomment=({name,time})=>{
    return(
            <>
                    <div style={{marginTop:"2rem"}}>
                         

                         <div style={{width:"50%",float:"left"}}>
                           <img src={dp} alt="" style={{height:"2rem",width:"2rem",borderRadius:"50%",float:"left",marginRight:"0.52rem"}}/>                      
                           <div >
                                <h6 style={{fontWeight:"bold",color:"#493799"}}>{name}</h6>
                                <p style={{fontSize:"0.8rem",opacity:"0.3"}}>{time}</p>
                           </div>
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
                         <h4 style={{fontSize:"0.9rem",opacity:"0.5",marginTop:"1rem",clear:"left"}}>prayag should marry piyush prayag should marry piyush prayag should marry piyush prayag should marry piyush prayag should marry piyush </h4>
                         <Form style={{marginTop:"1rem"}}>
                           <InputGroup >
                             <div style={{width:"100%"}}>
                             <Input type="text" placeholder="Write a reply.." style={{float:"left"}}/>
                             <FaSmile style={{position:"absolute",float:"right",zIndex:"2",transform:"translate(-2rem,10px)"}}/>
                             </div>
                           </InputGroup>
                         </Form>
                         <div style={{marginTop:"1rem"}}>
                           <div style={{float:"left",height:"2rem",width:"4rem",backgroundColor:"#fafafa",padding:"0.5rem",borderRadius:"10px"}}>
                             <p style={{fontSize:"0.8rem"}}><span style={{marginTop:"-17px",color:"blue"}}>Like </span><FaThumbsUp style={{color:"blue",marginLeft:"0.3rem",marginTop:"-5px"}}/></p>
                           </div>
                           <div style={{float:"left",height:"2rem",width:"4rem",backgroundColor:"#fafafa",padding:"0.5rem",borderRadius:"10px",marginLeft:"0.5rem"}}>
                             <p style={{fontSize:"0.8rem"}}><span style={{marginTop:"-17px",color:"red"}}>Ban </span><FaBan style={{color:"red",marginLeft:"0.3rem",marginTop:"-4px"}}/></p>
                           </div>
                           <div style={{float:"right"}}>
                                 <Button color="success" style={{borderRadius:"12px"}}>submit</Button>
                           </div>
                           
                         </div>
                     </div>
            </>
    )
}

export default Profilecomment