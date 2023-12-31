import { Flex, FlexProps } from '@chakra-ui/react';

import styles from './container.module.css';

export default function Container({ children, ...props }: FlexProps) {
  return (
    <Flex className={styles.container} flexDir={'column'} {...props}>
      {children}
    </Flex>
  );
}
