import React from "react";
import './Login.css';

export default function ContactUs() {
    return (
        <div class="form">
        <div class="title">Tervetuloa!</div>
        <div class="subtitle">Kirjautuminen</div>
        <div class="input-container ic1">
          <input id="Nimi" class="input" type="text" placeholder="Käyttäjätunnus " />
          <div class="cut"></div>
          <label for="firstname" class="placeholder">Nimesi</label>
        </div>
        
        <div class="input-container ic2">
          <input id="Salasana" class="input" type="text" placeholder="Salasana " />
          <div class="cut cut-short"></div>
          <label for="email" class="placeholder">Salasana </label>
        </div>
        <button type="text" class="submit">Kirjaudu Sisään</button>
      </div>
    )
}