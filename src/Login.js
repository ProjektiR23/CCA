import React from "react";
import './Login.css';
import axios from "axios";
import Constants from './components/Constants.json'
import { useNavigate } from 'react-router-dom';
import { UserAuthContext } from "./components/UserAuth";
import { useState,useContext } from "react";

export default function Login(props) {
const UserAuthContextValue = useContext(UserAuthContext);
const navigate = useNavigate();
const [ loginProcessState, setLoginProcessState ] = useState("idle");
  

const LoginForm = async (event) => {
    event.preventDefault();
    setLoginProcessState("kirjaudutaan");
    try {
      const result = await axios.post(Constants.API_ADDRESS + '/kirjautuminen',
      null,
      {
        auth: {
          username: event.target.username.value,
          password: event.target.password.value
        }
      }
      );
    console.log(result);
    console.log(result.data);
    setLoginProcessState("Onnistui");
    setTimeout(() => {
      setLoginProcessState("...")
      UserAuthContextValue.login(result.data.token);
    navigate('/', {replace: true});
     }, 1500); 
  
  
    } catch (error) {
      console.error(error.message);
      setLoginProcessState("Virhe");
      setTimeout(() => setLoginProcessState("..."), 1500)
    }
  }

  let loginUIControls = null;
  switch(loginProcessState) {
    case "idle":
      loginUIControls = <button type="submit">Login</button>
      break;

    case "processing":
      loginUIControls = <span style={{color: 'blue'}}>Processing login...</span>
      break;

    case "success":
      loginUIControls = <span style={{color: 'green'}}>Login successful</span>
      break;

    case "error":
      loginUIControls = <span style={{color: 'red'}}>Error</span>
      break;

    default:
      loginUIControls = <button type="submit">Login</button>
  }
    return (
        <div class="form">
        <form onSubmit={LoginForm}>
        <div class="title">Tervetuloa!</div>
        <div class="subtitle">Kirjautuminen</div>
        <div class="input-container ic1">
          <input id="username" class="input" type="text" placeholder="Käyttäjätunnus " />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">Nimesi</label>
        </div>
        
        <div class="input-container ic2">
          <input id="password" class="input" type="password" placeholder="Salasana " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Salasana </label>
        </div>
        <button type="submit"  class="submit">Kirjaudu Sisään</button>
        </form>
      </div>
    )
}