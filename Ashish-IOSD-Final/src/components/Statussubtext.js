

import React, { useReducer, useEffect, useState } from "react";
import { FaStop } from "react-icons/fa";
import { FcApproval } from "react-icons/fc";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label, Nav, Navbar, Progress, Dropdown, DropdownToggle} from "reactstrap"

const Statussubtext=({name,block=1})=>{
    return(
    <p style={{fontSize:"1rem",marginLeft:"3rem",marginTop:"-1rem"}}><span>
        {block==1?(<FcApproval style={{marginRight:"0.5rem"}}/>):(<FaStop style={{color:"#fafafa",marginRight:"0.5rem"}}/>)}
        
        </span>{name}</p>
    )
}

export default Statussubtext;

