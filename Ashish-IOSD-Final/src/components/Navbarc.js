import React from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label} from "reactstrap"
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { FcDatabase, FcSettings } from "react-icons/fc";
import dp from "../logos/closeup3.jpeg"

const Navbarc=()=>{
    return(
        <Container fluid style={{backgroundColor:"white"}}>
            <Row>
                <Col md="7">
                    <h2 style={{fontWeight:"bold",float:"left",margin:"1rem"}}>Rep<span style={{color:"blue"}}>suite</span>.</h2>
                </Col>

                <Col md="5" sm="12">
                    <div style={{float:"right",marginTop:"1rem"}}>
                        <div style={{float:"right",marginRight:"2rem"}}>
                            <h5 style={{marginBottom:"-6px",fontSize:"1rem",fontWeight:"50"}}>Profile</h5>
                            <span style={{display:"inline",marginTop:"4rem",fontWeight:"bold"}}><h5>Rachana Ranade</h5></span>
                        </div>
                        <img src={dp} alt="" style={{height:"2.3rem",width:"2.2rem",borderRadius:"50%",marginRight:"1rem",float:"right"}}/>
                        <FcSettings style={{fontSize:"2.2rem",marginRight:"2rem",float:"right"}}/>
                        <FcDatabase style={{fontSize:"2.2rem",marginRight:"2rem",color:"blue",float:"right"}}/>
                    </div>
                </Col>

            </Row>
            
        </Container>
        
    )
}

export default Navbarc;