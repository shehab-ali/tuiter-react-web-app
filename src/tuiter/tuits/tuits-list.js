import React, { useEffect } from "react";
import TuitItem from "./tuit-item";
import { useSelector, useDispatch } from "react-redux";
import { findTuitsThunk } from "../../services/tuits-thunks";

const TuitsList = () => {
    const { tuits, loading } = useSelector(
        state => state.tuitsData
    );

    const dispatch = useDispatch();

    useEffect(() => { dispatch(findTuitsThunk()) });

    return (
        <div className="mt-2 bg-light list-group">
            {
                !loading &&
                tuits.map(tuit => <TuitItem key={tuit._id} tuit={tuit} />)
            }
        </div>
    );
}

export default TuitsList;

