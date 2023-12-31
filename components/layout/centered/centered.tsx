import { Flex, FlexProps } from '@chakra-ui/react';

export default function Centered({ children, ...props }: FlexProps) {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} {...props}>
      {children}
    </Flex>
  );
}
