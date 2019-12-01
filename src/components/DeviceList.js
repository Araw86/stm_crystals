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

import dbList from '../data/stm32_gm2.json';
import DeviceListGM from './DeviceListGM';
import * as dbSearch from '../dataFunctions/dataSearch';
export class DeviceList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      deviceSelected: ''
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(e) {
    this.setState({ deviceSelected: e.target.value });
  }

  render() {
    /* prepare select items */

    const deviceList = dbList['dbList']['gmFamilyList'].elements;
    let menuItems = [];
    menuItems.push(
      <MenuItem key="none" value="">
        <em>None</em>
      </MenuItem>
    );
    if (deviceList.length === 0) {
      /*no items to render */
      console.log('Check the jsoin surce no devices to show');
    } else {
      deviceList.forEach(element => {
        menuItems.push(
          <MenuItem key={element.elementUID} value={element.elementUID}>
            {element.elementName}
          </MenuItem>
        );
      });
    }
    let compareGM = [];
    if (this.state.deviceSelected !== '') {
      const deviceGM = dbSearch.getDataByUID(
        dbList['dbList'],
        'gmFamilyList',
        this.state.deviceSelected
      );
      const deviceGMs = dbSearch.getReferenceArray(
        dbList['dbList'],
        deviceGM,
        'gmTypes'
      );
      deviceGMs.forEach(element => {
        compareGM.push(
          <DeviceListGM
            key={element.elementUID}
            gmValueObj={element}
            gmCompare={this.props.gmcrit}
          />
        );
      });
    }
    return (
      <Box m={1}>
        <Card>
          <CardHeader title="Check if STM32 can work with crystal" />
          <CardContent>
            <Box m={1}>
              <Typography type="p">
                Allow to controll if STM32 can work with selected crystal. We
                are comparing crystal gm<sub>crit</sub>={this.props.gmcrit}uA/V
                with STM32 gm<sub>crit max</sub>. This value is taken from STM32
                datasheet or AN2867.
              </Typography>
            </Box>
            <FormControl style={{ minWidth: 240 }}>
              <InputLabel id="simple-select-device-label">
                Select Device Family
              </InputLabel>
              <Select
                labelId="simple-select-device-label"
                id="simple-select-device"
                value={this.state.deviceSelected}
                onChange={this.handleSelect}
              >
                {menuItems}
              </Select>
            </FormControl>
            <Box m={1}>{compareGM}</Box>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default DeviceList;
