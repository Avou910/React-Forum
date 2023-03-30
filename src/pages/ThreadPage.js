import React, { useState, useEffect } from "react";
import firebase from "../services/firebase";
import "firebase/firestore";
import ThreadList from "../components/ThreadList";
import CreateThread from "../components/CreateThread";

const ThreadPage = () => {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    const db = firebase.firestore();

    db.collection("threads")
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          title: doc.data().title,
          content: doc.data().content,
          userKey: doc.data().userKey,
        }));
        setThreads(data);
      });
  }, []);

  const handleThreadCreated = (newThread) => {
    console.log("New thread created:", newThread);
    const db = firebase.firestore();
    db.collection("threads").add(newThread);
  };

  return (
    <div>
      <ThreadList threads={threads} />
      <CreateThread onThreadCreated={handleThreadCreated} />
    </div>
  );
};

export default ThreadPage;