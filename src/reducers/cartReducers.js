const cartItems = localStorage.getItem("cartItems")
  ? JSON.parse(localStorage.getItem("cartItems"))
  : [];
export const cartReducer = (state = { cartItems: cartItems }, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      const item = action.payload;
      // console.log(state.cartItems)
      const existItem = state.cartItems.find((x) => x._id === item._id);

      if (existItem) {
        return {
          ...state,
          cartItems: state.cartItems.map((x) =>
            x._id === existItem._id ? item : x
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, item],
        };
      }
    // return {
    //   ...state,
    //   cartItems: [...state.cartItems, action.payload],
    // };
    case "DELETE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems.filter((x) => x._id !== action.payload._id),
      }
    default:
      return state;
  }
};
