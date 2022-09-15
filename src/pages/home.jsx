import { Box, Heading, Text } from "@chakra-ui/react";
import PresentationCard from "../components/ui/presentation-card";

export default function Home() {
    return (
        <Box>
            <PresentationCard />

            <Box marginTop={"20px"}>
                <Heading size={"xl"}>Who am i?</Heading>
                <Text>
                    My name is Valentina, AKA Sammwy. I am a 20yo programmer from Argentina who likes to develop
                    📖 libraries, 💻 APIs, 💜 utilities for streamers, 🎮 games,  crypto and many more
                    varied things that come from my imagination.
                </Text>

                <Text marginTop={"20px"}>
                    I am very passionate about programming and 🔒 cybersecurity, I am fullstack but I
                    prefer backend.
                </Text>

                <Text marginTop={"20px"}>
                    I really like ☕ Java and 💛 JavaScript. I also like the 🥤 frappucinos, fruit
                    smoothies, 🍩 donuts and 🍨 mascarpone ice cream with berries.
                </Text>
            </Box>
        </Box>
    )
}