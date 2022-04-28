import { useEffect, useState } from "react";
import { getSingleBookInfo } from "../../services/api-calls";
import Navbar from "../shared/Navbar";
import { useNavigate, useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";
import axios from "axios";

const BookInfo = () => {
  const { id } = useParams();
  let navigate = useNavigate();

  const [book, setBook] = useState({});
  const [deleted, setDeleted] = useState(false);

  useEffect(() => {
    getSingleBookInfo(id).then((res) => setBook(res.data.book));
  }, []);

  console.log(book);

  const destroy = () => {
    axios({
      url: `http://localhost:3001/book/${id}`,
      method: "DELETE",
    })
      .then(() => setDeleted(true))
      .catch(console.error);
  };

  useEffect(() => {
    if (deleted) {
      return navigate("/");
    }
  }, [deleted, navigate]);

  return (
    <>
      <Navbar />

      <h2>{book.title}</h2>

      <img src={book.imageLink} />
      <p>ISBN: {book.ISBN}</p>
      <p>Author: {book.author}</p>
      <p>Year: {book.year}</p>
      <p>Genres: {JSON.stringify(book.genres)}</p>
      <NavLink to={`/book-info/${id}/edit`}>
        <button>Edit</button>
      </NavLink>
      <button onClick={() => destroy()}>Delete Item</button>
    </>
  );
};
export default BookInfo;
