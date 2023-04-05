import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  addDoc,
  getDocs,
  doc,
  getDoc,
  serverTimestamp,
} from "firebase/firestore";
import { firestore, auth } from "../services/firebase.js";
import Thread from "../components/Thread.js";
import ListComments from "../components/ListComments";
import CreateComment from "../components/CreateComment";

/*
TODO
    - delete, edit comment if author / admin
*/

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const [thread, setThread] = useState([]);
  const { threadKey } = useParams();
  const threadRef = doc(firestore, "threads", threadKey);
  const postRef = collection(firestore, threadKey);

  const fetchThread = async () => {
    try {
      const query = await getDoc(threadRef);
      const fetchThread = {
        key: query.id,
        title: query.data().title,
        userKey: query.data().userKey,
        content: query.data().content,
      };
      setThread(fetchThread);
    } catch (error) {
      console.log("Error fetching thread: ", error);
    }
    fetchComments();
  };

  const fetchComments = async () => {
    const query = await getDocs(postRef);
    const fetchComments = [];
    query.forEach((doc) => {
      fetchComments.push({
        key: doc.id,
        userKey: doc.data().userKey,
        userName: doc.data().userName,
        comment: doc.data().comment,
        timestamp: doc.data().timestamp,
      });
    });

    setComments(fetchComments);
  };

  const postComment = async (comment) => {
    const commentRef = await addDoc(postRef, {
      userKey: comment.userKey,
      userName: comment.userName,
      comment: comment.comment,
      timestamp: serverTimestamp(),
      timestampEdit: "",
      deleted: 0,
    });
    fetchComments();
  };
  useEffect(() => {
    fetchThread();
  }, []);

  return (
    <>
      <Thread thread={thread} />
      <ListComments comments={comments} />
      {auth.currentUser != null ? (
        <CreateComment postComment={postComment} />
      ) : (
        "Please login to comment"
      )}
    </>
  );
};

export default CommentPage;
