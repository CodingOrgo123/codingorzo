import React,{useState ,useEffect} from 'react'
import './App.css';

import Page1 from './Pages/Page1';
import Problems from './components/Problems';
import {Routes,Route}from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import ContactUs from './components/Main/Contactus';
import Page2 from './Pages/Page2';
import Page3 from './Pages/Page3';
import LoginRegister from './components/Register';
import Page4 from './Pages/Page4';
import Page5 from './Pages/Page5';



function App() {
  const [theme,setTheme]=useState('')
  const toggleTheme = ()=>{
    theme===''? setTheme('light-theme'):setTheme('')  }
    useEffect(()=>{
      document.body.className=theme
    },[theme])
  
  return (
    <>
    
   <Routes>
            <Route path="/" element={<Page1 />} />
            <Route path="/aboutus" element={<Page2 />} />
           
            <Route path="/studentdashboard" element={<Page3 />} />
           
            <Route path="/signup" element={<Page4 />} />
            <Route path="/contactus" element={<Page5 />} />
            
            
            
        </Routes>
    
  
    </>
  );
}

export default App;
