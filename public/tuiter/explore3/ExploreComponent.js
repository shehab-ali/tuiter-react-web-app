import PostSummaryList from "../PostSummaryList/index.js";
import LinkItem from "./LinkItem.js";
import links from "./links.js";

const ExploreComponent = () => {
  return(`
    <i class="fas fa-search wd-override-search-icon">
    </i>
    <input class="wd-override-search" type="text" placeholder="Search Twitter"/>
    <span class="fa-2x">
      <a href="#">
         <i class="fas fa-cog text-primary wd-override-gear">
         </i>
      </a>
    </span>
    <ul class="nav nav-tabs wd-navbar">
      <li class="nav-item">
        <a class="nav-link active" href="../for-you.html">For you</a>
      </li>
      ${
        links.map(link => {
          return(LinkItem(link));
        }).join('')
      }
      <li class="nav-item">
        <a class="nav-link" href="../entertainment.html">
          <span class="d-none d-md-inline d-lg-inline">
            Entertainment
          </span>
        </a>
      </li>
    </ul>
    <div class="card">
      <img class="img-fluid wd-spacex-override" src="../../images/spaceship.png">
      <div class="card-img-overlay">
        <h2 class="fw-bold wd-picture-caption">
          SpaceX Starship
        </h2>
      </div>
    </div>
    ${PostSummaryList()}
  `)
}

export default ExploreComponent;