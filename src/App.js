import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login";
import Home from "./components/Home";
import firebase from "firebase/compat/app";
import CommentPage from "./pages/CommentPage";

import "./App.css";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user);
    });
  }, []);

  return (
    <div className="app">
      <Routes>
        <Route
          exact
          path="/"
          element={user ? <Home user={user} /> : <Login />}
        />
        <Route exact path="/thread/:threadKey" element={<CommentPage />} />
      </Routes>
    </div>
  );
}

export default App;
