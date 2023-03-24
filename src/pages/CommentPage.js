import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  collection,
  addDoc,
  getDocs,
  serverTimestamp,
} from "firebase/firestore";
import { firestore } from "../services/firebase.js";
import ListComments from "../components/ListComments";
import CreateComment from "../components/CreateComment";

/*
TODO
    - block create comment if null auth
*/

const CommentPage = () => {
  const [comments, setComments] = useState([]);
  const { postKey } = useParams();
  const postRef = collection(firestore, postKey);

  const fetchComments = async () => {
    const query = await getDocs(postRef);
    const fetchComments = [];
    query.forEach((doc) => {
      fetchComments.push({
        key: doc.id,
        userKey: doc.data().userKey,
        comment: doc.data().comment,
        timestamp: doc.data().timestamp,
      });
    });

    setComments(fetchComments);
  };

  const postComment = async (comment) => {
    const commentRef = await addDoc(postRef, {
      userKey: comment.userKey,
      comment: comment.comment,
      timestamp: serverTimestamp(),
      timestampEdit: "",
    });
    fetchComments();
  };
  useEffect(() => {
    fetchComments();
  }, []);

  return (
    <>
      <ListComments comments={comments} />
      <CreateComment postComment={postComment} />
    </>
  );
};

export default CommentPage;
