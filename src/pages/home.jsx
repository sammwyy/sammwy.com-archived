import { Button, Heading, Link, Text } from "@chakra-ui/react";

export default function Home() {
    return (
        <>
            <Heading size={"xl"}>Hello World</Heading>
            <Text>Estoy probando esta cosa</Text>
            <br/>
            <Button colorScheme={"blackAlpha"}>Boton</Button>
            <Button colorScheme={"whiteAlpha"}>Boton 2</Button>
            <Link>Link</Link>
        </>
    )
}