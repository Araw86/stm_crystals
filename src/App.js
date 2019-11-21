import React from 'react';
import { Typography, Toolbar, AppBar ,Box} from '@material-ui/core';
import {ThemeProvider, createMuiTheme} from  '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import CrystalParameters from './components/CrystalParameters';
import './App.css';

const theme = createMuiTheme({
  // typography: {
  //   button: {
  //     fontStyle: 'italic'
  //   }
  // }
  palette: {
    primary: blue,
    secondary: green,
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">
                STM Crystal calculation
            </Typography>
            </Toolbar>
          </AppBar>
        </header>
        <Box>
          <CrystalParameters />
        </Box>
      </div>
    </ThemeProvider>
  );
}

export default App;
