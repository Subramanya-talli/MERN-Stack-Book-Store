import React, { useState, useEffect } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineAdd } from "react-icons/md";

const Home = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false); // ✅ Corrected useState

  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:5173/books")
      .then((response) => {
        console.log(response);
        setBooks(response.data.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center">
        <h1 className="text 3xl my-8">Books List</h1>
        <Link to="books/newBook" className="bg-green-600	">
          <MdOutlineAdd className="text-green-800 text-4xl" />
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
          <tbody>{console.log(books)}</tbody>
        </table>
      )}
    </div>
  );
};

export default Home;
