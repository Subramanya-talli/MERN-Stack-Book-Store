import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiFillDelete } from "react-icons/ai";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  /*  */

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8000")
      .then((response) => {
        setBooks(response.data.Books);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error.response || error.message);
        setLoading(false);
      });
  }, []);


  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl my-8">Books List</h1>
        <Link to="books/newBook" className="bg-white-600	">
          <MdOutlineAdd className="border-2 border-green-600 rounded text-4xl " />
        </Link>
      </div>
      {loading ? (
        <Spinner />
      ) : (
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr className="border border-slate-600 rounded-md">
              <th className="border border-slate-600 rounded-md text-center">
                No
              </th>
              <th className="border border-slate-600 rounded-md text-center">
                Title
              </th>
              <th className="border border-slate-600 rounded-md text-center max-md:hidden">
                Author
              </th>
              <th className="border border-slate-600 rounded-md text-center max-md:hidden">
                Publish Year
              </th>
              <th className="border border-slate-600 rounded-md text-center">
                Operations
              </th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={book._id} className="h-8">
                <td className="border border-slate-700 rounded-md text-center">
                  {index + 1}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.title}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.author}
                </td>
                <td className="border border-slate-700 rounded-md text-center">
                  {book.publishYear}
                </td>
                <td className="border border-slate-700 rounded-md text-center ">
                  <div className="flex justify-center gap-x-4">
                    <Link to={`/books/edit/${book._id}`}>
                      <AiOutlineEdit className="m-3 text-xl text-green-800" />
                    </Link>
                    <Link to={`/books/details/${book._id}`}>
                      <AiOutlineInfoCircle className="m-3 text-xl text-yellow-800" />
                    </Link>
                    <Link to={`/books/delete/${book._id}`}>
                      <AiFillDelete className="m-3 text-xl text-blue-900" />
                    </Link>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
