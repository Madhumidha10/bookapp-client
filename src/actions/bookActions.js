import axios from "axios"
export const getAllBooks=()=>async dispatch =>{
    dispatch({type:"GET_BOOKS_REQUEST"})
try {
    const response=await axios.get('/api/books/getAllBooks')
    console.log(response)
    dispatch({type:"GET_BOOKS_SUCCESS",payload:response.data})
} catch (error) {
    dispatch({type:"GET_BOOKS_FAILED",payload:error})
}
}
