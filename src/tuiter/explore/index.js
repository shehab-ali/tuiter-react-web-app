import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";

const ExploreComponent = () => {
    return (
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input className="form-control rounded-pill ps-5" placeholder="Search Tuiter" />
                    <i className="fa fa-search wd-pos-search"></i>
                </div>
                <div className="col-1 d-flex align-items-center">
                    <i className="fa fa-cog wd-cog"></i>
                </div>
            </div>

            <ul className="nav nav-tabs mt-2 mb-2">
                <li className="nav-item">
                    <a className="nav-link active" href="for-you.html">For you</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="trending.html">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="news.html">News</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="sports.html">Sports</a>
                </li>
                <li className="nav-item d-none d-md-block">
                    <a className="nav-link" href="entertainment.html">Entertainment</a>
                </li>
            </ul>

            <div className="position-relative">
                <img src="../../images/starship.png" className="w-100" alt=""/>
                <h1 className="wd-image-text">SpaceX Starship</h1>
            </div>
            <PostSummaryList />
        </>
    )
}

export default ExploreComponent;