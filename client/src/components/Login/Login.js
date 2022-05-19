import React, { useState } from "react";
import Camera from "@material-ui/icons/Camera";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Typography } from "@material-ui/core";

import "./login.css";

const Login = ({ setLoginUser }) => {
  const history = useHistory();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const login = () => {
    axios.post("http://localhost:8000/user/login", user).then((res) => {
      alert(res.data.message);
      setLoginUser(res.data.user);
      history.push("/");
    });
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
              placeholder="Email"
              name="email"
              type="text"
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
            <button className="loginButton" onClick={login}>
              Log In
            </button>
            <Typography variant="h6" align="center">
              Don't have an account? Register below
            </Typography>
            <button
              className="loginRegister"
              onClick={() => history.push("/user/register")}
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
