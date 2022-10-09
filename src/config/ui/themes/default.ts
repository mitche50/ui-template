import { createTheme } from '@material-ui/core';
import { ThemeOptions } from '@material-ui/core/styles/createTheme';

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
