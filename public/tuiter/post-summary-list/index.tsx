import PostSummaryItem from "./post-summary-item";
import { useSelector } from "react-redux";
import { StoreState } from "../index";

function PostSummaryList() {
  const postsArray = useSelector<StoreState, StoreState["tuits"]>(
    (state) => state.tuits
  );
  return (
    <div className="list-group">
      {postsArray.map((post) => (
        <PostSummaryItem key={post._id} post={post} />
      ))}
    </div>
  );
}

export default PostSummaryList;
