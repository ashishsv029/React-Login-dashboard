import React, { useReducer, useEffect, useState } from "react";
import { FcApproval } from "react-icons/fc";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label, Nav, Navbar, Progress, Dropdown, DropdownToggle} from "reactstrap"

const Statustext=({name})=>{
    return(
    <h5 style={{fontSize:"1.2rem",marginBottom:"1.4rem"}}><span><FcApproval style={{marginRight:"0.5rem"}}/></span>{name}</h5>
    )
}

export default Statustext;