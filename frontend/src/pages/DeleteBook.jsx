import React, {useState} from 'react'
import axios from 'axios';

// const [loading, setLoading] = useState(false)
const DeleteBook = () => {
  
  axios.
  delete(`http://localhost:5173/books/delete/${id}`)
  .then((responce)=>{
    
  })
  return (
    <div>DeleteBook</div>
  )
}

export default DeleteBook;