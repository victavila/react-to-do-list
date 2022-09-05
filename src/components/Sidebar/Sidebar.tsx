import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import AddProject from "./AddProject/AddProject";
import { FaInbox, FaRegCalendar, FaRegCalendarAlt, FaTag, FaChevronDown, FaChevronRight, FaCircle } from "react-icons/fa";
import { VscAdd, VscTrash, VscEdit } from "react-icons/vsc";
import "./Sidebar.css"

const Sidebar = () => {
  const projects = useAppSelector(state => state.projects);
  const [formVisibility, setFormVisibility] = useState(false);
  const [disable, setDisable] = useState(false);

  const toggleVisibility = () => {
    setFormVisibility(!formVisibility);
  }
  
  return (
    <nav className="sidebar">
      <div className="nav-content">
        <ul className="links">
          <Link to="/">
            <li className="nav-link">
              <span>
                <FaInbox className="inbox-icon" />
              </span>
              <span>Inbox</span>
            </li>
          </Link>
          <Link to="/today">
            <li className="nav-link">
              <span>
                <FaRegCalendar className="today-icon" />
              </span>
              <span>Today</span>
            </li>
          </Link>
          <Link to="/upcoming">
            <li className="nav-link">
              <span>
                <FaRegCalendarAlt className="upcoming-icon" />
              </span>
              <span>Upcoming</span>
            </li>
          </Link>
          <Link to="/important">
            <li className="nav-link">
              <span className="important-icon">
                <FaTag />
              </span>
              <span>Important</span>
            </li>
          </Link>
        </ul>
        <div className="nav-projects">
          <h3 className="nav-project-header" onClick={() => {setDisable(!disable)}}><span>
            {disable ? 
            <FaChevronRight className="chevron-icon" /> 
            : <FaChevronDown className="chevron-icon" />}
            </span><span>Projects</span></h3>
          {disable ? <></> 
          :<ul>
            {projects.map(project => (
              <Link key={project.id} to={`/${project.id}`}>
                <li className="project-row">
                  <div className="project-info">
                    <span>
                      <FaCircle className="project-icon" />
                    </span>
                    <span>{project.name}</span>
                  </div>
                  <div className="project-icons">
                    <VscTrash className="project-delete" />
                    <VscEdit className="project-edit" />
                  </div>
                </li>
              </Link>
            ))}
          </ul>}
        </div>
      </div>
        
      <div className="nav-footer">
        {formVisibility ? <AddProject toggleVisibility={toggleVisibility} />: <></>}
        <button className="add-project" onClick={toggleVisibility}><span className="plus"><VscAdd /></span> Add Project</button>
      </div>
    </nav>
  )
}

export default Sidebar;