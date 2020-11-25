import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logos/logo.svg"
import { FaAlignJustify, FaDollarSign, FaEye, FaFacebook, FaFacebookMessenger, FaHandPaper, FaHandshake, FaHandsHelping, FaPlus, FaRecycle, FaRegHandshake, FaSlack, FaThumbsUp } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import "../App.css"


const Right=()=>{
    return(
        <>
              <div  style={{width:"auto",textAlign:"center",padding:"20px"}}>
                <img  src={logo} style={{width:"70%",height:"100%",marginTop:"8rem",objexFit:"container"}} />
              </div>
              <div style={{width:"100%",textAlign:"center",marginTop:"4rem"}}>
                <h6><FaFacebookMessenger style={{marginRight:"0.8rem"}}/>Fully Automated Comment Moderation</h6>
                <h6><FaRecycle  style={{marginRight:"0.8rem"}}/>Take a backseat while we automate your repo</h6>
                <h6><FaDollarSign style={{marginRight:"0.8rem"}}/>Start with a free trail</h6>
                <h6><FaThumbsUp style={{marginRight:"0.8rem"}}/> Best SAAS in the industry</h6>
              </div>
        </>
    )
}

export default Right