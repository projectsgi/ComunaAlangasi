import React from "react";
import App from "./App";
import ReactDOM from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { lighTheme } from "./themes";


const rootElement = document.getElementById('root');

// Utilizando la nueva API createRoot
const root = ReactDOM.createRoot(rootElement);
root.render(
    <ThemeProvider theme={lighTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);