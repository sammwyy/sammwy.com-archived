import { Box, Flex } from "@chakra-ui/react";
import { BsDiscord, BsFolder, BsGithub, BsHammer, BsHouse, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";


import styles from "./navbar.module.css";
import PageButton from "./page-button";
import SocialButton from "./social-button";

export default function Navbar() {
    return (
        <Box className={styles["navbar"]}>
            <Box className={styles["content"]} backgroundColor={"purple.900"}>
                <Box>
                    <PageButton Icon={BsHouse} link={"/"}>Me</PageButton>
                    <PageButton Icon={BsFolder} link={"/projects"}>Projects</PageButton>
                    <PageButton Icon={BsHammer} link={"/hireme"}>Hire Me</PageButton>
                </Box>
                <Flex className={styles["social"]}>
                    <SocialButton Icon={BsDiscord} link="https://discord.gg/sKVYznRe4w" scheme="teal" />
                    <SocialButton Icon={BsGithub} link="https://github.com/sammwyy" scheme="gray" />
                    { /* <SocialButton Icon={BsLinkedin} link="https://twitter.com/sammwy" scheme="linkedin" /> */ }
                    <SocialButton Icon={BsTwitch} link="https://twitch.tv/sammwy" scheme="purple" />
                    <SocialButton Icon={BsTwitter} link="https://twitter.com/sammwy" scheme="twitter" />
                    <SocialButton Icon={BsYoutube} link="https://youtube.com/c/sammwy" scheme="red" />
                </Flex>
            </Box>
        </Box>
    )
}