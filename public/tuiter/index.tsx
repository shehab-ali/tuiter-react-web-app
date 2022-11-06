import Nav from "../nav";
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore-component";
import whoReducer from "./reducers/who-reducer";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import tuitsReducer from "./tuits/tuits-reducer";
import { Route, Routes } from "react-router";
import Home from "./home";

const store = configureStore({
  reducer: { who: whoReducer, tuits: tuitsReducer },
});

export type StoreState = typeof store extends { getState(): infer T }
  ? T
  : never;

function Tuiter() {
  return (
    <Provider store={store}>
      <div className="row mt-2">
        <Nav />
        <NavigationSidebar />
        <div className="col-10 col-lg-7 col-xl-6">
          <Routes>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="explore" element={<ExploreComponent />} />
          </Routes>
        </div>
        <WhoToFollowList />
      </div>
    </Provider>
  );
}
export default Tuiter;
