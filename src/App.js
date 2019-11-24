import React from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

import blue from "@material-ui/core/colors/blue";
import green from "@material-ui/core/colors/green";

import LSE from "./components/LSE";

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
      <LSE />
    </ThemeProvider>
  );
}

export default App;
