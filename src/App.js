import React from 'react';
import { Typography, Toolbar, AppBar } from '@material-ui/core';
import CrystalParameters from './components/CrystalParameters';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6">
              STM Crystal calculation
            </Typography>
          </Toolbar>
        </AppBar>
      </header>
      <body>
        <CrystalParameters />
      </body>
    </div>
  );
}

export default App;
