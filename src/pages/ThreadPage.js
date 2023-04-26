import React, { useState, useEffect } from "react";
import { firestore } from "../services/firebase.js";
import { collection, addDoc, getDocs } from "firebase/firestore";
import ListThreads from "../components/ListThreads.js";
import CreateThread from "../components/CreateThread";

const ThreadPage = () => {
  const [threads, setThreads] = useState([]);
  const threadRef = collection(firestore, "threads");

  const fetchThreads = async () => {
    try {
      const query = await getDocs(threadRef);
      const fetchThreads = [];
      query.forEach((doc) => {
        fetchThreads.push({
          key: doc.id,
          title: doc.data().title,
          userKey: doc.data().userKey,
          content: doc.data().content,
        });
      });
      console.log(fetchThreads);
      setThreads(fetchThreads);
    } catch (error) {
      console.log("Error fetching threads: ", error);
    }
  };

  const postThread = async (thread) => {
    try {
      const threadContent = await addDoc(threadRef, {
        userKey: thread.userKey,
        title: thread.title,
        content: thread.content,
      });
      fetchThreads();
    } catch (error) {
      console.log("Error creating thread: ", error);
    }
  };

  useEffect(() => {
    fetchThreads();
  }, []);

  return (
    <div>
      <div>
        <CreateThread postThread={postThread} />
      </div>
      <div className="threadlist-container">
        <ListThreads threads={threads} />
      </div>
      
    </div>
  );
};

export default ThreadPage;
