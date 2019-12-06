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

/**TODO
 * Must do map to hadnle function more universaly then move to genertion based on json
 */
export class CrystalParameters extends Component {
  constructor(props) {
    super(props);
    let tempState = {};
    props.propsNeeded.forEach(prop => {
      tempState[prop] = '';
    });
    this.state = tempState;
  }

  handleChange = input => e => {
    const value = Number(e.target.value);

    if (!isNaN(value)) {
      const valueToState = Number(value.toFixed(2));
      // const gmcrit = this.calculateGM();
      this.setState(
        {
          [input]: e.target.value
          // gmcrit: gmcrit
        },
        () => {
          this.props.updateStateAction({ [input]: valueToState });
        }
      );
    }
  };

  render() {
    const inputConfig = this.props.inputConfig;
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
                onChange={this.handleChange(inputConfig.c0)}
                value={this.state[inputConfig.c0]}
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
                onChange={this.handleChange(inputConfig.cl)}
                value={this.state[inputConfig.cl]}
              />
            </FormControl>
            <br />
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-esr-helper-text">ESR</InputLabel>
              <Input
                id="standard-adornment-esr"
                endAdornment={
                  <InputAdornment position="end">
                    {this.props.inputConfig.esrUnits}
                  </InputAdornment>
                }
                aria-describedby="standard-esr-helper-text"
                inputProps={{
                  'aria-label': 'ESR'
                }}
                onChange={this.handleChange(inputConfig.esr)}
                value={this.state[inputConfig.esr]}
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
                  // &mu;A/V
                  <InputAdornment position="end">
                    {this.props.inputConfig.gmUnits}
                  </InputAdornment>
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
