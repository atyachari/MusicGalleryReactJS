import React  from 'react';
import ClampLines from 'react-clamp-lines';

const AlbumContent = (props) => {
  return (
    <div >
             <a onClick={() => props.toggle(props.actor.id.attributes['im:id'])}> <img src={props.actor['im:image'][2].label} height={props.actor['im:image'][2].attributes.height}  onLoad={(e)=>{
                  e.target.className = '';
                }}  /></a>

                <a href={props.actor.id.label}>
                <ClampLines  buttons={false}
                text={props.actor['im:name'].label}
                lines={2}
                ellipsis="..."
                />
                </a>

                <a href={( 'attributes' in props.actor['im:artist'] )? props.actor['im:artist'].attributes.href : 'http://itunes.apple.com/' }>
                <ClampLines buttons={false}
                text={props.actor['im:artist'].label}
                lines={1}
                ellipsis="..."
                />
                </a>

         </div>
  );
};

export default AlbumContent;
