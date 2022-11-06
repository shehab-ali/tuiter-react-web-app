import React from "react";
import WhoToFollowListItem from "./who-to-follow-list-item";
import { useSelector } from "react-redux";
import { StoreState } from "../index";

const WhoToFollowList = () => {
  const whoArray = useSelector<StoreState, StoreState["who"]>(
    (state) => state.who
  );
  return (
    <div className="list-group d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
      <li className="list-group-item">
        <h3>Who to follow</h3>
      </li>
      {whoArray.map((who) => (
        <WhoToFollowListItem key={who._id} who={who} />
      ))}
    </div>
  );
};

export default WhoToFollowList;
