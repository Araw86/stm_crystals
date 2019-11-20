import React, { Component } from 'react';
import {TextField} from '@material-ui/core';
import ThemeProvider from '@material-ui/styles/ThemeProvider';

export class CrystalParameters extends Component {
  render() {
    return (
      <ThemeProvider>
        <React.Fragment>
          <TextField
            hintText="Enter Your First Name"
            floatingLabelText="First Name"
            defaultValue="First Name"
          />
          <br />
          <TextField
            hintText="Enter Your Last Name"
            floatingLabelText="Last Name"
          />
          <br />
          <TextField
            hintText="Enter Your Email"
            floatingLabelText="Email"
          />
        </React.Fragment>
      </ThemeProvider>
    )
  }
}

export default CrystalParameters;
