export default function Header(){
    return (
        <header>
           <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container">
    <a className="navbar-brand" href="/">Logan Fullerton</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" href="contact">Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="portfolio">My Projects</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="resume">Resume</a>
        </li>
        
          
      </ul>
     
    </div>
  </div>
</nav>
        </header>
    )
}