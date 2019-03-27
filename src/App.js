import React, { Component } from 'react';
import './App.css';
import Routing from './components/Routing/Routing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

if (process.env.NODE_ENV !== 'production') {
  const {whyDidYouUpdate} = require('why-did-you-update');
  whyDidYouUpdate(React);
}

class App extends Component {
    render(){
        return(
             <MuiThemeProvider>
                  <AppBar position="static"  />
                  <Routing />
            </MuiThemeProvider>
        );
    }
}


export default App;
