import React, { createContext } from "react";
import Router from "./routes";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { SnackbarProvider } from "notistack";

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const [mode, setMode] = React.useState(prefersDarkMode ? "dark" : "light");
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
      },
    }),
    []
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: "#1DB954",
          },
        },
      }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider maxSnack={3}>
          <Router />
        </SnackbarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
