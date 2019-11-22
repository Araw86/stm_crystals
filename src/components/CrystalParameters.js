import React, { Component } from 'react';
import { TextField, Box, FormControl, InputAdornment, Input, InputLabel, Card, CardHeader, CardContent , Typography, FormHelperText} from '@material-ui/core';
import { typography } from '@material-ui/system';

export class CrystalParameters extends Component {
  render() {
    return (
      <Box m={1}>
        <Card>
          <CardHeader
            title="LSE crystal parameters"
            subheader="sub header test"
          />
          <CardContent>
          <Typography type='p'>
            Please fill the Loading capacitance of cystal and C0 capacitance. This values are written in the Datasheet to related crystall. 
            Values will be used to calculate compatybility with STM32 device
          </Typography>
          <br/>
            <FormControl>
              <InputLabel htmlFor="standard-c0-helper-text">C<sub>0</sub> capacitance</InputLabel>
              <Input
                id="standard-adornment-c0"
                endAdornment={<InputAdornment position="end">pF</InputAdornment>}
                aria-describedby="standard-c0-helper-text"
                inputProps={{
                  'aria-label': 'C0 capacitance',
                }}
              />
              {/* <FormHelperText id="standard-c0-helper-text">Enter valid nunber</FormHelperText> */}
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-cl-helper-text">C<sub>L</sub> capacitance</InputLabel>
              <Input
                id="standard-adornment-cl"
                endAdornment={<InputAdornment position="end">pF</InputAdornment>}
                aria-describedby="standard-cl-helper-text"
                inputProps={{
                  'aria-label': 'Cl capacitance',
                }}
              />

            </FormControl>
          </CardContent>
        </Card>
      </Box>
    )
  }
}

export default CrystalParameters;
