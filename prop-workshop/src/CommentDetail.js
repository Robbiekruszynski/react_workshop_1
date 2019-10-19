import React from "react";
import ReactDOM from "react-dom";
import faker from "faker";

const CommentDetail = props => {
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img alt="avatar" src={props.authorAvatar} />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="data">{props.timeAgo}</span>
        </div>
        <div className="text"> {props.commentMark}</div>
      </div>
    </div>
  );
};

export default CommentDetail;