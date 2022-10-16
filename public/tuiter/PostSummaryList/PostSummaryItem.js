const PostSummaryItem = (post) => {
  return(`
    <li class="list-group-item">
      <div class="wd-tweets">
        <img src="${post.image}" class="wd-posts-images"/>
        <div class="wd-topic text-muted">
          ${post.topic}
        </div>
        <div class="fw-bold wd-account">
          ${post.userName}
          <span class="fa-stack wd-verify-check">
              <i class="fas fa-stack-2x fa-circle">
              </i>
              <i class="fas fa-stack-1x fa-check wd-check-mark">
              </i>
           </span>
           <span class="fw-normal text-muted">
              - ${post.time}
           </span>
        </div>
        <div class="fw-bold wd-content">
          ${post.title}
        </div>
        <div class="wd-tweets text-muted">
          ${post.tweets}
        </div>
      </div>
    </li>
  `);
}

export default PostSummaryItem;