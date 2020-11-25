import React, { useReducer, useEffect, useState } from "react";
import {Container,Row,Col, Form, FormGroup, InputGroup, Input, InputGroupAddon, Button, Label} from "reactstrap"
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./logos/logo.svg"
import { FaAlignJustify, FaDollarSign, FaEye, FaFacebook, FaFacebookMessenger, FaHandPaper, FaHandshake, FaHandsHelping, FaPlus, FaRecycle, FaRegHandshake, FaSlack, FaThumbsUp } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc";
import "./App.css"
import Left from "./components/Left";
import Right from "./components/Right";
import Login from "./components/Login";
import Dashboard from "./Dashboard"
const App = () => {
  

  return (
  <Router>
    <Switch >
      <Route exact path="/" component={Login}/>
      <Route exact path="/dashboard" component={Dashboard} />
    </Switch>
  </Router>
  )
  }


export default App;
