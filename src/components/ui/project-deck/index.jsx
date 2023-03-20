import {
  Box,
  Input,
  SimpleGrid,
} from "@chakra-ui/react";
import { useState } from 'react';
import CategoryButton from "../category-button";
import ProjectCard from "../project-card";

export default function ProjectDeck({ projects, categories, data }) {
  const [searchTerm, setSearchTerm] = useState(""), { category } = data

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
        <Box marginTop={"10px"}>
          <CategoryButton
            data={{
              label: "All",
              projects: projects.length,
              id: "*",
              ...data
            }}
          />

          {categories.map((item, index) => {
            return (
              <CategoryButton
                data={{ ...item, ...data }}
                key={index} />
            )
          })}
        </Box>
      </Box>

      <Box marginTop={"30px"}>
        <SimpleGrid minChildWidth={"180px"} spacing={10}>
          {projects
            .filter((item) => {
              const term = searchTerm.toLowerCase();
              const name = item.name.toLowerCase();
              const desc = item.description.toLowerCase();

              return name.includes(term) || desc.includes(term);
            })
            .filter((item) => {
              return category === "*"
                ? true
                : item.categories.includes(category);
            })
            .map((item, index) => (
              <ProjectCard
                key={index}
                name={item.name}
                description={item.description}
                categories={item.categories}
                thumb={item.thumbnail}
                link={item.link}
              />
            ))}
        </SimpleGrid>
      </Box>
    </Box>
  );
}
