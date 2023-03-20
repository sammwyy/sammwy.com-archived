import { Tag, TagLabel } from "@chakra-ui/react";

export default function CategoryButton({ data }) {
  const { label, id, projects, category, setCategory } = data;

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
