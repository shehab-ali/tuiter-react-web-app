const LinkItem = (link) => {
    return(`
      <li class="nav-item">
        <a class="nav-link" href="${link.link}">
          ${link.name}
        </a>
      </li>
    `)
  }
  
  export default LinkItem;