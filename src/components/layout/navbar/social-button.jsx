import { IconButton } from "@chakra-ui/react";

export default function SocialButton(props) {
    const { link, scheme, Icon, } = props

    return (
        <IconButton
            as="a"
            variant={"link"}
            icon={<Icon fill={scheme} />}
            href={link}
            target="_blank"
            referrerPolicy="no-referrer"
            aria-label={props["aria-label"]}
        />
    )
}