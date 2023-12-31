import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Container from './components/layout/container/container';
import Navbar from './components/layout/navbar/navbar';
import HireMe from './pages/hireme';

import Home from './pages/home';
import Projects from './pages/projects';

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
            <Route index path="/projects" element={<Projects/>} />
            <Route index path="/hireme" element={<HireMe/>} />
          </Routes>
        </Container>
      </BrowserRouter>
    </ChakraProvider>
  )
}

export default App;
