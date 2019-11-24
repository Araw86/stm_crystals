import React, { Component, Fragment } from "react";
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
} from "@material-ui/core";

export class LoadCapacitance extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cl: props.cl,
      cl12: 0.0,
      cs: 0,
      csString: ""
    };
  }

  calculateCl12() {
    const cs = this.state.cs;
    const cl = this.props.cl;
    let cl12 = (cl - cs) * 2;
    if (cl12 != this.state.cl12) {
      this.setState({ cl12: cl12 });
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.cl !== this.props.cl) {
      this.calculateCl12();
    }
  }

  handleChange = input => e => {
    const value = Number(e.target.value);
    // console.log(e.target.value);
    // console.log(value);
    // console.log(isNaN(value));
    if (!isNaN(value)) {
      // if (typeof value == 'number') {
      const valueToState = Number(value.toFixed(2));
      // console.log(valueToState);
      this.setState(
        { [input]: valueToState, [input + "String"]: e.target.value },
        () => {
          this.calculateCl12();
        }
      );
      // this.calculateGM();
    }
  };

  render() {
    return (
      <Box m={1}>
        <Card>
          <CardHeader
            title="LSE Load capacitance"
            subheader="sub header test"
          />
          <CardContent>
            <Typography type="p">
              This part is calculating the Load capacitance C<sub>L1</sub> & C
              <sub>L2</sub> which must be added toi your crystal. For this
              calculation is used Crystal load capacitance C<sub>L</sub> and
              stray capacitance C<sub>s</sub>.
            </Typography>
            <Typography>
              The stray capacitance is based on the PCB capacitance, STM32
              capacitance and soldering capacitance. So the value is only
              estimation. Best aproach is to use C<sub>L1</sub> & C<sub>L2</sub>{" "}
              calculated value. Measure the LSE frequency over MCO. And then
              compensate the offset by changing C<sub>L1</sub> & C<sub>L2</sub>.
            </Typography>
            <br />
            <FormControl>
              <InputLabel htmlFor="standard-Cs-helper-text">
                C<sub>s</sub>
              </InputLabel>
              <Input
                id="standard-adornment-cs"
                endAdornment={
                  <InputAdornment position="end">pF</InputAdornment>
                }
                aria-describedby="standard-cs-helper-text"
                inputProps={{
                  "aria-label": "CS"
                }}
                onChange={this.handleChange("cs")}
                value={this.state.csString}
              />
            </FormControl>
            <br />
            <br />
            <TextField
              label={
                <Fragment>
                  C<sub>S</sub>
                </Fragment>
              }
              id="standard-adornment-cl12"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">pF</InputAdornment>
                ),
                readOnly: true
              }}
              value={this.state.cl12}
            />
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default LoadCapacitance;
