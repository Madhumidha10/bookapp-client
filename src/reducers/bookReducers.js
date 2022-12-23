export const getAllBooksReducers = (state = {books:[]}, action) => {
  switch (action.type) {
    case "GET_BOOKS_REQUEST":
      return {
        loading:true,
        ...state,
      }
    case "GET_BOOKS_SUCCESS":
        return {
            loading:false,
          books:action.payload,
        }
    case "GET_BOOKS_FAILED":
        return {
            loading:false,
          error:action.payload,
        }
    default:return state
  }
};
