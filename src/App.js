import React from 'react';
import Routes from './routes'
import {ThemeProvider, createMuiTheme, makeStyles} from '@material-ui/core'
import { orange } from '@material-ui/core/colors';

const useStyles = makeStyles({
  root: {
    background: 'red',
    height: '100vh'
  }
})

function App() {
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: '#f44336',
      },
      secondary: {
        main: '#3f51b5'
      }
    }
  })

  const classes = useStyles()

  return (
    <ThemeProvider theme={theme} >
      <Routes />
    </ThemeProvider>
  );
}

export default App;
