import { Box, Flex, Grid, Heading, Text, useMediaQuery } from "@chakra-ui/react";
import Sidebar from "../components/layout/sidebar/sidebar";
import PresentationCard from "../components/ui/presentation-card";

export default function Home() {
    const [isWrap,] = useMediaQuery("(max-width: 650px)")

    return (
        <Grid gap="16px">
            <Flex gap="40px" flexDirection="column" data-class="page">
                <PresentationCard flexWrap={isWrap ? "wrap" : "no-wrap"} />

                <Box>
                    <Heading size={"xl"}>Who am i?</Heading>

                    <Text>
                        I am a programmer who likes to develop
                        📖 libraries, 💻 APIs, 💜 utilities for streamers, 🎮 games, 💸 crypto and many more
                        varied things that come from my imagination.
                    </Text>

                    <br />

                    <Text>
                        I am very passionate about programming and 🔒 cybersecurity, I am fullstack but I
                        prefer backend.
                    </Text>

                    <br />

                    <Text>
                        I really like ☕ Java and 💛 JavaScript. I also like the 🥤 frappucinos, fruit
                        smoothies, 🍩 donuts and 🍨 mascarpone ice cream with berries.
                    </Text>
                </Box>
            </Flex>

            <Sidebar gridColumn={isWrap ? "1" : "3"} />
        </Grid>
    )
}