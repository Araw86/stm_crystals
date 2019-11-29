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
    console.log(dbList);
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
                value={"Select Device"}
                /*onChange={handleChange}*/
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </FormControl>
          </CardContent>
        </Card>
      </Box>
    );
  }
}

export default DeviceList;
