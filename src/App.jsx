import { useState } from "react";
import SearchBar from "./components/SearchBar";
import ProjectForm from "./components/ProjectForm";
import ProjectList from "./components/ProjectList";

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Portfolio Website" },
    { id: 2, title: "E-commerce App" }
  ]);

  const [search, setSearch] = useState("");

  const filteredProjects = projects.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h1>Portfolio Platform</h1>

      <SearchBar search={search} setSearch={setSearch} />

      <ProjectForm projects={projects} setProjects={setProjects} />

      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;