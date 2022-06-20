import React from "react";
import {BsFillPersonFill, BsFacebook} from 'react-icons/bs'
import {RiLockPasswordFill, RiInstagramFill} from 'react-icons/ri'
import {AiFillGoogleCircle} from 'react-icons/ai'
import jew from '../../Images/jew.png'
import './Login.css'
import {Link} from 'react-router-dom'

function Login() {
  return (
  
    <div className="py-5">
      <div className="container py-5 my-5 bg-light rounded-3 shadow">
        <div className="row">
            <div className="col-10 mx-auto">
                <div className="row d-flex justify-content-center align-items-center">
          <div className="col-6 mt-5">
          <img src={jew} className="img-fluid"/>
          </div>
             
          <div className="col-6">
            <h1 className="">Login Page</h1>
           
            <div className="p-3">
             <BsFillPersonFill/>
              <input
                type="email"
                className="p-2 border-bottom border-0 "
                placeholder="example@gmail.com"
              />
            </div>

            <div>
        
              <RiLockPasswordFill/>
              <input
                type="password"
                className="p-2  border-bottom border-0"
                placeholder="Enter password"
              />
            </div>
            <div className="my-3">
            <button className="btn btn-primary ">Login</button>
            </div>

            <div>
              <p>Or Sign in with</p><span> <BsFacebook/> <RiInstagramFill/> <AiFillGoogleCircle/></span>
            </div>
          </div>
          </div>
        </div>
      </div>
      </div>
    </div>
    
  );
}

export default Login;
