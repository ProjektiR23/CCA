import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './Home';
import LampotilaTiedot from './LampotilaTiedot';
import Login from './Login';
import NotFound from './NotFound';
import {useState } from 'react';
import Footer from './components/Footer';
import Kirjauduttu from './components/Kirjauduttu';
import {Routes, Route} from 'react-router-dom'
import PaastoLahteet from './components/PaastoLahteet';
import Rekisterointi from './components/Rekisterointi';
import {UserAuthContext} from './components/UserAuth';

const jwtFromStorage = window.localStorage.getItem('appAuthData');

function App() {

   const initialAuthData = {
    jwt: jwtFromStorage,
    login: (newValueForJwt) => {
      const newAuthData = { ...userAuthData,
          jwt: newValueForJwt
        };
      window.localStorage.setItem('appAuthData', newValueForJwt);
      setUserAuthData(newAuthData);
    },
    logout: () => {
      window.localStorage.removeItem('appAuthData');
      setUserAuthData({...initialAuthData});
    }
  };

  const [ userAuthData, setUserAuthData ] = useState({...initialAuthData});
 

let authRoutes = <>
  <Route path="/kirjautuminen" element={<Login  /> } />
  <Route path="/rekisterointi" element={<Rekisterointi /> } />
</>

  if(userAuthData.jwt) {
    authRoutes = <Route path="/kirjauduttu" element={<Kirjauduttu />} />
    
  }
  return (
     <UserAuthContext.Provider value={ userAuthData }>
      
      
      <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home userLoggedIn/>} />
        {authRoutes}
        <Route path="/lampotilatiedot" element={<LampotilaTiedot />} />
        <Route path="/paastoLahteet" element={<PaastoLahteet />} />
        <Route path="*" element={<Home userLoggedIn/>} />
        
      </Routes>
    </div>
    <Footer />
    </>
    </UserAuthContext.Provider>
    
  );
}

export default App;
