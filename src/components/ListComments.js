/*
TODO
    - format timestamp
*/
const ListComments = (props) => {
  const reactTimestamp = (timestamp) => timestamp.toDate().toString();

  return (
    <>
      <ul>
        {props.comments.map((comment) => (
          <div key={comment.key}>
            <b>{comment.userKey}</b>
            <br />
            <b>
              <i>{reactTimestamp(comment.timestamp)}</i>
            </b>
            <br />
            {comment.comment}
            <br />
            <br />
          </div>
        ))}
      </ul>
    </>
  );
};

export default ListComments;
