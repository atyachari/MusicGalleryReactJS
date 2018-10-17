import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Albums from './containers/Album';
import api from './Api/api';
import uniqid from 'uuid';



class App extends Component {
    constructor()
    {
        super();
        this.state = {
            'albums' : '',
            'list' : [],
            'apiState' : 'loading...'
        };

    }
    componentDidMount()
    {
        api().then(response => {
            if(response.data.feed.entry)
            {
                this.setState({
                    albums : response.data.feed.entry,
                    list : response.data.feed.entry,
                    apiState : 'loaded'
                });

            }
        }).catch((error) => {
            if (error.response) {
                this.setState({
                    apiState : 'Server Error '
                });
            } else if (error.request) {

                this.setState({
                    apiState : 'Your Internet is disconnected'
                });
            }
        });
    }
    render(){
        return(
           <div>
             <div className="container">
                <Albums albums={this.state.list}  appstate={this.state.apiState}/>
              </div>
          </div>
        );
    }
}


export default App;
