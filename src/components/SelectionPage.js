import React, { Component, Fragment } from 'react';
import { Typography, Toolbar, AppBar } from '@material-ui/core';

import LSE from './LSE';

export class SelectionPage extends Component {
  render() {
    return (
      <Fragment>
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">STM Crystal calculation</Typography>
            </Toolbar>
          </AppBar>
        </header>
        <LSE />
      </Fragment>
    );
  }
}

export default SelectionPage;
