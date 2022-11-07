import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list/index.js";
import ExploreComponent from "./explore/index.js";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./tuits/tuits-reducer";
import homeReducer from "./tuits/home/home-reducer";
import { configureStore } from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import {Route, Routes, useLocation} from "react-router";
import HomeComponent from "./tuits/home";
import React from "react";


const store = configureStore(
    {
      reducer: {who: whoReducer, tuits: tuitsReducer, home: homeReducer}
  });

function Tuiter() {
  const { pathname } = useLocation();
  let activeTab;
  
  if (pathname.split("/").length === 3) {
    activeTab = pathname.split("/")[2];

  } else {
    activeTab = 'explore';
  }

  return (
      <Provider store={store}>
        <Nav/>
        <div className="row mt-2">
          <NavigationSidebar active={activeTab}/>
          <Routes>
            <Route index path="/" element={<ExploreComponent/>}/>
            <Route path="/home" element={<HomeComponent/>}/>
            <Route path="/explore" element={<ExploreComponent/>}/>
          </Routes>
          <WhoToFollowList/>
        </div>
      </Provider>
  );
}

export default Tuiter