import {useState} from "react"
import { RouterProvider } from "react-router-dom"
import { mainRoute } from "./routes/mainRoute"
import { MantineProvider, ColorSchemeProvider, ColorScheme } from '@mantine/core';

const App = () => {
  const [colorScheme, setColorScheme] = useState<ColorScheme>('light');
  const toggleColorScheme = (value?: ColorScheme) =>
    setColorScheme(value || (colorScheme === 'dark' ? 'light' : 'dark'));
  return (
    <div>
       <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
      <RouterProvider router={mainRoute} />
      </MantineProvider>
    </ColorSchemeProvider>  
    </div>
  )
}

export default App  