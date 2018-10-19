import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './containers/Album/Search';
import api from './Api/api';
import uniqid from 'uuid';
import Routing from './components/Routing/Routing';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';

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
