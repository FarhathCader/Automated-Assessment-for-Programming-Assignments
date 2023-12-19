import "./register.css";
import { useState } from "react";
import React from 'react'
import axios from 'axios'
import {toast} from 'react-hot-toast'
import Topbar from "../Topbar/Topbar";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
const Register = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  const handleLoginClick = () => {
    setIsChecked(false); // Set arrow direction to default for Login button
  };

  const handleSignUpClick = () => {
    setIsChecked(true); // Set arrow direction for Sign Up button
  };
  const handleToggleForm = () => {
    setIsChecked(!isChecked);
    setIsLoginMode(!isLoginMode);
  };

      const navigate = useNavigate()
    const [data,setData] = useState({
        name : '',
        email : '',
        password : '',
    })

    const [credential,setCredential] = useState({
        email : '',
        password : '',
    })

    const registerUser = async (e) =>{
        e.preventDefault();
        const {name,email,password} = data
        try{
            const {data} = await axios.post('/register',{
                name,email,password
            })
            if(data.error){
                toast.error(data.error)
            }else{
                setData({})
                toast.success('user registered successfull')
                navigate('/student')
            }
        }catch(err){
            console.log(err) 
               }
    }

    const loginUser = async (e) =>{
        e.preventDefault();
        const {email,password} = credential
        try{
            const {data} = await axios.post('/login',{
                email,
                password
            });
            if(data.error){
                toast.error(data.error)
            }else{
                setCredential({});
                toast.success('login successfull')
                navigate('/student')
            }
        }catch(err){
            console.log(err)
        }
    }
  return (
    <div className="container">
      <div className="buttons">
        <button className="log" onClick={handleLoginClick}>Login</button>
        <button className="log" onClick={handleSignUpClick}>Sign Up</button>
      </div>
      <input
        type="checkbox"
        name="reg-log"
        id="reg-log"
        className="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label htmlFor="reg-log" id="line">
        <i
          className={`fa-solid fa-arrow-up-long ${isChecked ? "flipped" : ""}`}
        ></i>
      </label>
      <div className="card-3d-wrap">
        <div className="card-3d-wrapper">
        <div className="card-front">
            <div class="center-wrap">
              <h4>Login</h4>
              <div class="form-group">
                <input
                  type="email"
                  name="logemail"
                  id="logemail"
                  class="form-style"
                  placeholder="Email"
                  value={credential.email} onChange={(e)=> setCredential({...credential,email : e.target.value})} 
                />
                <i class="fa-solid fa-envelope" id="lgenvelope"></i>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="logepass"
                  id="logepass"
                  class="form-style"
                  placeholder="Password"
                  value={credential.password} onChange={(e)=> setCredential({...credential,password : e.target.value})}

                />
                <i class="fa-solid fa-lock" id="lglock"></i>
              </div>
              <button className="submit" onClick={loginUser}>Submit</button>
              <p>
                 <Link href="#" to = {'/forget'} style={{color : "white"}}>Forgot password?</Link>
              </p>
            </div>
          </div>
          <div class="card-back">
            <div class="center-wrap">
              <h4>Register</h4>
              <div class="form-group">
                <input
                  type="text"
                  name="logname"
                  id="logname"
                  class="form-style"
                  placeholder="Name"
                  value={data.name} onChange={(e)=> setData({...data,name : e.target.value})}
                />
                <i class="fa-solid fa-user" id="rguser"></i>
              </div>
              <div class="form-group">
                <input
                  type="email"
                  name="logemail"
                  id="logemail"
                  class="form-style"
                  placeholder="Email"
                  value={data.email} onChange={(e)=> setData({...data,email : e.target.value})}
                />
                <i class="fa-solid fa-envelope" id="rgenvelope"></i>
              </div>
              <div class="form-group">
                <input
                  type="password"
                  name="logepass"
                  id="logepass"
                  class="form-style"
                  placeholder="Password"
                  value={data.password} onChange={(e)=> setData({...data,password : e.target.value})}
                  
                />
                <i class="fa-solid fa-lock" id="rglock"></i>
              </div>
              <button className="submit" onClick={registerUser} >Submit</button>
              <p>
                Already Have Account? <a style={{color : "white"}} href="#" onClick={handleToggleForm}>Login</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
