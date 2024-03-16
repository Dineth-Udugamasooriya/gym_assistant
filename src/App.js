import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import NavigationBar from "./components/navbar";
import CreateExercise from "./components/create-exercise";
import EditExercise from "./components/edit-exercise";
import ExercisesList from "./components/exercises-list";
import CreateUser from "./components/create-user";

import Signup from "./components/signup";
import Login from "./components/login";
import Home from "./components/home";

function App() {
  const [email, setEmail] = useState(""); // State to hold the email

  return (
    <Router>
      <Routes>
        <Route path="/" element={<ExercisesList email={email} />} />
        <Route path="/edit/:id" element={<EditExercise email={email} />} />
        <Route path="/create" element={<CreateExercise email={email} />} />
        <Route path="/user" element={<CreateUser email={email} />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/login" element={<Login setEmail={setEmail} />} />{" "}
        {/* Pass setEmail function */}
        {/* <Route path="/home" element={<Home email={email} />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
