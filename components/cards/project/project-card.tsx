import { Box, Heading, Image, Tag, TagLabel, Text } from '@chakra-ui/react';

import Project from '@/lib/project';

export interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const { link, name, description, categories, thumbnail } = project;

  return (
    <Box
      as="a"
      href={link}
      target="_blank"
      referrerPolicy="no-referrer"
      cursor="pointer"
      transition=".1s all ease-in-out"
      _hover={{
        transform: 'scale(1.1)',
      }}
    >
      <Image alt="Thumbnail" src={thumbnail} borderRadius={'10px 10px 0 0'} />

      <Box
        backgroundColor={'purple.800'}
        padding={'10px'}
        borderRadius={'0 0 10px 10px'}
      >
        <Heading size={'sm'}>{name}</Heading>
        <Text color={'gray.300'} fontSize={'15px'}>
          {description}
        </Text>

        {categories.map((item, index) => (
          <Tag
            key={index}
            marginTop={'10px'}
            marginRight={'5px'}
            size={'md'}
            borderRadius="full"
            variant="solid"
            bg={'var(--secondary)'}
            color={'#222'}
          >
            <TagLabel>{item}</TagLabel>
          </Tag>
        ))}
      </Box>
    </Box>
  );
}
