const WhoToFollowListItem = (who) => {
  return(`
    <li class="list-group-item">
      <div class="wd-follow-logo">
        <img src="${who.avatarIcon}" class="wd-follow-logo"/>
      </div>
      <button class="btn btn-primary wd-format-follow">
        Follow
      </button>
      <div>
        ${who.userName}
        <span class="fa-stack wd-verify-check">
          <i class="fas fa-stack-2x fa-circle">
          </i>
          <i class="fas fa-stack-1x fa-check  wd-check-mark">
          </i>
        </span>
      </div>
      <div>
        @${who.handle}
      </div class="fw-normal text-muted wd-handle">
    </li>
  `);
}

export default WhoToFollowListItem;