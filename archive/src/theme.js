import { extendTheme } from "@chakra-ui/react"

const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false,
}

const styles = {
    global: {
        body: {
            bg: 'url("/background.gif") fixed',
            bgRepeat: "no-repeat",
            bgSize: "cover",
            imageRendering: "pixelated",
            color: '#ddd',
        },
    },
}

const colors = {
    purple: {
        100: '#B983FF',
        200: '#A872EE',
        300: '#9761DD',
        400: '#8650CC',
        800: '#080613',
        900: '#191724'
    },
}

export default extendTheme({config, styles, colors});