import React,{useState,useEffect} from 'react'
import Navbar from '../components/Navbar/Navbar'
import LoginRegister from '../components/Register'

const Page4 = () => {
    const [theme,setTheme]=useState('')
    const toggleTheme = ()=>{
      theme===''? setTheme('light-theme'):setTheme('')  }
      useEffect(()=>{
        document.body.className=theme
      },[theme])
  return (
    <div>
       <Navbar theme={theme} toggleTheme={toggleTheme} />
      <LoginRegister />
    </div>
  )
}

export default Page4
