import { Avatar, Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";

function TechIcon({ id }) {
    return (
        <Box height={"32px"} marginRight={"5px"}>
            <img height={"100%"} src={"/icons/technologies/" + id + ".webp"} alt={id + " icon"}/>
        </Box>
    )
}

export default function PresentationCard() {
    return (
        <Flex>
        <Box>
            <Box>
                <Avatar size="2xl" src="https://avatars.githubusercontent.com/u/44925968?v=4" />
            </Box>
            <Box textAlign={"center"}>
                <Badge colorScheme={"pink"}>Available to Hire</Badge>
            </Box>
        </Box>
        <Box marginLeft={"20px"}>
            <Heading size={"xl"}>Sammwy</Heading>
            <Text>⚛️ React frontend dev, backend on NestJS.</Text>
            <Text>☕ Java and Minecraft dev with 4 years of experience.</Text>
            <Text>💖 Coding twitch stuff for streamers.</Text>

            <Flex marginTop={"5px"}>
                <TechIcon id={"csharp"} />
                <TechIcon id={"electron"} />
                <TechIcon id={"graphql"} />
                <TechIcon id={"html"} />
                <TechIcon id={"java"} />
                <TechIcon id={"javascript"} />
                <TechIcon id={"mongodb"} />
                <TechIcon id={"mysql"} />
                <TechIcon id={"nestjs"} />
                <TechIcon id={"nginx"} />
                <TechIcon id={"nodejs"} />
                <TechIcon id={"python"} />
                <TechIcon id={"react"} />
                <TechIcon id={"redis"} />
                <TechIcon id={"relay"} />
                <TechIcon id={"typescript"} />
                <TechIcon id={"unity"} />
            </Flex>
        </Box>
    </Flex>
    )
}