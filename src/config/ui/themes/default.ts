import { ThemeOptions } from '@material-ui/core/styles/createTheme';
import { createTheme } from '@material-ui/core';

export const theme: ThemeOptions = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#3ed1ff',
    },
    secondary: {
      main: '#feaac1',
    },
  },
});
