import React, { Component, Fragment } from "react";
import {
  TextField,
  Box,
  FormControl,
  InputAdornment,
  Input,
  InputLabel,
  MenuItem,
  Select,
  Card,
  CardHeader,
  CardContent,
  Typography
} from "@material-ui/core";

import dbList from "../data/stm32_gm2.json";

export class DeviceList extends Component {
  render() {
    /* prepare select items */

    const deviceList = dbList["dbList"]["gmFamilyList"].elements;
    let menuItems = [];
    menuItems.push(
      <MenuItem key="none" value="">
        <em>None</em>
      </MenuItem>
    );
    if (deviceList.length === 0) {
      /*no items to render */
      console.log("Check the jsoin surce no devices to show");
    } else {
      deviceList.forEach(element => {
        menuItems.push(
          <MenuItem key={element.elementUID} value={element.elementUID}>
            {element.elementName}
          </MenuItem>
        );
      });
    }
    console.log(menuItems);
    return (
      <Box m={1}>
        <Card>
          <CardHeader title="Check if STM32 can work with crystal" />
          <CardContent>
            <FormControl style={{ minWidth: 240 }}>
              <InputLabel id="simple-select-device-label">
                Select Device Family
              </InputLabel>
              <Select
                labelId="simple-select-device-label"
                id="simple-select-device"
                value=""
                /*onChange={handleChange}*/
              >
                {menuItems}
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default DeviceList;
