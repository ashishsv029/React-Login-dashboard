import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link, useHistory } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../logos/logo.svg"
import { FaAlignJustify, FaSmile,FaDollarSign, FaEye, FaFacebook, FaFacebookMessenger, FaHandPaper, FaHandshake, FaHandsHelping, FaPlus, FaRecycle, FaRegHandshake, FaSlack, FaThumbsUp, FaEyeSlash } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import "../App.css"

const Left=()=>{
    const history=useHistory()
    const divert=()=>{
        
        history.push("/dashboard")
    }
    const [loginemail,setLoginemail]=useState("")
    const [loginpassword,setLoginpassword]=useState("")
    const [showpassword ,setShowpassword]=useState(false)
    const togglePassword=()=>{
        if(showpassword)
        {
            setShowpassword(false)
        }
        else
        {
            setShowpassword(true)
        }
        
    }
    return(
        <>
              <h3 style={{fontWeight:"bold",marginTop:"1rem",marginLeft:"1rem"}}>Rep<span style={{color:"blue"}}>suite</span>.</h3>

              <Form style={{width:"60%",margin:"auto",marginTop:"6.5rem"}}>
                <h1 style={{fontWeight:"bold",textAlign:"center"}}>Hey There <span style={{color:"gold"}}><FaHandPaper/></span></h1>
                <h5 style={{fontSize:"0.9rem",fontWeight:"700",textAlign:"center"}}>Welcome back to Rep<span style={{color:"blue"}}>suite</span>.</h5>

                <FormGroup style={{marginTop:"2.7rem"}}>
                  <Label style={{opacity:"0.4"}}>Email</Label>

                  <InputGroup>
                      <Input style={{borderRadius:"10px"}} type="email" name="todo" id="todo" placeholder="Enter email..." value={loginemail} onChange={e=>setLoginemail(e.target.value)} />
                  </InputGroup >

                  <div style={{marginTop:"1.6rem"}}>
                      <Label style={{opacity:"0.4"}}>Password</Label>
                      <InputGroup>
	                      <div style={{width:"100%"}}>
                          <Input style={{borderRadius:"10px",float:"left"}} type={showpassword?"text":"password"} name="todo" id="todo" placeholder="Password..." value={loginpassword} onChange={e=>setLoginpassword(e.target.value)} />   
	                       { showpassword?(
                               <FaEyeSlash onClick={togglePassword}  style={{position:"absolute",float:"right",zIndex:"2",transform:"translate(-2rem,10px)"}}/>
                           ):( <FaEye onClick={togglePassword}  style={{position:"absolute",float:"right",zIndex:"2",transform:"translate(-2rem,10px)"}}/>)
                            }
	                      </div>
                      </InputGroup>
                      <span style={{fontSize:"0.8rem",opacity:"0.4"}}>use 8 or more characters to make a strong password</span>
                  </div>

                  <div style={{display: "flex",justifyContent: "center",alignItems: "center"}}>
                      <Button onClick={divert} style={{width:"13rem",backgroundColor:"#ff0059",padding:"",borderRadius:"10px",marginTop:"2rem"}}>Sign In</Button>
                  </div>

                  <div style={{display: "flex",justifyContent: "center",alignItems: "center",marginTop:"0.5rem"}}>
                      <h6 style={{fontSize:"1rem",opacity:"0.4",marginTop:"0.5rem"}}>New User? <span style={{color:"blue"}}>Signup instead</span></h6>
                  </div>
                  
                  <h6 className="between">Or continue with</h6>

                  <div style={{display: "flex",justifyContent: "center",alignItems: "center",fontSize:"3rem",marginTop:"2rem",marginBottom:"2rem"}}>
                    <div style={{border:"1px solid grey",width:"5rem",marginRight:"3rem",borderRadius:"10px"}}>
                        <FcGoogle style={{marginLeft:"1rem",marginTop:"-1rem"}} />
                    </div>
                    <div style={{border:"1px solid grey",width:"5rem",borderRadius:"10px"}}>
                        <FaFacebook style={{marginLeft:"1rem",marginTop:"-1rem",color:"darkBlue"}} />
                    </div>
                  </div>  

                </FormGroup>

              </Form>
        </>
    )
}

export default Left;