import React, { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import axios from "axios";
import BackButton from "../components/BackButton";
import { useParams } from "react-router-dom";

const ShowBook = () => {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8000/books/details/${id}`)
      .then((response) => {
        setBook(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error.response || error.message);
        setLoading(false);
      });
  }, []);


  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div className="m-4 flex flex-col border-2 border-green-600 rounded-xl w-fit p-4">
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Id :</span>
            <span className="text-xl">{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Author Name :</span>
            <span className="text-xl">{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Title :</span>
            <span className="text-xl">{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Published Year :</span>
            <span className="text-xl">{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Created At :</span>
            <span className="text-xl">{book.createdAt}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500 ">Updated At :</span>
            <span className="text-xl">{book.updatedAt}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
