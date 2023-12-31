import { PropsWithChildren, useState } from 'react';

import Project from '@/lib/project';

import { ProjectsContext } from './projects-context';

const ENDPOINT = '/projects.json';

export function ProjectsProvider({ children }: PropsWithChildren) {
  const [fetching, setFetching] = useState(false);
  const [projects, setProjects] = useState<Project[] | null>(null);

  const fetchProjects = () => {
    const isDEV = process.env.NODE_ENV == 'development';
    fetch(ENDPOINT)
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
