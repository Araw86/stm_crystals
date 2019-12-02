import React, { Component, Fragment } from 'react';
import {
  TextField,
  Box,
  FormControl,
  InputAdornment,
  Input,
  InputLabel,
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';

import { connect } from 'react-redux';

import { updateStateAction } from '../actions/updateStateAction';
// import { threadId } from 'worker_threads';
// import * as TYPES from '../actions/types';

export class CrystalParameters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // c0: 0.0,
      // c0String: '',
      // cl: 0.0,
      // clString: '',
      // esr: 0,
      // esrString: '',
      lsec0String: '',
      lseclString: '',
      lseesrString: '',
      // gmcrit: props.lsegmcrit,
      f: 32768
    };
  }

  // calculateGM() {
  //   const { c0, cl, esr, f } = this.state;
  //   let gmcrit =
  //     4 *
  //     esr *
  //     1e3 *
  //     Math.pow(2 * Math.PI * f, 2) *
  //     Math.pow((cl + c0) * 1e-12, 2) *
  //     1e6;
  //   gmcrit = Number(gmcrit.toFixed(4));
  //   console.log(gmcrit);
  //   return gmcrit;
  // }

  handleChange = input => e => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      const valueToState = Number(value.toFixed(2));
      // const gmcrit = this.calculateGM();
      this.setState(
        {
          [input + 'String']: e.target.value
          // gmcrit: gmcrit
        },
        () => {
          this.props.updateStateAction({ [input]: valueToState });
        }
      );

      // this.props.updateState({ gmcrit: gmcrit });
      // if (input === 'cl') {
      //   this.props.updateState({ cl: valueToState });
      //   this.props.updateStateAction({ lsecl: valueToState });
      // }
    }
  };

  render() {
    return (
      <Box m={1}>
        <Card>
          <CardHeader title="LSE crystal parameters" />
          <CardContent>
            <Typography type="p">
              Please fill the Loading capacitance of cystal and C<sub>0</sub>{' '}
              capacitance. This values are written in the Datasheet to related
              crystal. Values will be used to calculate compatybility with STM32
              device
            </Typography>
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-c0-helper-text">
                C<sub>0</sub> capacitance
              </InputLabel>
              <Input
                id="standard-adornment-c0"
                endAdornment={
                  <InputAdornment position="end">pF</InputAdornment>
                }
                aria-describedby="standard-c0-helper-text"
                inputProps={{
                  'aria-label': 'C0 capacitance'
                }}
                onChange={this.handleChange('lsec0')}
                value={this.state.lsec0String}
              />
              {/* <FormHelperText id="standard-c0-helper-text">Enter valid nunber</FormHelperText> */}
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-cl-helper-text">
                C<sub>L</sub> capacitance
              </InputLabel>
              <Input
                id="standard-adornment-cl"
                endAdornment={
                  <InputAdornment position="end">pF</InputAdornment>
                }
                aria-describedby="standard-cl-helper-text"
                inputProps={{
                  'aria-label': 'Cl capacitance'
                }}
                onChange={this.handleChange('lsecl')}
                value={this.state.lseclString}
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-esr-helper-text">ESR</InputLabel>
              <Input
                id="standard-adornment-esr"
                endAdornment={
                  <InputAdornment position="end">k&Omega;</InputAdornment>
                }
                aria-describedby="standard-esr-helper-text"
                inputProps={{
                  'aria-label': 'ESR'
                }}
                onChange={this.handleChange('lseesr')}
                value={this.state.lseesrString}
              />
            </FormControl>
            <br />
            <br />
            <TextField
              label={
                <Fragment>
                  g<sub>mcrit</sub>
                </Fragment>
              }
              id="standard-adornment-gmcrit"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">&mu;A/V</InputAdornment>
                ),
                readOnly: true
              }}
              value={this.props.lsegmcrit}
              variant="outlined"
            />
          </CardContent>
        </Card>
      </Box>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  let mappingResult = {};
  ownProps.propsNeeded.forEach(prop => {
    mappingResult[prop] = state.crystal[prop];
  });
  return mappingResult;
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log(ownProps);
//   return {
//     updateStateAction: objectToUpdate => {
//       console.log(objectToUpdate);
//       dispatch({
//         type: TYPES.UPDATE_STATE,
//         payload: objectToUpdate
//       });
//     }
//   };
// };

export default connect(mapStateToProps, { updateStateAction })(
  CrystalParameters
);
// export default connect(null, mapDispatchToProps)(CrystalParameters);
