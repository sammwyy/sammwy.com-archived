import { Tag, TagLabel } from '@chakra-ui/react';

import { Category } from '@/lib/category';

export interface CategoryButton {
  selected: string;
  onSelect: (id: string) => unknown;
  category: Category;
}

export default function CategoryButton({
  selected,
  onSelect,
  category,
}: CategoryButton) {
  const { name, projects } = category;
  const isSelected = selected == name;

  return (
    <Tag
      size={'md'}
      borderRadius="full"
      variant={'solid'}
      bg={isSelected ? 'var(--primary)' : 'gray.700'}
      color={isSelected ? '#222' : 'var(--secondary)'}
      cursor={'pointer'}
      margin={'5px 0'}
      marginRight={'10px'}
      userSelect={'none'}
      onClick={() => {
        onSelect(name);
      }}
    >
      <TagLabel>{name}</TagLabel>
      <TagLabel marginLeft={'3px'}>({projects})</TagLabel>
    </Tag>
  );
}
