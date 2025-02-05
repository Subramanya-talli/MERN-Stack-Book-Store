import React, { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from "../components/BackButton";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const CreateBook = () => {
  const [title, settitle] = useState(" ");
  const [author, setauthor] = useState(" ");
  const [publishYear, setyear] = useState(" ");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSaveBook = () => {
    if (!title.trim() || !author.trim() || !String(publishYear).trim()) {
      setError("All fields are required!");
      return;
    }
    const data = {
      title,
      author,
      publishYear,
    };
    setloading(true);
    axios
      .post("http://localhost:8000/books/newBook", data)
      .then((responce) => {
        console.log(responce)
        setloading(false);
        navigate('/');
      })
      .catch((error) => {
        setloading(false);
        console.log(error.message);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className=" text-3xl my-4">Create Book</h1>
      {error && <p className="text-red-500">{error}</p>}
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
              onChange={(e) => settitle(e.target.value)}
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
              onChange={(e) => setauthor(e.target.value)}
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
              onChange={(e) => setyear(e.target.value)}
              className="border-2 border-grey-600 px-4 py-2 w-full rounded-md my-1" 
              required
            />
          </div>

          <button onClick={handleSaveBook} className="py-2 bg-green-600 text-l ">Save</button>
        </div>
      </div>
    </div>
  );
};

export default CreateBook;
