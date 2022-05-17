import React, { useState } from "react";
import Camera from "@material-ui/icons/Camera";
import axios from "axios";
import { useHistory } from "react-router-dom";

import "./register.css";

const Register = () => {
  const history = useHistory();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    confirmPass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const register = () => {
    const { name, email, password, confirmPass } = user;
    if (name && email && password && password === confirmPass) {
      axios
        .post("http://localhost:8000/user/register", user)
        .then((res) => alert(res.data.message));
      history.push("/user/login");
    } else {
      alert("invalid input");
    }
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="cont">
            <Camera style={{ fontSize: "90px", color: "#9b5de5" }} />
            <h3 className="loginTagline">CAPTURE</h3>
          </div>
          <span className="loginDesc">Share what matters</span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Name"
              name="name"
              type="text"
              value={user.name}
              className="loginInput"
              onChange={handleChange}
            />
            <input
              placeholder="Email"
              type="text"
              name="email"
              value={user.email}
              className="loginInput"
              onChange={handleChange}
            />
            <input
              placeholder="Password"
              name="password"
              type="password"
              value={user.password}
              className="loginInput"
              onChange={handleChange}
            />
            <input
              placeholder="Confirm Password"
              name="confirmPass"
              type="password"
              value={user.confirmPass}
              className="loginInput"
              onChange={handleChange}
            />
            <button className="loginButton" onClick={register}>
              Sign Up
            </button>

            <button
              className="loginRegister"
              onClick={() => history.push("/user/login")}
            >
              Log In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
