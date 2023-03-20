import {
  Box,
  Heading,
  Image,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";

export default function ProjectCard({ link, name, description, categories, thumb }) {
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
      <Image src={thumb} borderRadius={"16px 16px 0 0"} />

      <Box
        backgroundColor={"purple.800"}
        padding={"10px"}
        borderRadius={"0 0 16px 16px"}
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
