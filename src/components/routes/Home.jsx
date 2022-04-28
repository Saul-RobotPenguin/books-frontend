import { useState, useEffect } from "react";
import { getAllBooks } from "../../services/api-calls";
import BookInfo from "./BookInfo";
import EditPage from "./EditPage";
import Navbar from "../shared/Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [booksData, setBooksData] = useState([]);

  useEffect(() => {
    getAllBooks().then((res) => setBooksData(res.data));
  }, []);

  console.log(booksData);

  return (
    <>
      <Navbar />
      <h1>Home</h1>
      {booksData.map((book, i) => (
        <>
          <NavLink to={`/book-info/${book._id}`}>
            <h2>{book.title}</h2>
          </NavLink>

          <img src={book.imageLink} />
          {/* <p>{book.ISBN}</p>
          <p>{book.author}</p>
          <p>{JSON.stringify(book.genres)}</p> */}
        </>
      ))}
    </>
  );
};

export default Home;
