import React, { Component } from 'react';
import { Box, Card, CardHeader, Typography, Avatar } from '@material-ui/core';
import { green, red } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Done, Close } from '@material-ui/icons';

const useStyles = theme => ({
  red: {
    color: '#fff',
    backgroundColor: red[500]
  },
  green: {
    color: '#fff',
    backgroundColor: green[500]
  }
});

export class DeviceListGM extends Component {
  render() {
    console.log(this.props);
    const classes = this.props.classes;
    const gmOK = this.props.gmCompare < this.props.gmValueObj.elementValue;
    let titleString;
    let subTitleString;
    let boxColor;
    let icon;
    titleString = (
      <Typography>
        {this.props.gmValueObj.elementName} gm<sub>crit max</sub>=
        {this.props.gmValueObj.elementValue}
      </Typography>
    );
    if (gmOK) {
      subTitleString = (
        <Typography>
          LSE gm<sub>crit</sub> &lt; STM32 gm<sub>critmax</sub>
        </Typography>
      );

      boxColor = classes.green;
      icon = <Done />;
    } else {
      subTitleString = (
        <Typography>
          LSE gm<sub>crit</sub> &gt;= STM32 gm<sub>critmax</sub>
        </Typography>
      );
      boxColor = classes.red;
      icon = <Close />;
    }
    return (
      <Box m={1} /*className={classes.root}*/>
        <Card className={classes.card}>
          <CardHeader
            avatar={
              <Avatar aria-label="recipe" className={boxColor}>
                {icon}
              </Avatar>
            }
            title={titleString}
            subheader={subTitleString}
          />
        </Card>
      </Box>
    );
  }
}

export default withStyles(useStyles)(DeviceListGM);
