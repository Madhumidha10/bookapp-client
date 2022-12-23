export const addToCart=(book,quantity)=>(dispatch,getState)=>{
var cartItem={
    _id:book._id,
    name:book.name,
    image:book.image,
    quantity:quantity,
    author:book.author,
    price:book.price,
    description:book.description,
     total:book.price*quantity

}

if(quantity>0)
{
    dispatch({type:"ADD_TO_CART",payload:cartItem})
    const cartItems=getState().cartReducer.cartItems
    localStorage.setItem('cartItems',JSON.stringify(cartItems))
}

}

export const deleteFromCart=(item)=>(dispatch,getState)=>{
    dispatch({
        type:"DELETE_FROM_CART" ,
        payload: item,
      })
    
      localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}