import TuitStats from "./tuit-stats";
import { deleteTuit } from "./tuits-reducer";
import { useDispatch } from "react-redux";

const TuitItem = ({ tuit }) => {
  const dispatch = useDispatch();

  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  };

  return (
    <div className="list-group-item d-flex flex-row p-2">
      <div className="flex-shrink-0 p-2 me-2">
        <img
          className="avatar"
          src={`/img/${tuit.image}`}
          alt={`${tuit.title}`}
        />
      </div>
      <div className="flex-grow-1">
        <i
          className="bi bi-x-lg float-end"
          onClick={() => deleteTuitHandler(tuit._id)}
        ></i>
        <div>
          <span className="fw-bold">{tuit.userName} </span>
          <i className="fa fa-check-circle" /> &nbsp;
          <span className="label">{tuit.handle} &middot; </span>
          <span className="label">{tuit.time}</span>
        </div>
        <div>{tuit.tuit}</div>
        <TuitStats tuit={tuit} />
      </div>
    </div>
  );
};

export default TuitItem;
