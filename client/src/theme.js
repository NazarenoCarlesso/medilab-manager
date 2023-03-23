import { experimental_extendTheme as extendTheme } from '@mui/material/styles';

export default extendTheme({
  colorSchemes: {
    light: {
      palette: {
        primary: {
          light: '#d6fcfd',
          main: '#5080FD',
          dark: '#071b4b',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ccd9fb',
          main: '#5CE1E6',
          dark: '#16a8ad',
          contrastText: '#000',
        },
        search: {
          main: 'linear-gradient(to left, var(--mui-palette-secondary-dark), var(--mui-palette-primary-light))'
        },
        gradient: 'linear-gradient(to left, var(--mui-palette-secondary-main), var(--mui-palette-primary-dark))'
      },
    }
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: ({ theme: {palette} }) => ({
          background: palette.gradient
        })
      }
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme: {palette} }) => ({
          background: palette.search
        })
      }
    }
  }
});