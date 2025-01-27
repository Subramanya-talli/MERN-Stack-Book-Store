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
        console.log(response.data);
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
            <span>{book._id}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Author Name :</span>
            <span>{book.author}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Title :</span>
            <span>{book.title}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Published Year :</span>
            <span>{book.publishYear}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Created At :</span>
            <span>{book.createdAt}</span>
          </div>
          <div className="my-4">
            <span className="text-xl mr-4 text-grey-500">Updated At :</span>
            <span>{book.updatedAt}</span>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShowBook;
