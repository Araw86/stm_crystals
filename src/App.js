import React from 'react';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

import SelectionPage from './components/SelectionPage';

const theme = createMuiTheme({
  // typography: {
  //   button: {
  //     fontStyle: 'italic'
  //   }
  // }
  palette: {
    primary: blue,
    secondary: green
  }
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <SelectionPage />
    </ThemeProvider>
  );
}

export default App;
