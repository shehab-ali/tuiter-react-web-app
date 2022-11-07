import React from "react";
import TuitsItem
  from "./tuits-item.js";
import {useSelector} from "react-redux";

const TuitsList = () => {
  const tuits = useSelector(state => state.home)
  return(
    <div>
      <ul className ="list-group">
        {
          tuits.map(tuit =>
            <div>
              <TuitsItem
              key={tuit._id} tuit = {tuit}/>
            </div>
          )
        }
      </ul>
    </div>
  );
};
export default TuitsList;