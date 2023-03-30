import React, { useState } from "react";
import firebase from "../services/firebase";

const CreateThread = ({ onThreadCreated }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const db = firebase.firestore();
    const user = firebase.auth().currentUser;
    if (!user) {
      console.log("No user logged in");
      return;
    }
    const newThread = {
      title,
      content,
      author: {
        uid: user.uid,
        displayName: user.displayName,
        email: user.email,
      },
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    };
    try {
      const docRef = await db.collection("threads").add(newThread);
      const thread = {
        id: docRef.id,
        ...newThread,
      };
      onThreadCreated(thread);
      setTitle("");
      setContent("");
    } catch (error) {
      console.log("Error creating thread:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Thread</h2>
      <label htmlFor="title">Title</label>
      <input
        type="text"
        id="title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <label htmlFor="content">Content</label>
      <textarea
        id="content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateThread;