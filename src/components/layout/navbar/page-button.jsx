import { Button } from "@chakra-ui/react";
import { Link, useLocation } from "react-router-dom";


export default function PageButton({ link, children, Icon, className }) {
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
                <span>{children}</span>
            </Button>
        </Link>
    )
}