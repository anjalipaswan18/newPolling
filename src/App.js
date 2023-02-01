import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./component/Login";
import Signup from "./component/Signup";
const App = () => {
  return (
    <HashRouter>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto"></Nav>
            <Button as={Link} to="/Signup" variant="outline-success">
              Signup
            </Button>
            <Button as={Link} to="/login" variant="outline-success">
              login
            </Button>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
};

export default App;
