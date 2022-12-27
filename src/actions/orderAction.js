import axios from "axios";

export const placeOrder = (token, subtotal) => async (dispatch, getstate) => {
  dispatch({ type: "PLACE_ORDER_REQUEST" });
  const currentUser= getstate().loginUserReducer.currentUser;
  const cartItems = getstate().cartReducer.cartItems;
  try {
    const response = await axios.post("/api/orders/placeorder", {
      token,
      subtotal,
      currentUser,
      cartItems
    });
    console.log(response);
    dispatch({ type: "PLACE_ORDER_SUCCESS" });
  } catch (error) {
    dispatch({ type: "PLACE_ORDER_FAILED" });
    console.log(error);
  }
};
