import { Box } from "@chakra-ui/react";

import styles from "./sidebar.module.css";

export default function Sidebar({ links }) {
    return (
        <Box className={styles["sidebar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                sidebar
            </Box>
        </Box>
    )
}