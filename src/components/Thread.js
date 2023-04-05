const Thread = (props) => {
  const reactTimestamp = (timestamp) => timestamp.toDate().toString();
  console.log(props);
  return (
    <>
      <ul>
        <b>{props.thread.title}</b>
        <br />
        <b>{props.thread.content}</b>
      </ul>
    </>
  );
};

export default Thread;
