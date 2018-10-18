import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Search from './containers/Search';
import api from './Api/api';
import uniqid from 'uuid';

class App extends Component {
    render(){
        return(
           <div>
             <Search />
          </div>
        );
    }
}


export default App;
