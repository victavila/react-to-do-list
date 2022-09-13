import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/hooks";
import AddProject from "./AddProject/AddProject";
import { FaInbox, FaRegCalendar, FaRegCalendarAlt, FaTag, FaChevronDown, FaChevronRight, FaCircle } from "react-icons/fa";
import { VscAdd, VscTrash, VscEdit } from "react-icons/vsc";
import "./Sidebar.css"
import { ProjectContext } from "../../contexts/ProjectContext";

interface ProjectContextProps {
  selectedProject: string;
  setSelectedProject: React.Dispatch<React.SetStateAction<string>>
}

const Sidebar = () => {
  const projects = useAppSelector(state => state.projects);
  const [formVisibility, setFormVisibility] = useState(false);
  const [disable, setDisable] = useState(false);
  const {selectedProject, setSelectedProject} = useContext(ProjectContext) as ProjectContextProps;

  const toggleVisibility = () => {
    setFormVisibility(!formVisibility);
  }

  
  
  return (
    <nav className="sidebar">
      <div className="nav-content">
        <ul className="links">
          <Link to="/">
            <li 
            className={selectedProject === 'inbox' ? "nav-link selected" : "nav-link"}
            onClick={() => {setSelectedProject('inbox')}}
            >
              <span>
                <FaInbox className="inbox-icon" />
              </span>
              <span>Inbox</span>
            </li>
          </Link>
          <Link to="/today">
            <li 
            className={selectedProject === 'today' ? "nav-link selected" : "nav-link"}
            onClick={() => {setSelectedProject('today')}}
            >
              <span>
                <FaRegCalendar className="today-icon" />
              </span>
              <span>Today</span>
            </li>
          </Link>
          <Link to="/upcoming">
            <li 
            className={selectedProject === 'upcoming' ? "nav-link selected" : "nav-link"}
            onClick={() => {setSelectedProject('upcoming')}}
            >
              <span>
                <FaRegCalendarAlt className="upcoming-icon" />
              </span>
              <span>Upcoming</span>
            </li>
          </Link>
          <Link to="/important">
            <li 
            className={selectedProject === 'important' ? "nav-link selected" : "nav-link"}
            onClick={() => {setSelectedProject('important')}}
            >
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
                <li
                className={selectedProject === project.id ? "project-row selected" : "project-row"}
                onClick={() => {setSelectedProject(project.id)}}
                >
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