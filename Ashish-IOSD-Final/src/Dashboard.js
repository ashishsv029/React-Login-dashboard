import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label, Nav, Navbar, Progress, Dropdown, DropdownToggle} from "reactstrap"
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logos/logo.svg"
import { FaAlignJustify, FaCheck, FaChevronRight, FaDollarSign, FaExclamation, FaExclamationCircle, FaEye, FaEyeSlash, FaFacebook, FaFacebookMessenger, FaHandPaper, FaHandshake, FaHandsHelping, FaInstagram, FaInstagramSquare, FaPlayCircle, FaPlus, FaRecycle, FaRegHandshake, FaSlack, FaThumbsUp } from "react-icons/fa"
import { FcApproval, FcCheckmark, FcGoogle, FcShare } from "react-icons/fc";
import "./App.css"
import Navbarc from "./components/Navbarc"
import Pagesbox from "./components/Pagesbox";
import dp from "./logos/closeup3.jpeg"
import Feed from "./components/Feed"
import Profilec from "./components/Profilec";
import Statustext from "./components/Statustext";
import Statussubtext from "./components/Statussubtext";
import Trackers from "./components/Trackers";
import Stats from "./components/Stats";
import Notificationbar from "./components/Notificationbar";

const App = () => {

  return (
    <Container fluid>

        <Row>
          <Navbarc />
        </Row>

        <Row style={{backgroundColor:"#dfe7eb"}} className="feedarea">
          <Col md="3" >
            <div style={{backgroundColor:"white",marginTop:"2rem",padding:",20px",paddingTop:"20px",paddingBottom:"20px",borderRadius:"15px"}}>
                <h4 style={{fontWeight:"bold",marginLeft:"1.8rem",marginBottom:"2rem"}}>Pages and Channels</h4>
                <Pagesbox text={"Rachana Rande"} iconname={"FaInstagram"} >
                    <FaPlayCircle style={{color:"#b02832",float:"right",marginRight:"1rem",marginTop:"0.3rem",fontSize:"1.5rem"}}/>
                </Pagesbox>
                <Pagesbox text={"Rachana rande 3"}>
                    <FaFacebook style={{color:"#7850d4",float:"right",marginRight:"1rem",marginTop:"0.3rem",fontSize:"1.5rem"}}/>
                </Pagesbox>
                <Pagesbox text={"Rachana Rande"} block={0}>
                    <FaInstagram style={{color:"purple",float:"right",marginRight:"1rem",marginTop:"0.3rem",fontSize:"1.5rem"}}/>
                </Pagesbox>
                <Pagesbox text={"Rachana rande 3"}>
                    <FaPlayCircle style={{color:"#b02832",float:"right",marginRight:"1rem",marginTop:"0.3rem",fontSize:"1.5rem"}}/>
                </Pagesbox>

                <div style={{marginLeft:"2rem",marginTop:"2rem"}}>
                  <h4 style={{fontWeight:"bold",marginBottom:"1.4rem"}}>Status</h4>
                  <Statustext name={"Requires Manual Action"}/>
                  <Statustext name={"Marked as safe by:"}/>
                  <Statussubtext name={"Manual Action"}/>
                  <Statussubtext name={"AI"}/>
                  <Statustext name={"Hidden by:"}/>
                  <Statussubtext name={"Manual Action"} block={0}/>
                  <Statussubtext name={"AI"}/>
                  <Statussubtext name={"Keywords"}  block={0}/>
                </div>
            </div>

            <div style={{backgroundColor:"white",marginTop:"2rem",padding:"30px",marginTop:"1rem",borderRadius:"15px"}}>
              <div style={{marginLeft:"auto"}}>
                <h4 style={{fontWeight:"bold",marginBottom:"1.4rem"}}>Plan Usage</h4>
                <Trackers tracker_name={"Account Connected"} stats={"6 of 10"} progresspercent={60}/>
                <Trackers tracker_name={"Comments Processed"} stats={"3000 of 10000"} progresspercent={30}/>
              </div>
            </div>

          </Col>
          <Col md="9" >
            <div style={{marginTop:"2rem",borderRadius:"15px"}}>
              <Container fluid>
                <Notificationbar />
                <Row>
                  <Col md="7" >
                    <p style={{fontSize:"0.8rem",opacity:"0.6",marginBottom:"-18px",marginTop:"0.6rem"}}>Showing 36 components</p>
                    <Feed />
                    <Feed />
                    <Feed />
                    <Feed />    
                  </Col>
                  <Col md="5" >
                    <Profilec />
                  </Col>
                </Row>
              </Container>
            </div>
          </Col>
        </Row>
    </Container>
  )
  }


export default App;
