import { Button, Flex, Text } from '@chakra-ui/react';

import Frame from '../frame';
import styles from './sidebar.module.css';

interface AboutMeSectionProps {
  label: string;
  value: string;
}

function AboutMeSection({ label, value }: AboutMeSectionProps) {
  return (
    <Flex justifyContent={'space-between'} margin={'10px 0'}>
      <Text fontWeight={'bold'}>{label}</Text>
      <Text>{value}</Text>
    </Flex>
  );
}

export default function Sidebar() {
  return (
    <Flex className={styles['sidebar']}>
      <Frame title="🌱 About me">
        <AboutMeSection label={'Age'} value={'22'} />
        <AboutMeSection label={'Birthday'} value={'Nov, 23'} />
        <AboutMeSection label={'Country'} value={'Argentina'} />
        <AboutMeSection label={'State'} value={'Buenos Aires'} />
      </Frame>

      <Frame title="🎁 Be my sponsor">
        <Text margin={'10px 0'}>
          If you like the work I do, you can make a donation to motivate me to
          continue contributing to the open source industry.
        </Text>

        <Button
          as={'a'}
          margin={'10px 0'}
          colorScheme={'red'}
          href={'https://patreon.com/sammwy'}
          target={'_blank'}
          referrerPolicy={'no-referrer'}
        >
          Patreon
        </Button>
      </Frame>
    </Flex>
  );
}
