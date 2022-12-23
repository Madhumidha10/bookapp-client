import React, { useState, useEffect } from "react";
import Book from "../components/Book";
import { useDispatch, useSelector } from "react-redux";
import { getAllBooks } from "../actions/bookActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
const Home = () => {
  const dispatch = useDispatch();
  const bookState = useSelector((state) => state.getAllBooksReducers);
  const { books, loading, error } = bookState;
  useEffect(() => {
    dispatch(getAllBooks());
  }, [dispatch]);
  return (
    <div>
      <div className="row justify-content-center">
        {loading ? (
          <Loading />
        ) : error ? (
       <Error error="Something went wrong" />
        ) : (
          books.map((book) => {
            return (
              <div className="col-md-3  m-3" key={book._id}>
                <Book book={book} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default Home;
