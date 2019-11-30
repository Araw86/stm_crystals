import React, { Component } from 'react';
import { Box, Card, CardHeader, Typography, Avatar } from '@material-ui/core';
import { green, red, yellow } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import { Done, Close, Warning } from '@material-ui/icons';

const useStyles = theme => ({
  red: {
    color: '#fff',
    backgroundColor: red[500]
  },
  red_bg: {
    backgroundColor: red[50]
  },
  green: {
    color: '#fff',
    backgroundColor: green[500]
  },
  green_bg: {
    backgroundColor: green[50]
  },
  yellow: {
    color: '#000',
    backgroundColor: yellow[500]
  },
  yellow_bg: {
    backgroundColor: yellow[50]
  }
});

export class DeviceListGM extends Component {
  render() {
    const classes = this.props.classes;
    const gmOK = this.props.gmCompare < this.props.gmValueObj.elementValue;
    let titleString;
    let subTitleString;
    let boxColor;
    let icon;
    let bgColor;
    titleString = (
      <Typography>
        <b>
          {this.props.gmValueObj.elementName} gm<sub>crit max</sub>=
          {this.props.gmValueObj.elementValue}
        </b>
      </Typography>
    );
    if (this.props.gmValueObj.elementValue > 3) {
      subTitleString = (
        <Typography>
          This value have too big gain margin and not work with crystals.{' '}
          <b>It is set by default</b> be sure that you are using smaller Drive
          Mode. Use this mode only if will be only one possible
        </Typography>
      );
      bgColor = classes.yellow_bg;
      boxColor = classes.yellow;
      icon = <Warning />;
    } else if (gmOK) {
      subTitleString = (
        <Typography>
          LSE gm<sub>crit</sub> &lt; STM32 gm<sub>critmax</sub>
        </Typography>
      );
      bgColor = classes.green_bg;
      boxColor = classes.green;
      icon = <Done />;
    } else {
      subTitleString = (
        <Typography>
          LSE gm<sub>crit</sub> &gt;= STM32 gm<sub>critmax</sub>
        </Typography>
      );
      bgColor = classes.red_bg;
      boxColor = classes.red;
      icon = <Close />;
    }
    return (
      <Box m={1} /*className={classes.root}*/>
        <Card className={bgColor}>
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
