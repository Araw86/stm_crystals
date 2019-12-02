import React, { Component, Fragment } from 'react';
import { Typography, Toolbar, AppBar } from '@material-ui/core';

import LSE from './LSE';

import stm32_lse_hse from '../data/stm32_lse_hse.json';

export class SelectionPage extends Component {
  render() {
    console.log(stm32_lse_hse);
    return (
      <Fragment>
        <header className="App-header">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6">STM Crystal calculation</Typography>
            </Toolbar>
          </AppBar>
        </header>
        <LSE inputConfig={stm32_lse_hse.LSE} />
      </Fragment>
    );
  }
}

export default SelectionPage;
