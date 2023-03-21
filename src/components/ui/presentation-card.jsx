import { Avatar, Badge, Flex, Heading, Text } from "@chakra-ui/react";

function TechIcon({ id }) {
    return <img src={"/icons/technologies/" + id + ".webp"} alt={id + " icon"} />
}

const techs = [
    "csharp",
    "electron",
    "graphql",
    "html",
    "java",
    "javascript",
    "mongodb",
    "mysql",
    "nestjs",
    "nginx",
    "nodejs",
    "python",
    "react",
    "redis",
    "relay",
    "typescript",
    "unity"
]

export default function PresentationCard({ flexWrap }) {
    return (
        <Flex gap="20px" flexWrap={flexWrap}>
            <Flex flexDirection="column" gap="24px" justifyContent="center" alignItems="center" flexGrow="1">
                <Flex gap="4px" flexDirection="column">
                    <Avatar size="2xl" alt="Avatar image" src="https://avatars.githubusercontent.com/u/44925968?v=4" />
                    <Heading size="md" textAlign="center">Sammwy</Heading>
                </Flex>

                <Badge colorScheme="pink" w="fit-content">Available to Hire</Badge>
            </Flex>

            <Flex flexDirection="column" gap="10px">
                <Text>
                    ⚛️ React frontend dev, backend on NestJS. ☕ Java and Minecraft dev with 4 years of experience. 💖 Coding twitch stuff for streamers.
                </Text>

                <Flex gap="8px" flexWrap="wrap" backgroundColor="whiteAlpha.50" padding="8px" borderRadius="8px">
                    {
                        techs.map((tech) => {
                            return <TechIcon id={tech} key={tech} />
                        })
                    }
                </Flex>
            </Flex>
        </Flex>
    )
}