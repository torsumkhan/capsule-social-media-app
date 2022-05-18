import React, { useState } from "react";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
import Register from "./components/Register/Register";
import Details from "./components/Details/Details";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useHistory,
} from "react-router-dom";

const App = () => {
  const [user, setLoginUser] = useState({});
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/">
            {user && user._id ? (
              <Home setLoginUser={setLoginUser} />
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
        </Switch>
      </Router>
    </>
  );
};

export default App;
