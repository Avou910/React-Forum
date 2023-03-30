import React, { useRef } from "react";

const CreateThread = (props) => {
  const titleRef = useRef("");
  const contentRef = useRef("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const newThread = {
      userKey: "temp", //for testing
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
      <input type="text" id="title" ref={titleRef} />
      <br />
      <label htmlFor="content">Content</label>
      <textarea id="content" ref={contentRef} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateThread;
