import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import AddProject from "./AddProject/AddProject";
import ProjectLink from "./ProjectLink/ProjectLink";
import { FaInbox, FaRegCalendar, FaRegCalendarAlt, FaTag, FaChevronDown, FaChevronRight } from "react-icons/fa"

const Sidebar = () => {
  const projects = useAppSelector(state => state.projects);
  const [formVisibility, setFormVisibility] = useState(false);
  const [disable, setDisable] = useState(false);

  const toggleVisibility = () => {
    setFormVisibility(!formVisibility);
  }
  
  return (
    <nav className="sidebar">
      <ul className="links">
        <Link to="/">
          <li className="nav-link">
            <span>
              <FaInbox />
            </span>
             <span>Inbox</span>
          </li>
        </Link>
        <Link to="/today">
          <li className="nav-link">
            <span>
              <FaRegCalendar />
            </span>
            <span>Today</span>
          </li>
        </Link>
        <Link to="/upcoming">
          <li className="nav-link">
            <span>
              <FaRegCalendarAlt />
            </span>
             <span>Upcoming</span>
          </li>
        </Link>
        <Link to="/important">
          <li className="nav-link">
            <span>
              <FaTag />
            </span>
             <span>Important</span>
          </li>
        </Link>
      </ul>
      <div className="nav-projects">
        <h3><span>
          {disable ? 
          <FaChevronRight onClick={() => {setDisable(!disable)}} /> 
          : <FaChevronDown onClick={() => {setDisable(!disable)}} />}
          </span>Projects</h3>
        {disable ? <></> 
        :<ul>
          {projects.map(project => (
            <Link key={project.id} to={`/${project.id}`}>
              <ProjectLink {...project} />
            </Link>
          ))}
        </ul>}
      </div>
      {formVisibility ? <AddProject toggleVisibility={toggleVisibility} />: <button onClick={toggleVisibility}>Add Project</button>}
    </nav>
  )
}

export default Sidebar;