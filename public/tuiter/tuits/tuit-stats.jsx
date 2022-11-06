const TuitStats = ({ tuit }) => {
  return (
    <div className="d-flex flex-row justify-content-between mt-2 w-75">
      <span className="mx-2">
        <i className="far fa-comment" />
        &nbsp;
        {tuit.replies}
      </span>
      <span className="mx-2">
        <i className="fa fa-retweet" />
        &nbsp;
        {tuit.retuits}
      </span>
      <span className="mx-2">
        <i
          className={`${tuit.liked ? "fa" : "far"} fa-heart`}
          style={{ color: tuit.liked ? "red" : "black" }}
        />
        &nbsp;
        {tuit.likes}
      </span>
      <span className="mx-2">
        <i className="fa fa-share" />
      </span>
    </div>
  );
};

export default TuitStats;
