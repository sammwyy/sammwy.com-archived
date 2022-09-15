import { Box, Button, Heading, Text } from "@chakra-ui/react";

import styles from "./sidebar.module.css";

export default function Sidebar() {
    return (
        <Box className={styles["sidebar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                <Heading margin={"10px 0"} size={"md"}>🎁 Be my sponsor</Heading>
                <Text margin={"10px 0"}>
                    If you like the work I do, you can make a donation to motivate me to continue contributing to the open source industry.
                </Text>
                
                <Button 
                    as={"a"} 
                    margin={"10px 0"} 
                    colorScheme={"red"}
                    href={"https://patreon.com/sammwy"}
                    target={"_blank"}
                    referrerPolicy={"no-referrer"}
                >Patreon</Button>
            </Box>
        </Box>
    )
}