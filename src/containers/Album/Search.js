import React, { Component } from 'react';

import Gallery from './Gallery';
import api from '../../Api/api';
import {debounce} from 'lodash';
import SearchModal from './SearchModal';
import '../../App.css';
import hotkeys from 'hotkeys-js';
 


class Search extends Component {
    constructor()
    {
        super();
        this.state = {
            'albums' : '',
            'list' : [],
            'apiState' : 'Please Wait..',
            showModal: false,
            value: ''
        };
        this.searchAlbums = this.searchAlbums.bind(this);
    }
    toggle=()=>{
        this.setState({showModal: false});
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
        let self = this;
        hotkeys('command+f', function(event, handler){
            // Prevent the default refresh event under WINDOWS system
            event.preventDefault();
            self.setState({showModal: true});
          });
    }

    preventDefault = (e) => {
        e.preventDefault();
    }

    handleChange=(e)=>{
        console.log(e.target.value);
        this.setState({value: e.target.value});
        this.searchAlbums(this.state.value);
    }
    searchAlbums= (value) => {
       let data = value;
       let newList = this.state.albums.filter((actor) => {
           let at = actor['im:name'].label;
           let art =  actor['im:artist'].label;
         if(at.toLowerCase().indexOf(data) > -1 || art.toLowerCase().indexOf(data) > -1 )
         {
             return actor;
         }
         return false;
      });
       this.setState({
           list:newList
        });
    }

    render(){
        return(
           <div className="App">
             <div className="container">
               <div className="list-header-box">
                 <h6 className="display-4 list-header music-header"> Music Mania </h6>
                   <form className="form-inline input-group-sm my-lg-0 my-sm-0 float-right" onSubmit={this.preventDefault} >
                      <input className="form-control my-sm-1" type="text" id="search-input" onChange={this.handleChange} placeholder="Enter to Search" />
                    </form>
               </div>
               {this.state.showModal && <SearchModal isOpen={this.state.showModal}
                searchAlbums={this.searchAlbums}
                handleChange={this.handleChange}
                isClose={this.toggle} />}
               <Gallery albums={this.state.list}  appstate={this.state.apiState}/>
              </div>
          </div>
        );
    }
}


export default Search;
