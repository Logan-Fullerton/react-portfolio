export default function Header(){
    return (
        <header>
           <nav className="navbar navbar-expand-md " style={{background:"#D1D1B1"}}>
  <div className="container">
    <a className="navbar-brand" href="/">Logan Fullerton</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto">
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