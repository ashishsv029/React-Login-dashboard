import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logos/logo.svg"
import { FaAlignJustify, FaCheck, FaDollarSign, FaEye, FaFacebook, FaFacebookMessenger, FaHandPaper, FaHandshake, FaHandsHelping, FaPlayCircle, FaPlus, FaRecycle, FaRegHandshake, FaSlack, FaStop, FaThumbsUp, FaYoutube } from "react-icons/fa"
import { FcApproval, FcBusinesswoman, FcDatabase, FcGoogle, FcSettings } from "react-icons/fc";



const Pagesbox=({text,iconname, children,block=1})=>{

    return(
        <div style={{backgroundColor:"#fafafa",height:"3rem",width:"85%",margin:"auto",borderRadius:"10px",padding:"0.5rem",marginTop:"1rem"}}>
           
            <p style={{fontSize:"1rem"}}>
                <span>
                    {block==1?(<FcApproval style={{marginRight:"0.5rem"}}/>):(<FaStop style={{color:"#fafafa",marginRight:"0.5rem"}}/>)}
                    
                </span>
                {text}
                {children}
                
            </p>
           

        </div>
    )
}

export default Pagesbox;