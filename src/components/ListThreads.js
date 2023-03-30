import React from "react";

const ListThreads = (props) => {
  return (
    <div>
      <h1>Threads</h1>
      {props.threads.map((thread) => (
        <div key={thread.key}>
          <h2>{thread.title}</h2>
          <p>{thread.content}</p>
          <p>{thread.userKey}</p>
        </div>
      ))}
    </div>
  );
};

export default ListThreads;
