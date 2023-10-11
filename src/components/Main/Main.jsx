import { useNavigate } from 'react-router-dom';
import'../../styles/Main.css'
import React, { useState } from 'react';
import back from'../../images/back3.png'
const Main = ({theme}) => {
  const navigate=useNavigate();
  const [showLoginForm, setShowLoginForm] = useState(false);

  const toggleLoginForm = () => {
    setShowLoginForm(!showLoginForm);
  };

  return (
    <div>
     <section className="main_section">
        <div className="container">
            <div className="main_wrapper">
                <div className="main-content">
                <div>
                    <h2>Welcome to Codingorzo</h2>
                    <h2>Where coding and creativity unites to</h2>
                    <h2 className='highlight'>Promote your coding skills</h2>

                </div>
                <p className="description">Codingorzo is an online coding platform that allows the students<br /> to solve the problems efficiently and to promote their coding skills</p>
                <div className="main-btns">
                    <button className="primary-btn" onClick={toggleLoginForm}>Get Started Now</button>
                    {showLoginForm && (
        <div className="popup">
          <div className="wrapper">
          <h1>Login</h1>
          <form>
      <div class="input-box">
        <input type="text" placeholder="Username" required />
        <i class='bx bxs-user'></i>
      </div>
      <div class="input-box">
        <input type="password" placeholder="Password" required />
        <i class='bx bxs-lock-alt' ></i>
      </div>
      <div class="remember-forgot">
        <label><input type="checkbox" />Remember Me</label>
        <a href="#">Forgot Password</a>
      </div>
      <button type="submit" class="btn">Login</button>
      <div class="register-link">
        <p>Dont have an account? <a href="#">Register</a></p>
      </div>
    </form>
            <button onClick={toggleLoginForm}>Close</button>
          </div>
      </div>
      )}
                    <button className="secondary-btn" onClick={()=>navigate('/aboutus')}>Know More</button>
                </div>
                </div>
                
                <div className="main-img">
<img id="main-img" src={back}height="460" />
                </div>
                </div></div></section> 
    </div>
  )
}

export default Main
