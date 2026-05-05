import { useState } from "react";

function ProjectForm({ projects, setProjects }) {
  const [newProject, setNewProject] = useState("");

  const handleAdd = () => {
    if (!newProject.trim()) return;

    setProjects([
      ...projects,
      { id: Date.now(), title: newProject }
    ]);

    setNewProject("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add project..."
        value={newProject}
        onChange={(e) => setNewProject(e.target.value)}
      />
      <button onClick={handleAdd}>Add Project</button>
    </div>
  );
}

export default ProjectForm;