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
import Profilecomment from "./Profilecomment";

const Profilec=()=>{
    return(
        <>
             <div className="grow" style={{backgroundColor:"white",marginTop:"2rem",borderRadius:"15px",padding:"1.5rem",paddingBottom:"3rem"}}>
                      <div >
                        <img src={dp} alt="" style={{height:"4rem",width:"4rem",borderRadius:"50%",float:"left",marginRight:"1rem"}}/>

                        <div >
                          <h3 style={{fontWeight:"bold",color:"#493799"}}>Rachana Ranade</h3>
                          <p style={{fontSize:"0.8rem",opacity:"0.3",marginTop:"-0.8rem"}}>12:00 PM, Today</p>
                        </div>

                        <h4 style={{fontSize:"0.9rem",opacity:"0.5",marginTop:"2rem"}}>prayag should marry piyush prayag should marry piyush prayag should marry piyush prayag should marry piyush prayag should marry piyush </h4>

                        <div  style={{width:"auto",textAlign:"center",marginTop:"2rem"}}>
                          <img  src={logo} style={{width:"100%",height:"14rem",objexFit:"container",borderRadius:"10px"}} />
                        </div>
                        <Profilecomment name={"Nag Ashish S V"} time={"12:05 PM"}/>

                        
                      </div>         
             </div>   
        </>

    )
}


export default Profilec