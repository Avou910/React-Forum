import React from "react";
import { Link } from "react-router-dom";

const ListThreads = (props) => {
  return (
    <>
      <h1>Threads</h1>
      {props.threads.map((thread) => (
        <div key={thread.key}>
          <Link to={`/thread/${thread.key}`} className="postTitle">
            <h2>{thread.title}</h2>
          </Link>
        </div>
      ))}
    </>
  );
};

export default ListThreads;
