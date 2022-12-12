import './Rekisterointi.css';
import axios from 'axios';
import Constants from './Constants.json'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';



export default function Rekisterointi() {

  const [signupAnnouncerState, setSignupAnnouncerState] = useState("...")
  const navigate = useNavigate();

const SignupForm = async  (event) => {
  event.preventDefault();
  setSignupAnnouncerState("Käsitellään")
  console.log(event.target.username.value);
  console.log(event.target.email.value);
  console.log(event.target.password.value);

  try {
    const result = await axios.post(Constants.API_ADDRESS + '/rekisterointi',
    {
      username: event.target.username.value,
      email: event.target.email.value,
      password: event.target.password.value
    });
    console.log(result);

    
    setSignupAnnouncerState("RekisterointiOnnistui")
    setTimeout(() => {
      navigate('/kirjautuminen', { replace: true});
    },1500)


  } catch (error) {
    console.error(error);
    setSignupAnnouncerState("rekisterointiEpaonnistui")
  }
}
let signupUIControls = null;
switch(signupAnnouncerState) {
  case "...":
    signupUIControls = <button type="submit"   class="submit" > Rekisteröi</button>
    break;

    case "Käsitellään":
      signupUIControls = <span style={{ color: "white"}}>Käsitellään...</span>
      break;

      case"RekisterointiOnnistui":
      signupUIControls = <span style={{ color: "green"}}> Rekisteröinti onnistui!</span>
      break;

      case "rekisterointiEpaonnistui":
      signupUIControls = <span style={{ color: "red"}}> Virhe rekisteröinnissä</span>
}
  
    return (
        <div class="form">
          <form onSubmit={SignupForm}>
        <div class="title">Tervetuloa!</div>
        <div class="subtitle">Rekisteröinti</div>
        <div class="input-container ic1">
          <input id="username" class="input" type="text" placeholder="Käyttäjätunnus " 
          
          />
          <div class="cut"></div>
          <label for="username" class="placeholder">Nimesi</label>
        </div>
        <div class="input-container ic2">
          <input id='email' class="input" type="text" placeholder="Sähköposti " 
          
          />
          <div class="cut"></div>
          <label for="email" class="placeholder">Sähköposti</label>
        </div>
        <div class="input-container ic2">
          <input id="password" class="input" type="password" placeholder="Salasana " 
          
          />
          <div class="cut cut-short"></div>
          <label for="password" class="placeholder">Salasana </label>
        </div>
        {signupUIControls}
        </form>
      </div>
      
    )
}