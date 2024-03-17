import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";

import Navbar from "./navbar";

export default function CreateUser({ email }) {
  const [username, setUsername] = useState("");
  const [dob, setDob] = useState(new Date());
  const [trainermail, setTrainermail] = useState("");
  const [contact, setContact] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    const trainer = {
      username,
      dob,
      trainermail,
      contact,
      email,
    };

    console.log(trainer);

    axios
      .post("http://localhost:5000/trainers/add", trainer)
      .then((res) => console.log(res.data));

    setUsername("");
    setDob(new Date());
    setTrainermail("");
    setContact("");
  };

  console.log(email);

  return (
    <div>
      <Navbar />
      <h3>Create New User</h3>
      <form onSubmit={onSubmit}>
        <div className="form-group">
          <label>Name: </label>
          <input
            type="text"
            required
            className="form-control"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>DoB: </label>
          <div>
            <DatePicker selected={dob} onChange={(date) => setDob(date)} />
          </div>
        </div>
        <div className="form-group">
          <label>Email: </label>
          <input
            type="text"
            required
            className="form-control"
            value={trainermail}
            onChange={(e) => setTrainermail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Contact Number: </label>
          <input
            type="text"
            required
            className="form-control"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
        </div>
        <div className="form-group">
          <input
            type="submit"
            value="Create User"
            className="btn btn-primary"
          />
        </div>
      </form>
    </div>
  );
}
