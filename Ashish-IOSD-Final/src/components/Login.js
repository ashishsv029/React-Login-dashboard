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
import Left from "./Left";
import Right from "./Right";

const Login=()=>{
    
    return(
    <Container fluid>
        <Row>
            <Col md="6" style={{heigh:"100vm",width:"100vm"}}>
              <Left />
            </Col>
            <Col md="6" style={{minHeight:"100vh",width:"100%" ,backgroundColor:"#a1a5ff" ,color:"white"}}>
              <Right />
            </Col>
        </Row>
    </Container>
    )
}

export default Login