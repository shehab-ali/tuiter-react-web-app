import React from "react";
const PostSummaryItem = ({
  post = {
    topic: "Space",
    userName: "SpaceX",
    time: "2h",
    title:
      "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
    image: "tesla.png",
  },
}) => {
  return (
    <div className="list-group-item d-flex flex-row p-2">
      <div className="flex-grow-1">
        <div>
          <span className="label">{post.userName}</span>
          <span className="label"> . {post.time}</span>
        </div>
        <div className="fw-bold">{post.topic}</div>
        <div>{post.title}</div>
      </div>
      <img
        className="thumbnail flex-shrink-0 rounded"
        src={`/img/${post.image}`}
        alt={`${post.title}`}
      />
    </div>
  );
};
export default PostSummaryItem;
