import React, { Component } from 'react';
import { TextField , Box} from '@material-ui/core';

export class CrystalParameters extends Component {
  render() {
    return (
      <Box m={1}>
        <TextField
          id="firstName"
          label="First Name"
          margin="normal"
        />
        <br />
        <TextField
          // hintText="Enter Your Last Name"
          id="flastName"
          label="Last Name"
          margin="normal"
        />
        <br />
        <TextField
          // hintText="Enter Your Email"

          id="email"
          label="Email"
          margin="normal"
        />
      </Box>
    )
  }
}

export default CrystalParameters;
