import { Grid } from "@chakra-ui/react";
import styles from "./container.module.css";

export default function Container({ children }) {
    return (
        <Grid className={styles["container"]}>
            {children}
        </Grid>
    )
}