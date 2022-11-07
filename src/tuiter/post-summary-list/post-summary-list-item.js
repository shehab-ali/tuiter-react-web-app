import React from "react";
const PostSummaryItem = (
    {
      post = {
        "topic": "Space",
        "userName": "SpaceX",
        "time": "2h",
        "title": "Tesla Cybertruck lands on Mars and picks up the Curiosity rover on its 6' bed",
        "image": "tesla.png"
      }
    }
) => {
  return(
      <li className="list-group-item">
        <div className="row">
          <div className="col-10">
            <div className="text-muted">
              {post.topic}
            </div>
            <div className="fw-bold">
              {post.userName} {' '}
              <span className="text-muted fw-normal">
                &middot; {' '} {post.time}
              </span>
            </div>
            <div className="fw-bold">
              {post.title}
            </div>
            <div className="text-muted">
              {post.tweets}
            </div>
          </div>
          <div className="col-2">
            <img width={70} className="float-end rounded-3" src={`/images/${post.image}`} alt="logo"/>
          </div>
        </div>
      </li>
  );
};
export default PostSummaryItem;