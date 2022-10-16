import WhoToFollowListItem from "./WhoToFollowListItem.js";
import whos from "./whos.js";

const WhoToFollowList = () => {
  return(`
    <ul class="list-group fw-bold">
      <li class="list-group-item">
        Who to follow
      </li>
      ${
        whos.map(who => {
          return(WhoToFollowListItem(who));
        }).join('')
      }
    </ul>
  `);
}

export default WhoToFollowList;