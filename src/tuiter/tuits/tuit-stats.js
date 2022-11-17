import React from "react";
import { useDispatch } from "react-redux";
import { updateTuitThunk } from "../../services/tuits-thunks";

const TuitStats = ({ tuit }) => {
    const dispatch = useDispatch();

    return (
        <div className="row">
            <div className="col">
                <i className="fa fa-comment me-2"> </i>
                {tuit.replies}
            </div>
            <div className="col">
                <i className="fa fa-retweet me-2"></i>
                {tuit.retuits}
            </div>
            <div className="col">
                {
                    tuit.liked && <i className="fa fa-heart text-danger me-2"
                    onClick={() => dispatch(updateTuitThunk(
                        {
                            ...tuit,
                            likes: tuit.likes - 1,
                            liked: false
                        }
                    ))}></i>
                }
                {
                    !tuit.liked && <i className="fa fa-heart me-2"
                    onClick={() => dispatch(updateTuitThunk(
                        {
                            ...tuit,
                            likes: tuit.likes + 1,
                            liked: true
                        }
                    ))}></i>
                }
                {tuit.likes}
            </div>
            <div className="col">
                {
                    tuit.disliked && <i className="fa-solid fa-thumbs-down text-danger me-2"
                    onClick={() => dispatch(updateTuitThunk(
                        {
                            ...tuit,
                            dislikes: tuit.dislikes - 1,
                            disliked: false
                        }
                    ))}></i>
                }
                {
                    !tuit.disliked && <i className="fa-solid fa-thumbs-down me-2"
                    onClick={() => dispatch(updateTuitThunk(
                        {
                            ...tuit,
                            dislikes: tuit.dislikes + 1,
                            disliked: true
                        }
                    ))}></i>
                }
                {tuit.dislikes}
            </div>
            <div className="col">
                <i className="fa fa-share"></i>
            </div>
        </div>
    );
};

export default TuitStats;