import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Home from './Home';
import LampotilaTiedot from './LampotilaTiedot';
import Login from './Login';
import NotFound from './NotFound';
import React from 'react';
import Footer from './components/Footer';

import {Routes, Route} from 'react-router-dom'
import PaastoLahteet from './components/PaastoLahteet';
import Rekisterointi from './components/Rekisterointi';



function App() {
  return (
    <>
    <Navbar />
    <Header />
    <div className='container'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lampotilatiedot" element={<LampotilaTiedot />} />
        <Route path="kirjautuminen" element={<Login />} />
        <Route path="/paastoLahteet" element={<PaastoLahteet />} />
        <Route path="/rekisterointi" element={<Rekisterointi/>} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    <Footer />
    </>
    
    
  );
}

export default App;
