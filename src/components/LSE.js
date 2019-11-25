import React, { Component } from "react";
import { Typography, Toolbar, AppBar, Box } from "@material-ui/core";

import CrystalParameters from "./CrystalParameters";
import LoadCapacitance from "./LoadCapacitance";
import DeviceList from "./DeviceList";

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
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">STM Crystal calculation</Typography>
            </Toolbar>
          </AppBar>
        </header>
        <Box>
          <CrystalParameters updateState={this.updateState} />
        </Box>
        <Box>
          <DeviceList gmcrit={this.state.gmcrit} />
        </Box>
        <Box>
          <LoadCapacitance cl={this.state.cl} />
        </Box>
      </div>
    );
  }
}

export default LSE;
