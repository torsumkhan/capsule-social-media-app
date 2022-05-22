import React, { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Add from "./components/Add/Add";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

const App = () => {
  const [user, setLoginUser] = useState({});

  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Home setLoginUser={setLoginUser} user={user} />
            ) : (
              <Login setLoginUser={setLoginUser} />
            )}
          </Route>
          <Route path="/user/login">
            <Login setLoginUser={setLoginUser} />
          </Route>

          <Route path="/user/register">
            <Register />
          </Route>

          <Route exact path="/add">
            <Add />
          </Route>
          <Route exact path="/posts/:id">
            <Details />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
