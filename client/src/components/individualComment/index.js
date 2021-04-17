import React from "react";
import "./style.css";
import { useStateContext } from "../../utils/GlobalState";

const IndividualComment = ({ content, id, author }) => {
  const [state, dispatch] = useStateContext();

  return (
    <div className="commentDiv">
      <div className="comment-header">
        <p className="comment-author">
          <i>{author}</i>
        </p>
      </div>
      <p>{content}</p>
      {/* <button
        className="like-button"
        onClick={() => dispatch({ type: "add-like", id })}
      >
        Like
      </button> */}
      {/* {comment.likes} Likes */}
    </div>
  );
};

export default IndividualComment;
