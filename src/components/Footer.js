import React, { useContext } from 'react'
import { UserAuthContext } from './UserAuth';





export default function Footer() {
    
    const userAuthContextValue = useContext(UserAuthContext);
    return (
        

        
    <footer className="footer">
        <div className="container">
            <div>
            { userAuthContextValue.jwt != null ? <p>Kirjattu sisään</p>:
        <p>   Eikö sinulla ole käyttäjää? Klikkaa <a href="/rekisterointi" class="active">Rekisteröinti!  </a></p>   }  </div>
            </div>
            </footer>
    );
}