import { Box, Flex } from "@chakra-ui/react";

import { BsDiscord, BsFolder, BsGithub, BsHammer, BsHouse, BsTwitch, BsTwitter, BsYoutube } from "react-icons/bs";

import SocialButton from "./social-button";

import styles from "./navbar.module.css";
import PageButton from "./page-button";

export default function Navbar() {
    return (
        <Box className={styles["navbar"]} backgroundColor={"purple.900"} boxShadow="2xl">
            <Flex className={styles.pages}>
                <PageButton Icon={BsHouse} link={"/"}>Me</PageButton>
                <PageButton Icon={BsFolder} link={"/projects"}>Projects</PageButton>
                <PageButton Icon={BsHammer} link={"/hireme"}>Hire Me</PageButton>
            </Flex>

            <Flex className={styles["social"]}>
                <SocialButton Icon={BsDiscord} link="https://discord.gg/sKVYznRe4w" scheme="#5865f2" aria-label="link to Discord server" />
                <SocialButton Icon={BsGithub} link="https://github.com/sammwyy" scheme="#e8eaea" aria-label="link to GitHub" />
                { /* <SocialButton Icon={BsLinkedin} link="https://twitter.com/sammwy" scheme="linkedin" /> */}
                <SocialButton Icon={BsTwitch} link="https://twitch.tv/sammwy" scheme="#9146FF" aria-label="link to Twitch channel" />
                <SocialButton Icon={BsTwitter} link="https://twitter.com/sammwy" scheme="#00acee" aria-label="link to Twitter account" />
                <SocialButton Icon={BsYoutube} link="https://youtube.com/c/sammwy" scheme="#c4302b" aria-label="link to Youtube channel" />
            </Flex>
        </Box>
    )
}