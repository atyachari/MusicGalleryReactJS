
import React, {Component} from 'react';
import AlbumContent from '../../components/Album/AlbumContent';
import AlbumModal from '../../components/Album/AlbumModal'
import { Modal,ModalBody,ModalHeader,ModalFooter,Row,Col } from "reactstrap";
import uniqid from 'uuid';
import { FixedSizeList as List } from 'react-window';
 
// const Row = ({ index, style }) => (
//   <div style={style}>Row {index}</div>
// );
 
// const Example = () => (
//   <List
//     height={150}
//     itemCount={1000}
//     itemSize={35}
//     width={300}
//   >
//     {Row}
//   </List>
// );

class Gallery extends Component {
    constructor()
    {
       super();
       this.state = {
           'modal' : false,
           'albuminfo' : {
               'title' : '',
               'artist' : '',
               'release' : '',
               'price' : '',
               'rights' :'',
               'img' : '',
               'url_id' :'',
               'url_author ': ''
           }

       };
      this.toggle = this.toggle.bind(this);
      this.gridTemplateBuilder = this.gridTemplateBuilder.bind(this);
      this.filterId = this.filterId.bind(this);
    }
    toggle = (data = null) => {
        if(typeof data === 'string'){
         let albumData = this.filterId(data);
         let img = albumData['im:image'][2].label;
         this.setState({
            'albuminfo' : {
                'title' : albumData['im:name'].label,
                'artist' :  albumData['im:artist'].label,
                'release' :  albumData['im:releaseDate'].attributes.label,
                'price' : albumData['im:price'].label,
                'rights' :albumData.rights.label,
                'img' : img.replace('170',250).replace('170',250),
                'url_id' :albumData.id.label,
                'url_author': ('attributes' in albumData['im:artist']) ? albumData['im:artist'].attributes.href : 'https://www.apple.com/itunes/'
            }
         });
        } else {
            this.setState({
                'albuminfo' : {
                    'title' : '',
                    'artist' : '',
                    'release' : '',
                    'price' : '',
                    'rights' :'',
                    'img' : '',
                    'url_id' :'',
                    'url_author ': ''
                }
            });
        }
        this.setState({
            modal: !this.state.modal
        });
    }

    filterId = (id) =>{
       let albumdata = this.props.albums.filter((actor) => {
            return actor.id.attributes['im:id'] === id;
       });

       return albumdata[0];
    }

    gridTemplateBuilder = () => {
      var items =  this.props.albums.map((actor,id) => {
        return (
          <List
            height={150}
            itemCount={100}
            itemSize={35}
            width={300}
          >
            <AlbumContent
              actor={actor}
              toggle={this.toggle}
              key={id}
            /></List>
            );
          });
      return items;
    }
    render()
    {
       let musicInfo =
                       <AlbumModal
                          isOpen={this.state.modal}
                          albuminfo = {this.state.albuminfo}
                          toggle={this.toggle}
                        />;



        
        if(this.props.albums.length > 0){
          let musicGrid = this.gridTemplateBuilder();
          //  musicGrid.push(musicInfo);
           return musicGrid;
         }
        if(this.props.albums.length === 0  &&  this.props.appstate === 'loaded' ){
          return <p className="text-center">No Albums found </p>;
        }
        return <p className="text-center">{this.props.appstate}</p>;
    }
}


export default Gallery;
