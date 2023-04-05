import { useRef } from "react";
import { auth } from "../services/firebase";

const CreateComment = (props) => {
  const userKey =
    auth.currentUser != null ? auth.currentUser.uid : "invalid user";
  const userName =
    auth.currentUser != null ? auth.currentUser.displayName : "Null";
  const commentRef = useRef("");

  const submitHandler = (event) => {
    event.preventDefault();

    const comment = {
      userKey: userKey,
      userName: userName,
      comment: commentRef.current.value,
    };
    props.postComment(comment);

    commentRef.current.value = "";
  };
  return (
    <>
      <form onSubmit={submitHandler}>
        <div>
          <b>User name:</b>
          <br></br>
          {userName}
        </div>
        <div>
          <b>Comment:</b>
          <br></br>
          <textarea id="text" ref={commentRef}></textarea>
        </div>
        <button>Submit</button>
      </form>
    </>
  );
};

export default CreateComment;
