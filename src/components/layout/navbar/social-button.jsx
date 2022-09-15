import { IconButton } from "@chakra-ui/react";

export default function SocialButton({link, scheme, Icon}) {
    return (
        <IconButton
            as="a"
            variant={"link"}
            colorScheme={scheme}
            icon={<Icon />}
            href={link}
            target="_blank"
            referrerPolicy="no-referrer"
        />
    )
}