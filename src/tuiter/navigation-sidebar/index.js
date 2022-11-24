import React from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router";

const NavigationSidebar = () => {
    const { pathname } = useLocation();
    const paths = pathname.split('/');
    const active = paths[2];
    return (
        <>
            <div className="list-group mb-2">
                <span className="list-group-item">
                    <i className="fab fa-twitter"></i>
                </span>
                <Link to="/tuiter/" className={`list-group-item list-group-item-action ${active === '' ? 'active' : ''}`}>
                    <i className="fa fa-home"></i>
                    <span className="d-none d-xl-inline d-xxl-inline">Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${active === 'explore' ? 'active' : ''}`}>
                    <i className="fa fa-hashtag"></i>
                    <span className="d-none d-xl-inline d-xxl-inline">Explore</span>
                </Link>
                <Link to="/tuiter/notifications" className={`list-group-item list-group-item-action ${active === 'notifications' ? 'active' : ''}`}>
                    <i className="fa fa-bell"></i>
                    <span className="d-none d-xl-inline d-xxl-inline">Notifications</span>
                </Link>
                <Link to="/tuiter/messages" className={`list-group-item list-group-item-action ${active === 'messages' ? 'active' : ''}`}>
                    <i className="fa fa-envelope"></i>
                    <span className="d-none d-xl-inline d-xxl-inline">Messages</span>
                </Link>
                <Link to="/tuiter/bookmarks" className={`list-group-item list-group-item-action ${active === 'bookmarks' ? 'active' : ''}`}>
                    <i className="fa fa-bookmark"></i>
                    <span className="d-none d-xl-inline d-xxl-inline">Bookmarks</span>
                </Link>
                <Link to="/tuiter/lists" className={`list-group-item list-group-item-action ${active === 'lists' ? 'active' : ''}`}>
                    <i className="fa fa-list"></i>
                    <span className="d-none d-xl-inline d-xxl-inline">Lists</span>
                </Link>
                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${active === 'profile' ? 'active' : ''}`}>
                    <i className="fa fa-user"></i>
                    <span className="d-none d-xl-inline d-xxl-inline">Profile</span>
                </Link>
                <Link to="/tuiter/more" className={`list-group-item list-group-item-action ${active === 'more' ? 'active' : ''}`}>
                    <span className="d-none d-xl-inline d-xxl-inline">More</span>
                </Link>
            </div>
            <button className="btn rounded-pill bg-primary text-white w-100">Tuit</button>
        </>
    )
};
export default NavigationSidebar;
// line 45
/*
<span className="fa-stack" style="font-size: 8px">
<i className="fas fa-circle fa-stack-2x"></i>
<i className="fas fa-ellipsis-h fa-stack-1x fa-inverse"></i>
</span>
*/