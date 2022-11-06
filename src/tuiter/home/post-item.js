import React from "react";
import '@fortawesome/fontawesome-free/css/all.css';

const PostItem = (
    {
        post = {
            "userName": "SpaceX",
            "handle": "SpaceX",
            "profile_image": "spacex.png",
            "time": "23h",
            "post_title": "Dennis and Akiko Tito are the first two crewmembers on Starship’s second commercial spaceflight around the Moon → http://spacex.com/updates",
            "post_image": "denisAkiko.jpeg",
            "comments": "595",
            "retweets": "1,168",
            "Likes": "11.1K"
        },
        post2 = {
            "userName": "Elon Musk",
            "handle": "elonmusk",
            "profile_image": "musk.png",
            "time": "15h",
            "post_title": "We might need a different name, as this is basically just Starlink with roaming capability, so you can take your terminal anywhere.",
            "post_content": {
                "userName": "SpaceX",
                "handle": "SpaceX",
                "profile_image": "spacex.png",
                "time": "16h",
                "post_title": "Starlink for RVs now has over 100,000 customers! Access high-speed, low-latency internet on an as-needed basis anywhere Starlink provides active coverage → http://starlink.com/rv",
            },
            "comments": "5,346",
            "retweets": "1,601",
            "Likes": "19.2K"
        }
    }
) => {
    return (
        <>

            <div className="wd-grid-row">
                <i className="fa fa-retweet"></i> Elon Musk retweeted
                <div className="pt-2 ps-1">
                    <img className="wd-circular-image  rounded-circle "
                         src={`/images/${post.profile_image}`}/>
                </div>

                <div className="wd-grid-col-major-page wd-grid-col-tuit-major wd-grid-row">

                    <p className="wd-username-style"><span className="fw-bold">{post.userName}</span> <i
                        className="fa fa-check-circle"></i> <span
                        style={{"color": "rgb(110, 118, 125)"}}>
                   @{post.handle} . {post.time}</span> <span
                        className="wd-grid-col-minor-page">&hellip;</span></p>
                    <p className="wd-main-tuit-content">{post.post_title}</p>
                    <img className=" wd-tuit-image" src={`/images/${post.post_image}`}/>
                    <div className="wd-grid-row-icons">
                        <div className="wd-grid-row-first">
                            <i className="fa fa-regular fa-comment"></i><span
                            className="wd-comments-style">{post.comments}</span>
                        </div>
                        <div className="wd-grid-row-first">
                            <i className="fa  fa-retweet"></i><span
                            className="wd-comments-style">{post.retweets}</span>
                        </div>
                        <div className="wd-grid-row-first">
                            <i className="fa fa-regular fa-heart"></i><span
                            className="wd-comments-style">{post.Likes}</span>
                        </div>
                        <div className="wd-grid-row-first">
                            <i className="fa fa-regular fa-share-from-square"></i><span
                            className="wd-comments-style"></span>
                        </div>
                    </div>
                    <span className="text-primary">Show in this thread</span>
                    <br/>
                </div>

            </div>

            <div className="wd-grid-row">
                <img className="wd-circular-image  rounded-circle"
                     src={`/images/${post2.profile_image}`}/>
                <div className="wd-grid-col-major-page wd-grid-col-tuit-major wd-grid-row">
                    <p className="wd-username-style"><span className="fw-bold">{post2.userName}</span> <i
                        className="fa fa-check-circle"></i> <span
                        style={{"color": "rgb(110, 118, 125)"}}>
                   @{post2.handle} . {post2.time}</span> <span
                        className="wd-grid-col-minor-page">&hellip;</span></p>
                    <p className="wd-main-tuit-content">{post2.post_title}</p>
                    <div className="list-group width">
                        <div className="list-group-item wd-grid-row">
                            <img className="wd-circular-image2  rounded-circle"
                                 src={`/images/${post2.post_content.profile_image}`}/>
                            <div className="wd-grid-col-major-page wd-grid-col-tuit-major wd-grid-row">
                                <p className="wd-username-style"><span className="fw-bold">{post2.post_content.userName}</span> <i
                                    className="fa fa-check-circle"></i> <span
                                    style={{"color": "rgb(110, 118, 125)"}}>
                   @{post2.post_content.handle} . {post2.post_content.time}</span> <span
                                    className="wd-grid-col-minor-page">&hellip;</span></p>
                            </div>
                            <p className="wd-main-tuit-content">{post2.post_content.post_title}</p>
                        </div>
                    </div>

                    <div className="wd-grid-row-icons">
                        <div className="wd-grid-row-first">
                            <i className="fa fa-regular fa-comment"></i><span
                            className="wd-comments-style">{post2.comments}</span>
                        </div>
                        <div className="wd-grid-row-first">
                            <i className="fa  fa-retweet"></i><span
                            className="wd-comments-style">{post2.retweets}</span>
                        </div>
                        <div className="wd-grid-row-first">
                            <i className="fa fa-regular fa-heart"></i><span
                            className="wd-comments-style">{post2.Likes}</span>
                        </div>
                        <div className="wd-grid-row-first">
                            <i className="fa fa-regular fa-share-from-square"></i><span
                            className="wd-comments-style"></span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default PostItem;


