import axios from "axios";

export const getAllBooks = () => {
  let response = axios.get("http://localhost:3001/books");
  return response;
};

export const getSingleBookInfo = (id) => {
  let response = axios.get(`http://localhost:3001/book/${id}`);
  return response;
};
