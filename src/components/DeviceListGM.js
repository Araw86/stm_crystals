import React, { Component } from 'react';
import {
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';

export class DeviceListGM extends Component {
  render() {
    console.log(this.props);
    const gmOK = this.props.gmCompare < this.props.gmValueObj.elementValue;
    let printString = '';
    let boxColor = '';
    if (gmOK) {
      printString = `LSE gmcrit ${this.props.gmCompare} < STM32 gmcritmax ${this.props.gmValueObj.elementValue}`;
      boxColor = 'gredreen';
    } else {
      printString = `LSE gmcrit ${this.props.gmCompare} >= STM32 gmcritmax ${this.props.gmValueObj.elementValue}`;
      boxColor = 'green';
    }
    return <Box m={1}>{printString}</Box>;
  }
}

export default DeviceListGM;
