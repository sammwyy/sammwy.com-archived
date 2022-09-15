import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from './components/layout/container/container';
import Navbar from './components/layout/navbar/navbar';

import Home from './pages/home';

import theme from './theme';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <BrowserRouter>
        <Navbar />

        <Container>
          <Routes>
            <Route index path="/" element={<Home/>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
