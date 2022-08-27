interface LinkProps {
  name: string,
};

const ProjectLink = ({ name }: LinkProps) => {
  return(
    <li>{name}</li>
  )
}

export default ProjectLink;