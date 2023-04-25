import'../style/Login.css';
import { Link } from 'react-router-dom';
import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";
import axios from "axios";
import { setAuthUser } from "../helper/Storage";
import { useNavigate } from "react-router-dom";

 const Login = () => {
  const navigate = useNavigate();
    const [login, setLogin] = useState({
      email: "",
      password: "",
      loading: false,
      err: [],
    });
    const LoginFun = (e) => {
        e.preventDefault();
        setLogin({ ...login, loading: true, err: [] });
        axios
      .post("http://localhost:4000/login", {
        email: login.email,
        password: login.password,
      })
      .then((resp) => {
        setLogin({ ...login, loading: false, err: [] });
        setAuthUser(resp.data);
        navigate("/dashboard");

      })
      .catch((errors) => {
        setLogin({
          ...login,
          loading: false,
          err: errors.response.data.errors,
        });
      });
       
    };

return (
  <div className="background">
    <div class="parent">
      <h1>Log In</h1>
      {login.err.map((error, index) => (
        <Alert key={index} variant="danger" className="p-2">
          {error.msg}
        </Alert>
      ))}

      <form onSubmit={LoginFun}>
        <div class="two">
          <label for="email">Email</label>
          <input id="email" type="email" placeholder='enter your mail'
           required
           value={login.email}
           onChange={(e) => setLogin({ ...login, email: e.target.value })}
          
          
          />
        </div>
        <br />
        <div class="three">
          <label for="pass">password</label>
          <input id="pass" type="password" placeholder='enter your pass'
          required
          value={login.password}
          onChange={(e) => setLogin({ ...login, password: e.target.value })}
          
          
          />
        </div>
        <br />
        <div class="che">
          <input id="check" type="checkBox" />
          <label for="check">I agree all statements in <Link href="">terms of services</Link></label>
        </div>
        <br />
        <div class="singup">
          <button className="btn btn-dark w-100"
          variant="primary"
          type="submit"
          disabled={login.loading === true}>Log In</button>
        </div>
      </form>
    </div>
  </div>
  )
}

export default Login;