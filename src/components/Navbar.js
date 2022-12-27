import React, { Fragment } from "react";
import {useSelector,useDispatch} from "react-redux"
import {logoutUser} from '../actions/userAction'
const Navbar = () => {
const dispatch=useDispatch()

  const cartState=useSelector(state=>state.cartReducer)
  const loginState=useSelector(state=>state.loginUserReducer)
const {currentUser}=loginState
console.log(currentUser)
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-danger bs2">
      <a className="navbar-brand" href="/">
        Books Wagon.com
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarNav">
        <ul className="navbar-nav ml-auto text-light">
          {currentUser? (
          
          <div className="dropdown">
  <a className="btn btn-danger dropdown-toggle" href="#" role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
  {currentUser?.name}
  </a>

  <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
  <a className="dropdown-item" href="#">Orders</a>
    <a className="dropdown-item" href="#" onClick={()=>dispatch(logoutUser())}>Logout</a>

  </div>
</div>
   ): <li className="nav-item active">
            <a className="nav-link" href="/login">
              Login 
            </a>
          </li>}
         
          <li className="nav-item">
            <a className="nav-link" href="/cart">
              Cart{cartState.cartItems.length}
            </a>
          </li>
        
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
