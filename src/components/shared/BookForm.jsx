import { Link } from "react-router-dom";
const BookForm = ({ book, handleSubmit, handleChange, cancelPath }) => {
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <label>Editing</label>
      <input
        placeholder="book"
        defaultValue={book.title}
        name="title"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="author"
        defaultValue={book.author}
        name="author"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="year"
        defaultValue={book.year}
        name="year"
        onChange={(e) => handleChange(e)}
      />
      <input
        placeholder="ISBN"
        defaultValue={book.ISBN}
        name="ISBN"
        onChange={(e) => handleChange(e)}
      />

      <input
        placeholder="Image URL"
        defaultValue={book.imageLink}
        name="imageLink"
        onChange={(e) => handleChange(e)}
      />
      <button type="submit">Submit</button>
      <Link to={cancelPath}>
        <button>Cancel</button>
      </Link>
    </form>
  );
};
export default BookForm;
