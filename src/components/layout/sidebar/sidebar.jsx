import { Box, Button, Flex, Heading, Text } from "@chakra-ui/react";

import styles from "./sidebar.module.css";

function AboutMeSection({ label, value }) {
    return (
        <Text><b>{label}</b> {value}</Text>
    )
}

function CurrentAge() {
    const
        currentDate = new Date(),
        myDate = new Date("2002/11/23"), // 👈 Pon tu fecha de nacimiento acá (el año lo puse tomando cómo referencia mi fecha de nacimiento 😅)
        years = new Date(+currentDate - +myDate).getFullYear() - 1970;

    return years
}

export default function Sidebar({ gridColumn }) {
    return (
        <Flex className={styles["sidebar"]} gridColumn={gridColumn}>
            <Flex className={styles["content"]} backgroundColor={"purple.900"}>
                <Heading size={"md"} className={styles.heading}>🌱 About me</Heading>

                <Box>
                    <AboutMeSection label={"Age"} value={CurrentAge()} />
                    <AboutMeSection label={"Birthday"} value={"Nov, 23"} />
                    <AboutMeSection label={"Country"} value={"Argentina"} />
                    <AboutMeSection label={"State"} value={"Buenos Aires"} />
                </Box>
            </Flex>

            <Flex className={styles["content"]} backgroundColor={"purple.900"}>
                <Heading size={"md"} className={styles.heading}>🎁 Be my sponsor</Heading>

                <Text>
                    If you like the work I do, you can make a donation to motivate me to continue contributing to the open source industry.
                </Text>

                <Button
                    as={"a"}
                    colorScheme={"red"}
                    href={"https://patreon.com/sammwy"}
                    target={"_blank"}
                    referrerPolicy={"no-referrer"}
                >Patreon</Button>
            </Flex>
        </Flex>
    )
}