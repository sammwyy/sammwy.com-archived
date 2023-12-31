import { PropsWithChildren, useState } from 'react';

import Project from '@/lib/project';

import { ProjectsContext } from './projects-context';

const DEV_ENDPOINT = '/api/dev_projects';
const PROD_ENDPOINT =
  'https://github.com/staroverlay/frontend/raw/main/data/projects.json';

export function ProjectsProvider({ children }: PropsWithChildren) {
  const [fetching, setFetching] = useState(false);
  const [projects, setProjects] = useState<Project[] | null>(null);

  const fetchProjects = () => {
    const isDEV = process.env.NODE_ENV == 'development';
    const endpoint = isDEV ? DEV_ENDPOINT : PROD_ENDPOINT;
    fetch(endpoint)
      .then((req) => req.json())
      .then((data) => setProjects(data.projects));
  };

  const getProjects = () => {
    if (!projects && !fetching) {
      setFetching(true);
      fetchProjects();
    }

    return projects;
  };

  return (
    <ProjectsContext.Provider
      value={{
        getProjects,
      }}
    >
      {children}
    </ProjectsContext.Provider>
  );
}
