import React, { Component } from 'react';

import Gallery from './Gallery';
import api from '../../Api/api';
import uniqid from 'uuid';
import '../../App.css';

class Search extends Component {
    constructor()
    {
        super();
        this.state = {
            'albums' : '',
            'list' : [],
            'apiState' : 'Please Wait..'
        };
        this.searchAlbums = this.searchAlbums.bind(this);
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

    preventDefault = (e) => {
        e.preventDefault();
    }


    searchAlbums= () => {
       let data = document.getElementById("search-input");
       let newList = this.state.albums.filter((actor) => {
           let at = actor['im:name'].label;
           let art =  actor['im:artist'].label;
         if(at.toLowerCase().indexOf(data.value) > -1 || art.toLowerCase().indexOf(data.value) > -1 )
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
                      <input className="form-control my-sm-1" type="text" id="search-input" onChange={this.searchAlbums} placeholder="Enter to Search" />
                    </form>
               </div>
               <Gallery albums={this.state.list}  appstate={this.state.apiState}/>
              </div>
          </div>
        );
    }
}


export default Search;
