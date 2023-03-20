import { Box } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import ProjectDeck from "../components/ui/project-deck";

export default function Projects() {
  const [categories, setCategories] = useState([]),
    [projects, setProjects] = useState([]),
    [category, setCategory] = useState("*");

  useEffect(() => {
    async function fetchData() {
      const req = await fetch("/projects.json");
      const json = await req.json();
      const { projects, categories } = json;

      for (const project of projects) {
        for (const category of categories) {
          if (project.categories.includes(category.id)) {
            if (!category.projects) {
              category.projects = 1;
            } else {
              category.projects++;
            }
          }
        }
      }

      setProjects(projects);
      setCategories(categories);
    }

    fetchData();
  }, []);

  return (
    <Box data-class="page">
      {projects && categories && (
        <ProjectDeck
          projects={projects}
          categories={categories}
          data={{
            category,
            setCategory
          }}
        />
      )}
    </Box>
  );
}
