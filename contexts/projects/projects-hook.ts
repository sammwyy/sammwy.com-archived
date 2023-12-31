import Project from '@/lib/project';

export interface ProjectsHook {
  getProjects: () => Project[] | null;
}
