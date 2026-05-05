function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <div key={project.id}>
          <h3>{project.title}</h3>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;