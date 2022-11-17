import React from "react";
import { useSelector } from "react-redux";
import PostSummaryItem from "./post-summary-item";

const PostSummaryList = () => {
    const {tuits} = useSelector(
        (state) => state.tuitsData
    );
    
    return (
        <div className="mt-2 bg-light list-group">
            {tuits.map(post => <PostSummaryItem key={post._id} post={post} />)}
        </div>
    );
}

export default PostSummaryList;

