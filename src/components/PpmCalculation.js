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
  Typography,
  Avatar
} from '@material-ui/core';
import { blue } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { ArrowUpward, ArrowDownward } from '@material-ui/icons';

const useStyles = theme => ({
  blue: {
    color: '#fff',
    backgroundColor: blue[500]
  }
});

export class PpmCalculation extends Component {
  constructor(props) {
    super(props);
    this.state = { ppm: 0, ppmString: '', fmeas: 0, fmeasString: '' };
  }

  calculatePpm() {
    const fmeas = this.state.fmeas;
    const fnom = this.props.fnom;
    // ppm = (Fmeas/Fnom - 1)x1000 000
    const ppm = (fmeas / fnom - 1) * 10000000;
    const roundedPpm = Number(ppm.toFixed(2));
    this.setState({ ppm: roundedPpm });
  }
  handleChange = input => e => {
    const value = Number(e.target.value);
    if (!isNaN(value)) {
      const valueToState = Number(value.toFixed(2));
      this.setState(
        { [input]: valueToState, [input + 'String']: e.target.value },
        () => {
          this.calculatePpm();
        }
      );
    }
  };

  render() {
    let ppmAdjust;
    let icon;
    let titleString;
    console.log(this);
    if (this.state.ppm > 0) {
      icon = <ArrowUpward />;
      titleString = (
        <Typography>
          To finetune frequency you can sligthly <b>increase</b> C<sub>L1</sub>{' '}
          & C<sub>L2</sub>
          value
        </Typography>
      );
    } else if (this.state.ppm < 0) {
      icon = <ArrowDownward />;
      titleString = (
        <Typography>
          To finetune frequency you can sligthly <b>decrease</b> C<sub>L1</sub>{' '}
          & C<sub>L2</sub>
          value
        </Typography>
      );
    }
    if (this.state.ppm !== 0) {
      ppmAdjust = (
        <Box m={1} /*className={classes.root}*/>
          <Card>
            <CardHeader
              avatar={
                <Avatar aria-label="recipe" className={this.props.classes.blue}>
                  {icon}
                </Avatar>
              }
              title={titleString}
            />
          </Card>
        </Box>
      );
    }
    return (
      <Box m={1}>
        <Card>
          <CardHeader title="Calculate ppm" />
          <CardContent>
            <Typography type="p">
              To calculate ppm we must measure f<sub>meas</sub> created by
              crystal. Best is to use MCO output.
            </Typography>
            <Typography type="p">
              If measuring the LSE do not use PC13 the LSE is so sensitive that
              this close output will affect its freqeuncy.
            </Typography>
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-fmeas-helper-text">
                f<sub>meas</sub>
              </InputLabel>
              <Input
                id="standard-adornment-fmin"
                endAdornment={
                  <InputAdornment position="end">Hz</InputAdornment>
                }
                aria-describedby="standard-fmeas-helper-text"
                inputProps={{
                  'aria-label': 'fmeas'
                }}
                onChange={this.handleChange('fmeas')}
                value={this.state.csString}
              />
            </FormControl>
            <br />
            <br />
            <TextField
              label={<Fragment>ppm</Fragment>}
              id="standard-adornment-ppm"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">ppm</InputAdornment>
                ),
                readOnly: true
              }}
              value={this.state.ppm}
              variant="outlined"
            />
            {ppmAdjust}
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default withStyles(useStyles)(PpmCalculation);
