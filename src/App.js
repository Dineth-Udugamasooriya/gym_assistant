import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { Navbar, Container, Nav } from "react-bootstrap";

import CreateExercise from "./components/create-exercise";
import EditExercise from "./components/edit-exercise";
import ExercisesList from "./components/exercises-list";
import CreateUser from "./components/create-user";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar bg="dark" data-bs-theme="dark">
          <Container>
            <Navbar.Brand as={Link} to="/">
              Exercises
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/edit/:id">
                Edit Exercise
              </Nav.Link>
              <Nav.Link as={Link} to="/create">
                Create Exercise
              </Nav.Link>
              <Nav.Link as={Link} to="/user">
                Create User
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/" element={<ExercisesList />} />
          <Route path="/edit/:id" element={<EditExercise />} />
          <Route path="/create" element={<CreateExercise />} />
          <Route path="/user" element={<CreateUser />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
