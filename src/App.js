import React from 'react';
import { Provider } from 'react-redux';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import store from './store';

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
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <SelectionPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
