import React from "react";
import PostItem from "./post-item";
import "./index.css";

const HomeComponent = () => {
    return(
        <ul className="list-group">
            {
               <PostItem/>
            }
        </ul>
    );
};
export default HomeComponent;

