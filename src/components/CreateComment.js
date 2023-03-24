import { useRef } from "react";

/*
TODO
    - use auth to get username 
        + remove userKey field
*/

const CreateComment = (props) => {
  const userKeyRef = useRef(""); // for debug only remove later
  const commentRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const comment = {
      userKey: userKeyRef.current.value,
      comment: commentRef.current.value,
    };
    props.postComment(comment);

    userKeyRef.current.value = "";
    commentRef.current.value = "";
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="text">userKey</label>
          <br></br>
          <input id="text" ref={userKeyRef}></input>
        </div>
        <div>
          <label htmlFor="text">comment</label>
          <br></br>
          <textarea id="text" ref={commentRef}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreateComment;
