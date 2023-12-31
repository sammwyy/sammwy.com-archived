import { Box, Flex } from "@chakra-ui/react";

import Sidebar from "../sidebar/sidebar";

import styles from "./container.module.css";

export default function Container ({ children }) {
    return (
        <Box className={styles["wrapper"]}>
            <Flex className={styles["container"]}>  
                <Box className={styles["page"]} backgroundColor={"purple.900"}>{children}</Box>
                <Sidebar className={styles["page"]} />
            </Flex>
        </Box>
    )
}