import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./components/routes/Home";
import BookInfo from "./components/routes/BookInfo";
import CreatePage from "./components/routes/CreatePage";
import EditPage from "./components/routes/EditPage";

import "./App.css";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <h3>{location.state ? location.state.msg : null}</h3>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book-info/:id" element={<BookInfo />} />
        <Route path="/create-book" element={<CreatePage />} />
        <Route path="/book-info/:id/edit" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
