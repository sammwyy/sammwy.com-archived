import React from 'react';

import { ProjectsContext } from '../contexts/projects';

const useProjects = () => React.useContext(ProjectsContext);

export default useProjects;
