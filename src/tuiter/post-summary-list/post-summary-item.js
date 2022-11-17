import React from "react";

const PostSummaryItem = ({
    post = {
        "id": 1,
        "topic": "Web Development",
        "userName": "ReactJS",
        "time": "2h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "reactjs.jpg"
    }
}) => {
    return (
        <div className="list-group-item">
            <div className="row ms-0 me-0">
                <div className="col-sm-9 col-md-10 ps-1 pt-1 pb-1 pe-0">
                    <p className="m-0 text-secondary">{post.topic}</p>
                    <p className="m-0">
                        <b className="text-white">{post.userName} </b>
                        <i className="fa fa-check-circle text-white"></i>
                        <span className="text-secondary"> - {post.time}</span>
                    </p>
                    <p className="m-0">
                        <b className="text-white">{post.title}</b>
                    </p>
                </div>
                <div className="d-flex align-items-center col-sm-3 col-md-2 p-2">
                    <img src={`../images/${post.image}`}
                        className="rounded w-100" alt=""/>
                </div>
            </div>
        </div>
    );
}

export default PostSummaryItem;