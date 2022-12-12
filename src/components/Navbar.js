import { Link } from "react-router-dom";
import Login from "../Login";
import React, { useContext } from 'react'
import { UserAuthContext } from './UserAuth';



export default function Navbar(props) {
    
 
  const userAuthContextValue = useContext(UserAuthContext);
  
  
  
  
  
  return (
        <nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">CCA</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/">Kotisivu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/lampotilatiedot">Lämpötilatiedot ja co2 pitoisuudet</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="/paastolahteet">Päästölähteet</a>
        </li>
        
        
          
        
        <li class="nav-item">
        { userAuthContextValue.jwt != null ? 
        <a class="nav-link" href="/kirjauduttu">Omat tiedot</a>: <a class="nav-link" href="/kirjautuminen">Kirjaudu sisään</a> } 
          </li>


      </ul>
    </div>
  </div>
</nav>
    )
}