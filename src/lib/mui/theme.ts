import { createTheme } from '@mui/material/styles';

export const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: { main: '#1976d2' },
    background: { default: '#ffffff', paper: '#fff' },
  },
  typography: { fontFamily: ['Inter', 'Roboto', 'ui-sans-serif'].join(',') },
});

export const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#90caf9' },
    background: { default: '#0f1720', paper: '#111827' },
  },
  typography: { fontFamily: ['Inter', 'Roboto', 'ui-sans-serif'].join(',') },
});
