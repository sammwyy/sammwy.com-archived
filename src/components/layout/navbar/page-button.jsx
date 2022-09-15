import { Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";

import styles from "./navbar.module.css";

export default function PageButton({link, children, Icon}) {
    const { pathname } = useLocation();
    return (
        <Link to={link}>
            <Button
                as="span"
                variant={"ghost"}
                colorScheme={"whiteAlpha"}
                color={pathname === link ? "pink" : "#ddd"}
            >
                <Icon />
                <span className={styles["label"]}>{ children }</span>
            </Button>
        </Link>
    )
}