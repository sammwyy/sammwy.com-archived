import { Avatar, Badge, Box, Flex, Heading, Text } from '@chakra-ui/react';
import Image from 'next/image';

function TechIcon({ id }: { id: string }) {
  return (
    <Flex alignItems={'center'} justifyContent={'center'} marginRight={'5px'}>
      <Image
        height={32}
        width={32}
        src={'/icons/technologies/' + id + '.webp'}
        alt={id + ' icon'}
      />
    </Flex>
  );
}

export default function PresentationCard() {
  return (
    <Flex>
      <Box>
        <Box>
          <Avatar
            size="2xl"
            src="https://avatars.githubusercontent.com/u/44925968?v=4"
          />
        </Box>
        <Box textAlign={'center'}>
          <Badge colorScheme={'pink'}>Available to Hire</Badge>
        </Box>
      </Box>
      <Box marginLeft={'20px'}>
        <Heading size={'xl'}>Sammwy</Heading>
        <Text>⚛️ React frontend dev, backend on NestJS.</Text>
        <Text>☕ Java and Minecraft dev with 4 years of experience.</Text>
        <Text>💖 Coding twitch stuff for streamers.</Text>

        <Flex marginTop={'5px'} alignItems={'center'}>
          <TechIcon id={'apollo'} />
          <TechIcon id={'cloudflare'} />
          <TechIcon id={'csharp'} />
          <TechIcon id={'electron'} />
          <TechIcon id={'git'} />
          <TechIcon id={'graphql'} />
          <TechIcon id={'html'} />
          <TechIcon id={'java'} />
          <TechIcon id={'javascript'} />
          <TechIcon id={'mongodb'} />
          <TechIcon id={'mysql'} />
          <TechIcon id={'nestjs'} />
          <TechIcon id={'nextjs'} />
          <TechIcon id={'nginx'} />
          <TechIcon id={'nodejs'} />
          <TechIcon id={'python'} />
          <TechIcon id={'raspberrypi'} />
          <TechIcon id={'react'} />
          <TechIcon id={'redis'} />
          <TechIcon id={'relay'} />
          <TechIcon id={'rust'} />
          <TechIcon id={'tauri_'} />
          <TechIcon id={'typescript'} />
          <TechIcon id={'unity'} />
        </Flex>
      </Box>
    </Flex>
  );
}
