import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleBookInfo } from "../../services/api-calls";
import BookForm from "../shared/BookForm";
import axios from "axios";

const EditPage = () => {
  const navigate = useNavigate();
  const { id } = useParams(); //get the id from the current object to update
  const [book, setBook] = useState({
    genres: [],
    title: "",
    author: "",
    year: "",
    ISBN: "",
    imageLink: "",
  });
  const [updated, setUpdated] = useState(false);

  useEffect(() => {
    getSingleBookInfo(id).then((res) => setBook(res.data.book));
  }, []);

  const handleChange = (event) => {
    const updatedField = { [event.target.name]: event.target.value };
    const editedBook = Object.assign(book, updatedField);
    setBook(editedBook);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    axios({
      url: `http://localhost:3001/book/${id}`,
      method: "PUT",
      data: book,
    })
      .then(() => setUpdated(true))
      .catch(console.error);
  };
  useEffect(() => {
    if (updated) {
      return navigate(`/`);
    }
  });
  return (
    <BookForm
      book={book}
      handleChange={(e) => handleChange(e)}
      handleSubmit={(e) => handleSubmit(e)}
      cancelPath={`/book/${id}`}
    />
  );
};

export default EditPage;
