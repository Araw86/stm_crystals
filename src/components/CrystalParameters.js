import React, { Component, Fragment } from 'react';
import { TextField, Box, FormControl, InputAdornment, Input, InputLabel, Card, CardHeader, CardContent, Typography, FormHelperText, FormLabel } from '@material-ui/core';
import { typography } from '@material-ui/system';

export class CrystalParameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      c0: 0.0,
      cl: 0.0,
      esr: 0,
      gmcrit: 0.0,
      f: 32768,
    };
  }
  calculateGM() {
    let { c0, cl, esr, f } = this.state;
    let gmcrit = 4 * esr * 1e3 * Math.pow((2 * Math.PI * f), 2) * Math.pow(((cl + c0) * 1e-12), 2)*1e6;
    gmcrit = Number(gmcrit.toFixed(4));
    this.setState({ gmcrit: gmcrit });
  }

  // handleInputChange = e => {
  //   console.log(e);
  //   console.log(e.target.value);
  // }

  handleChange = input => e => {
    const value = Number(e.target.value);
    console.log(value);
    console.log(isNaN(value));
    if (!isNaN(value)) {
      // if (typeof value == 'number') {
      this.setState({ [input]: value }, ()=>{
        this.calculateGM();
      });
      // this.calculateGM();
    }
  }

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
              Please fill the Loading capacitance of cystal and C<sub>0</sub> capacitance. This values are written in the Datasheet to related crystall.
              Values will be used to calculate compatybility with STM32 device
          </Typography>
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-c0-helper-text">C<sub>0</sub> capacitance</InputLabel>
              <Input
                id="standard-adornment-c0"
                endAdornment={<InputAdornment position="end">pF</InputAdornment>}
                aria-describedby="standard-c0-helper-text"
                inputProps={{
                  'aria-label': 'C0 capacitance',
                }}
                onChange={this.handleChange('c0')}
                value={this.state.c0}
              />
              {/* <FormHelperText id="standard-c0-helper-text">Enter valid nunber</FormHelperText> */}
            </FormControl>
            <br />
            <br />
            <FormControl >
              <InputLabel htmlFor="standard-cl-helper-text">C<sub>L</sub> capacitance</InputLabel>
              <Input
                id="standard-adornment-cl"
                endAdornment={<InputAdornment position="end">pF</InputAdornment>}
                aria-describedby="standard-cl-helper-text"
                inputProps={{
                  'aria-label': 'Cl capacitance',
                }}
                onChange={this.handleChange('cl')}
                value={this.state.cl}
              />
            </FormControl>
            <br />
            <br />
            <FormControl >
              <InputLabel htmlFor="standard-esr-helper-text">ESR</InputLabel>
              <Input
                id="standard-adornment-esr"
                endAdornment={<InputAdornment position="end">k&Omega;</InputAdornment>}
                aria-describedby="standard-esr-helper-text"
                inputProps={{
                  'aria-label': 'ESR',
                }}
                onChange={this.handleChange('esr')}
                value={this.state.esr}
              />
            </FormControl>
            <br />
            <br />
            <TextField
              label={<Fragment>g<sub>mcrit</sub></Fragment>}
              id="standard-adornment-gmcrit"
              InputProps={{
                endAdornment: <InputAdornment position="end">&mu;A/V</InputAdornment>,
                readOnly: true
              }}
              value={this.state.gmcrit}
            />
          </CardContent>
        </Card>
      </Box>
    )
  }
}

export default CrystalParameters;
