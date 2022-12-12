import { UserAuthContext } from './UserAuth'
import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
export default function Kirjauduttu(props) {
    
    
    
    
    const UserAuthContextValue = useContext(UserAuthContext);
    return (
        <div className="kirjauduttu">
            <h2>Omat tiedot</h2>
        <div>
            
        </div>
         <div>
        <Link to='/'>Go back to home</Link><br />
        <button onClick={() => UserAuthContextValue.logout() }
         >Logout</button>
      </div>
        </div>
    )
}