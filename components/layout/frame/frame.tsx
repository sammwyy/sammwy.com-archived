import { Box, Flex, Text } from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

import styles from './frame.module.css';

export interface FrameProps extends PropsWithChildren {
  type?: 'box' | 'flex';
  size?: 'large' | 'small';
  title?: string;
}

export default function Frame({ type, size, title, children }: FrameProps) {
  const Class = type == 'flex' ? Flex : Box;

  return (
    <Flex className={styles.frame}>
      <Flex className={styles.titlebar}>
        <Text className={styles.title}>{title}</Text>
        <Flex className={styles.controls}>
          <Box className={styles.control}>_</Box>
          <Box className={styles.control}>X</Box>
        </Flex>
      </Flex>
      <Class className={styles[`${size || 'small'}-content`]}>{children}</Class>
    </Flex>
  );
}
