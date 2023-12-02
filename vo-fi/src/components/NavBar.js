import { Link } from "react-router-dom";

const NavBar=()=> {
    return(<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
    <ul class = "navbar-nav">
      <li>
            <Link to="/Open" class="nav-brand"><img src="./images/VF.png" alt="Website Logo" style={{height:'42px', weight:'42px'}}></img></Link>
      </li>
          <li class="nav-item">
            <Link to="/Home" class="nav-link">Home</Link>
          </li>
          <li class="nav-item">
            <Link to="/Register" class="nav-link">Register</Link>
          </li>
          <li class="nav-item">
            <Link to="/Login" class="nav-link">Login</Link>
          </li>
          <li class="nav-item">
            <Link to="/Contact" class="nav-link">Contact</Link>
          </li>
          <li class="nav-item">
            <Link to="/Complaint" class="nav-link">Complaint</Link>
          </li>
          <li class="nav-item">
            <Link to="/Opportunities" class="nav-link">Opportunities</Link>
          </li>
          <li class="nav-item">
          <Link to="/Experience" class="nav-link">Experience</Link>
          </li>
          <li class="nav-item">
          <Link to="/Profile" class="nav-link">Profile</Link>
          </li>
          <li class="nav-item">
            <Link to="/About" class="nav-link">About</Link>
          </li>

        </ul>
    </div>
 </nav>)
};

export default NavBar;