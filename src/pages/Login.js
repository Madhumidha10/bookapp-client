import React, { useState, useEffect } from "react";
import {useSelector,useDispatch} from 'react-redux'
import { loginUser } from "../actions/userAction";
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const loginState=useSelector(state=>state.loginUserReducer)
  const {error,success,loading}=loginState
  const dispatch=useDispatch()

  useEffect(()=>{
    if(localStorage.getItem('currentUser'))
    {
      window.location.href='/'
    }
    
  },[])
  function handleLogin(){

    const user={
      email:email,
      password:password
    }
    dispatch(loginUser(user))
  }

  return (
    <div>
    <div className="row justify-content-center mt-5">
      <div className="col-md-5 mt-5 bs3 p-3">
           
      {loading&&(<Loading />)}
          {error &&(<Error error="Invalid Credentials" />)}
          {success && (<Success success="User Login Successfully" />)}
        <h2 className="text-center" style={{ fontSize: "20px" }}>
          Login
        </h2>
        <div>
       
          <input type="text" placeholder="email" className="form-control"    value={email}
            onChange={(e)=>setEmail(e.target.value)} />
          <input
            type="password"
            placeholder="password"
            className="form-control"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
       
          <button className="btn btn-danger mt-2 mb-2" onClick={handleLogin}>Login</button>
          <br/>
          <a href="/register" className="mt-5 text-dark ">Click Here To Register</a>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Login