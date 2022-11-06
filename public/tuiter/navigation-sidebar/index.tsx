import React from "react";
import { useLocation, useNavigate } from "react-router";

const tabs = [
  "tuiter",
  "home",
  "explore",
  "notifications",
  "messages",
  "bookmarks",
  "lists",
  "profile",
  "more",
];

const NavigationSidebar = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const active = pathname.split("/")[1];

  const go = (tab: string) => {
    navigate(`/tuiter/${tab}`);
  };

  return (
    <div className="col-2 col-md-2 col-lg-1 col-xl-2">
      <ul className="list-group">
        {tabs.map((tab) => (
          <li
            key={tab}
            className={`list-group-item cursor-pointer button ${
              active === tab ? "active" : ""
            }`}
            onClick={() => go(tab)}
          >
            <span className="d-none d-lg-inline">
              {tab[0].toUpperCase() + tab.substring(1)}
            </span>
          </li>
        ))}
      </ul>
      <a
        className="btn btn-primary w-100 mt-2 custom-rounded"
        href="../tuit.html"
      >
        Tweet
      </a>
    </div>
  );
};
export default NavigationSidebar;
