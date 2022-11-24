import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/cyborg/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list"
import ExploreComponent from "./explore"
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import HomeComponent from "./home";
import {Routes, Route} from "react-router";

const store = configureStore(
    {
        reducer: {
            who: whoReducer,
            tuitsData: tuitsReducer
        }
    }
);

function Tuiter() {
    return (
        <Provider store={store}>
            <div className="row mt-2 mb-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active="" />
                </div>
                <div className="col-10 col-lg-7 col-xl-6">
                    <Routes>
                        <Route index element={<HomeComponent />} />
                        <Route path="/explore/" element={<ExploreComponent />}/>
                    </Routes>
                </div>
                <div className="d-none d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList />
                </div>
            </div>
        </Provider>
    )
}
export default Tuiter;

