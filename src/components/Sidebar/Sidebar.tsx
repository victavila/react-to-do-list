import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import AddProject from "./AddProject/AddProject";
import ProjectLink from "./ProjectLink/ProjectLink";

const Sidebar = () => {
  const projects = useAppSelector(state => state.projects);
  const [formVisibility, setFormVisibility] = useState(false);

  const toggleVisibility = () => {
    setFormVisibility(!formVisibility);
  }
  
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
        <ul>
          {projects.map(project => (
            <ProjectLink key={project.id} {...project} />
          ))}
        </ul>
      </div>
      {formVisibility ? <AddProject toggleVisibility={toggleVisibility} />: <button onClick={toggleVisibility}>Add Project</button>}
    </nav>
  )
}

export default Sidebar;