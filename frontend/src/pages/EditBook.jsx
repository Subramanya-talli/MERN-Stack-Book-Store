import React,{useEffect, useState} from 'react'
import Spinner from "../components/Spinner"
import BackButton from "../components/BackButton"
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EditBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const {id} = useParams();
  

  
  return (
    <div className='my-6 flex items-center justify-center'>
      <h1 className='text-3xl'>Edit Book Info</h1>
      <div>
        <span></span>
      </div>
    </div>
  )
}

export default EditBook;