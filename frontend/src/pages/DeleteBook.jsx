import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";


const DeleteBook = () => {
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, settitle] = useState(" ");
  const [author, setauthor] = useState(" ");
  const [publishYear, setyear] = useState(" ");

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/books/details/${id}`)
      .then((responce) => {
        setauthor(responce.data.author);
        settitle(responce.data.title);
        setyear(responce.data.publishYear);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  function handleDelete(){
    
    const data = {
      title,
      author,
      publishYear
     };
     setLoading(true);
    axios.
    delete(`http://localhost:8000/books/delete/${id}`, data)
    .then((response)=>{
      setLoading(false);
      navigate("/");
    })
    .catch((error) => {
      setLoading(false);
      console.log(error.message);
    });
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className=" text-3xl my-4">Delete Book</h1>
      {loading ? <Spinner /> : " "}

      <div className="flex justify-center items-center ">
        <div className="flex flex-col justify-center border-2 border-green-500 rounded-xl w-[500px] p-4 max-auto mt-8">
          <div className="my-4">
            <label htmlFor="title" className="text-xl mr-4 text-grey-600">
              Title
            </label>
            <input
              id="title"
              type="text"
              value={title}
              readOnly
              className="border-2 border-grey-600 px-4 py-2 w-full rounded-md my-1"
              required
            />
          </div>

          <div className="my-4">
            <label htmlFor="author" className="text-xl mr-4 text-grey-600">
              Author
            </label>
            <input
              id="author"
              type="text"
              value={author}
              readOnly
              className="border-2 border-grey-600 px-4 py-2 w-full rounded-md my-1"
              required
            />
          </div>

          <div className="my-4">
            <label htmlFor="year" className="text-xl mr-4 text-grey-600">
              Published Year
            </label>
            <input
              id="year"
              type="text"
              value={publishYear}
              readOnly
              className="border-2 border-grey-600 px-4 py-2 w-full rounded-md my-1"
              required
            />
          </div>

          <button className="py-2 bg-green-600 text-l " onClick={handleDelete}>Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteBook;
