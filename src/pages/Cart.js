import React, { Fr } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
  AiFillDelete,
} from "react-icons/ai";
import { addToCart, deleteFromCart } from "../actions/cartActions";
import { useNavigate } from "react-router-dom";
import Checkout from "../components/Checkout";
const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const cartState = useSelector((state) => state.cartReducer);
  const cartItems = cartState.cartItems;
  var subTotal = cartItems.reduce((x, item) => x + item.total, 0);
  return (
    <div>
      <div>
        {cartItems.length <= 0 ? (
          <div className="m-5 px-5 py-5  jumbotron">
            <h1 className="display-4">
              Your cart is empty{" "}
              <button
                className="btn btn-light text-primary ml-4"
                onClick={() => navigate(-1)}
              >
                Go Back
              </button>
            </h1>
          </div>
        ) : (
          //     <div className=' row '>

          //     <div classNam="col-md-6 ">
          //     <h2 style={{fontSize:'20px'}}>My Cart</h2>
          //  {cartItems.map((item)=>{return (
          //         <div className='  p-2 '>
          //           <div className='text-left m-1 '>
          //             <h6>{item.name}</h6>
          //             <h1 style={{display:'inline',fontSize:'15px'}}>Quantity</h1>
          //            <AiOutlinePlusCircle className='mx-1' onClick={()=>dispatch(addToCart(item,item.quantity+1))}/>
          //             <b>{item.quantity}</b>

          //             <AiOutlineMinusCircle className='mx-1'  onClick={()=>dispatch(addToCart(item,item.quantity-1))}/>

          //             <h6>{item.price}*{item.quantity}={item.total}</h6>

          //             </div>

          //             <div className='tex-right '>
          //               <img src={item.image} alt={item.name} style={{height:'50px',width:'50px'}}  />
          //             </div>
          //             <div>           <AiFillDelete className='mx-1 text-danger' onClick={()=>dispatch(deleteFromCart(item))} /></div>
          //         </div>
          //       )})}
          //     </div>
          //     <div classNam="col-md-4">
          //     <h2 style={{fontSize:'20px'}}>SubTotal</h2>
          //     <h6>  {subTotal}</h6>
          //     <button className='btn btn-danger' >CHECK OUT</button>
          //       </div>
          //   </div>
          <div class="container mt-5 pl-2 rounded cart">
         <h2 style={{fontSize:'20px'}}>My Cart</h2>
            <div class="row no-gutters">
              <div class="col-md-8">
                {cartItems.map((item) => {
                  return (
                    <div class="product-details mr-2">
                      <div class="d-flex justify-content-center align-items-center mt-3 p-2 items rounded">
                        <div class="d-flex flex-row w-75">
                          <img class="rounded" src={item.image} width="40" />
                          <div class="ml-5 p-2 align-items-left">
                            <div class="font-weight-bold d-block">
                              {item.name}
                            </div>
                
                            <span class="spec font-weight-bold">
                              {item.author}
                            </span>
                          </div>
                        </div>
                        <div class="d-flex flex-row w-25">
                     
                        <span class="d-block  font-weight-bold">
                        <AiOutlinePlusCircle className='mx-1' onClick={()=>dispatch(addToCart(item,item.quantity+1))}/>
                      <b>{item.quantity}</b>

                     <AiOutlineMinusCircle className='mx-1'  onClick={()=>dispatch(addToCart(item,item.quantity-1))}/>
                          </span>
                          </div>
                        <div class="d-flex flex-row ">
                    
                          <span class="d-block ml-5 font-weight-bold">
                            {item.price}*{item.quantity}=₹{item.total}
                          </span>
                          <i class="fa fa-trash-o ml-3 text-black-50"></i>

                          
                          <span ><AiFillDelete className='mx-1 text-danger' onClick={()=>dispatch(deleteFromCart(item))} /></span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div class="col-md-4">
                <h2 style={{ fontSize: "45px" }}>SubTotal: ₹{subTotal}</h2>
              
                <Checkout subTotal={subTotal} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
