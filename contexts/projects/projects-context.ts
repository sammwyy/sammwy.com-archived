import React from 'react';

import { ProjectsHook } from './projects-hook';

export const ProjectsContext = React.createContext<ProjectsHook>({
  getProjects: () => {
    throw new Error('Not implemented');
  },
});
