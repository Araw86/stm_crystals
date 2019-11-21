import React, { Component } from 'react';
import { TextField, Box, FormControl, InputAdornment, Input, FormHelperText, InputLabel} from '@material-ui/core';

export class CrystalParameters extends Component {
  render() {
    return (
      <Box m={1}>
        <TextField
          id="c0Value"
          label="C0"
          margin="normal"
        />
        <TextField
          // hintText="Enter Your Last Name"
          id="clValue"
          label="Cl"
          margin="normal"
        />

        <FormControl>
        <InputLabel htmlFor="standard-weight-helper-text">C0 capacitance</InputLabel>
          <Input
            id="standard-adornment-weight"
            endAdornment={<InputAdornment position="end">pF</InputAdornment>}
            aria-describedby="standard-weight-helper-text"
            inputProps={{
              'aria-label': 'C0 capacitance',
            }}
          />
          
          {/* <FormHelperText id="standard-weight-helper-text">C0</FormHelperText> */}
        </FormControl>
      </Box>
    )
  }
}

export default CrystalParameters;
