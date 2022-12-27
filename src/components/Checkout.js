import React from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { placeOrder } from '../actions/orderAction';
import { useDispatch,useSelector } from 'react-redux';
import Loading from '../components/Loading'
import Error from '../components/Error'
import Success from '../components/Success'
const Checkout = ({subTotal}) => {
  const dispatch=useDispatch()
  const orderState=useSelector(state=>state.placeOrderReducer)
  const {error,success,loading}=orderState
function tokenHandler(token){
console.log(token)
dispatch(placeOrder(token,subTotal))
}
    const pubKey="pk_test_51MIbYaSJKeFFS1tcIJCLn4mikNVGj7bctaQdj1CmhkkpTwukS7qfH0dsL85OpuZV37KGsBT91pYBaTicjI1v5jnF00TpHaAqrO"
  return (
    <div>
      {loading&&(<Loading />)}
      {error&&(<Error error="Something Went Wrong" />)}
      {success&&(<Success success="Order Placed Succesfully" />)}
    <StripeCheckout stripeKey={pubKey}  amount={subTotal*100} shippingAddress currency='INR' token={tokenHandler}>
   
   <button className="btn btn-danger">PAY NOW</button>
    </StripeCheckout>
    </div>

 
  )
}

export default Checkout