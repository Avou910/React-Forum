import React, { useRef } from "react";
import { auth } from "../services/firebase";

const CreateThread = (props) => {
  const titleRef = useRef("");
  const contentRef = useRef("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const user = auth.currentUser;
    const userUid = user.uid;

    const newThread = {
      userKey: userUid,
      title: titleRef.current.value,
      content: contentRef.current.value,
    };
    props.postThread(newThread);

    titleRef.current.value = "";
    contentRef.current.value = "";
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create New Thread</h2>
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" id="title" ref={titleRef} />
      <br />
      <label htmlFor="content">Content</label>
      <br />
      <textarea id="content" ref={contentRef} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateThread;
