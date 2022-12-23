import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { registerUser } from "../actions/userAction";
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const dispatch=useDispatch()
  const registerState=useSelector(state=>state.registerUserReducer)
  const {error,success,loading}=registerState
  function handleRegister(){
    if(password!=confirm){
      alert("Password not match")
    }
    else{
      const newUser={
        name:name,
        email:email,
        password:password
      }
      dispatch(registerUser(newUser))
    }
  }
  return (
    <div>
      <div className="row justify-content-center mt-5">
        <div className="col-md-5 mt-5 bs3 p-3 ">
       
          {loading&&(<Loading />)}
          {error &&(<Error error="Email already Exists" />)}
          {success && (<Success success="User Registered Successfully" />)}
          <h2 className="text-center" style={{ fontSize: "20px" }}>
            Register
          </h2>
          <div>
            <input type="text" placeholder="name" className="form-control"    value={name}
              onChange={(e)=>setName(e.target.value)} />
            <input type="text" placeholder="email" className="form-control"    value={email}
              onChange={(e)=>setEmail(e.target.value)} />
            <input
              type="password"
              placeholder="password"
              className="form-control"
              value={password}
              onChange={(e)=>setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="confirm password"
              className="form-control"
              value={confirm}
              onChange={(e)=>setConfirm(e.target.value)}
            />
            <button className="btn btn-danger mt-2 mb-2" onClick={handleRegister}>Register</button>
            <br/>
            <a href="/login" className="mt-5  text-dark">Click Here To Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
