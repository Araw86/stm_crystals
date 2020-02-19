import React, { Component } from 'react';
import { Typography, Box, Card, CardHeader } from '@material-ui/core';

import CrystalParameters from './CrystalParameters';
import LoadCapacitance from './LoadCapacitance';
import DeviceList from './DeviceList';
import PpmCalculation from './PpmCalculation';

export class LSE extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cl: 0,
      gmcrit: 0
    };
    this.updateState = this.updateState.bind(this);
  }
  updateState(input) {
    this.setState(input);
  }
  render() {
    return (
      <div className="App">
        <Box m={1}>
          <Card>
            <CardHeader
              title={
                <Typography variant="h5">
                  Help select LSE (32.768kHz) crystal which will work with STM32
                </Typography>
              }
            />
          </Card>
        </Box>
        <Box>
          <CrystalParameters
            inputConfig={this.props.inputConfig}
            propsNeeded={['lsef', 'lsec0', 'lsecl', 'lseesr', 'lsegmcrit']}
          />
        </Box>
        <Box>
          <DeviceList
            inputConfig={this.props.inputConfig}
            gmcrit={this.state.gmcrit}
          />
        </Box>
        <Box>
          <LoadCapacitance
            inputConfig={this.props.inputConfig}
            cl={this.state.cl}
          />
        </Box>
        <Box>
          <PpmCalculation inputConfig={this.props.inputConfig} fnom={32768} />
        </Box>
      </div>
    );
  }
}

export default LSE;
