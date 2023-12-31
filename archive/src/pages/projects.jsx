import {
  Box,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

var setCategory;
var category;

function CategoryButton({ data }) {
  const { label, id, projects } = data;
  return (
    <Tag
      size={"md"}
      borderRadius="full"
      variant="solid"
      bg={id === category ? "#FFC0CB" : "gray.700"}
      color={id === category ? "#222" : "white"}
      cursor={"pointer"}
      margin={"5px 0"}
      marginRight={"10px"}
      onClick={() => {
        setCategory(id);
      }}
    >
      <TagLabel>{label}</TagLabel>
      <TagLabel marginLeft={"3px"}>({projects})</TagLabel>
    </Tag>
  );
}

function ProjectCard({ link, name, description, categories, thumb }) {
  return (
    <Box
      as="a"
      href={link}
      target="_blank"
      referrerPolicy="no-referrer"
      cursor="pointer"
      transition=".1s all ease-in-out"
      _hover={{
        transform: "scale(1.1)",
      }}
    >
      <Image src={thumb} borderRadius={"10px 10px 0 0"} />
      <Box
        backgroundColor={"purple.800"}
        padding={"10px"}
        borderRadius={"0 0 10px 10px"}
      >
        <Heading size={"sm"}>{name}</Heading>
        <Text color={"gray.300"} fontSize={"15px"}>
          {description}
        </Text>

        {categories.map((item, index) => (
          <Tag
            key={index}
            marginTop={"10px"}
            marginRight={"5px"}
            size={"md"}
            borderRadius="full"
            variant="solid"
            bg={"#FFC0CB"}
            color={"#222"}
          >
            <TagLabel>{item}</TagLabel>
          </Tag>
        ))}
      </Box>
    </Box>
  );
}

function ProjectDeck({ projects, categories }) {
  const [searchTerm, setSearchTerm] = useState("");

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
            data={{ label: "All", projects: projects.length, id: "*" }}
          />
          {categories.map((item, index) => (
            <CategoryButton data={item} key={index} />
          ))}
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

export default function Projects() {
  const [categories, setCategories] = useState([]);
  const [projects, setProjects] = useState([]);
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
    <>
      {projects && categories && (
        <ProjectDeck projects={projects} categories={categories} />
      )}
    </>
  );
}
