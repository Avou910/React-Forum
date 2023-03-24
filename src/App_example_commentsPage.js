/* Delete after main app.js is done */
import CommentPage from "./pages/CommentPage";
import { Route, Routes } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" />
        <Route path="/post/:postKey" exact element={<CommentPage />} />
      </Routes>
    </>
  );
}

export default App;
