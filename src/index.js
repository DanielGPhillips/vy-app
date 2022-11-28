import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider, responsiveFontSizes } from '@mui/material';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import reportWebVitals from './reportWebVitals';

let theme = createTheme ({
  palette: {
    type: 'dark',
    primary: {
      main: '#5994ce',
    },
    secondary: {
      main: '#5c58b6',
    },
    error: {
      main: '#ff0053',
    },
    text: {
      primary: '#e1f5fe',
    },
    background: {
      default: '#131629',
      paper: '#151c35',
    },
    divider: '#b957ce',
    info: {
      main: '#9575cd',
    },
  },
  typography: {
    fontFamily: 'koulen, cursive'
  },
});

theme = responsiveFontSizes(theme)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </StyledEngineProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
