import React from "react";
const WhoToFollowListItem = ({
  who = { userName: "NASA", handle: "NASA", avatarIcon: "nasa.png" },
}) => {
  return (
    <div className="list-group-item d-flex flex-row">
      <img
        className="avatar"
        src={`/img/${who.avatarIcon}`}
        alt={`${who.userName} logo`}
      />
      <div className="flex-grow-1 ms-2">
        <div className="fw-bold">
          {who.userName} <i className="fa fa-check-circle"></i>
        </div>
        <span className="label">@{who.handle}</span>
      </div>
      <button className="btn btn-primary custom-rounded align-self-center">
        Follow
      </button>
    </div>
  );
};
export default WhoToFollowListItem;
