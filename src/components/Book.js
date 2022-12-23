import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useSelector,useDispatch } from 'react-redux';
import { addToCart } from '../actions/cartActions';
const Book = ({ book }) => {
  const [show, setShow] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
const dispatch=useDispatch()

  function addItem()
  {
dispatch(addToCart(book,quantity))
  }
  return (
    <div style={{margin:"70px"}} >
    <div className=" shadow-lg p-3 mb-3 bg-white rounded"  >
      <div onClick={handleShow}>
      <div className="font-weight-bold">{book.name}</div>
      <img src={book.image}  alt={book.name} className="img-fluid" style={{height:'200px',width:'200px'}}/>
    <div className="font-weight-bolder font-italic">{book.author}</div>
    <div className="text-monospace">₹{book.price}</div>
      </div>
      
    <div className="btn btn-danger text-light m-1 " onClick={addItem}>Add to cart</div>

    </div>
 
    <Modal show={show} onHide={handleClose} >

        <Modal.Header closeButton>
          <Modal.Title >{book.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
        <img src={book.image} alt={book.name} className="img-fluid " style={{height:'200px'}} />
        </Modal.Body>
        <Modal.Footer>
        <p>{book.description}</p>
         <button className='btn btn-danger' onClick={handleClose}>CLOSE</button>
        </Modal.Footer>
  
      </Modal>
   
   
    
      </div>
  );
};

export default Book;
