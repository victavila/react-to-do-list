import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <nav className="sidebar">
      <ul className="links">
        <Link to="/">
          <li className="nav-link">Inbox</li>
        </Link>
        <Link to="/today">
          <li className="nav-link">Today</li>
        </Link>
        <Link to="/upcoming">
          <li className="nav-link">Upcoming</li>
        </Link>
        <Link to="/important">
          <li className="nav-link">Important</li>
        </Link>
      </ul>
      <div className="nav-projects">
        <h3>Projects</h3>
        <div>
        </div>
      </div>
      <button>Add Project</button>
    </nav>
  )
}

export default Sidebar;