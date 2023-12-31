import { Box, Input, SimpleGrid } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

import CategoryButton from '@/components/buttons/category-button';
import ProjectCard from '@/components/cards/project';
import useProjects from '@/hooks/useProjects';
import { Category } from '@/lib/category';
import Project from '@/lib/project';

interface ProjectDeckProps {
  projects: Project[];
  categories: Category[];
}

function ProjectDeck({ projects, categories }: ProjectDeckProps) {
  const [selected, setSelected] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box>
      <Box>
        <Box>
          <Input
            placeholder="Search anything"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
            }}
          />
        </Box>
        <Box marginTop={'10px'}>
          <CategoryButton
            category={{ name: 'All', projects: projects.length }}
            selected={selected}
            onSelect={setSelected}
          />
          {categories.map((item, index) => (
            <CategoryButton
              category={item}
              key={index}
              selected={selected}
              onSelect={setSelected}
            />
          ))}
        </Box>
      </Box>

      <Box marginTop={'30px'}>
        <SimpleGrid minChildWidth={'180px'} spacing={10}>
          {projects
            .filter((item) => {
              const term = searchTerm.toLowerCase();
              const name = item.name.toLowerCase();
              const desc = item.description.toLowerCase();

              return name.includes(term) || desc.includes(term);
            })
            .filter((item) => {
              return selected === 'All'
                ? true
                : item.categories.includes(selected);
            })
            .map((item, index) => (
              <ProjectCard key={index} project={item} />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}

export default function Projects() {
  const { getProjects } = useProjects();
  const [categories, setCategories] = useState<Category[]>([]);
  const projects = getProjects();

  useEffect(() => {
    if (projects) {
      const categories: { [index: string]: number } = {};

      for (const project of projects) {
        for (const categoryName of project.categories) {
          const old = categories[categoryName] || 0;
          categories[categoryName] = old + 1;
        }
      }

      setCategories(
        Object.keys(categories).map((key) => ({
          name: key,
          projects: categories[key],
        })),
      );
    }
  }, [projects]);

  return (
    <>
      {projects && <ProjectDeck projects={projects} categories={categories} />}
    </>
  );
}
