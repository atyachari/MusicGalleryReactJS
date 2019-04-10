import React from 'react';
import { Modal,ModalBody,ModalHeader,ModalFooter,Row,Col } from "reactstrap";
import uniqid from 'uuid';

const AlbumModal = (props) => {
  return(
    <Modal isOpen={props.isOpen} toggle={props.toggle} className={'modal-lg'} key={uniqid()}  >
      <ModalHeader toggle={props.toggle}>Album Info</ModalHeader>
      <ModalBody>
       <Row>
         <Col md="4">
         <a href={props.albuminfo.url_id} >
         <img className="loading-img-2" src={props.albuminfo.img || ''} alt="album_info" onLoad={(e)=>{
            e.target.className = '';
          }} /></a>

         </Col>
         <Col md="8" className="d-i">
         <a href={props.albuminfo.url_id} >  <h6 className={'display-4 '}>{props.albuminfo.title || ''}</h6></a>
            <b>Artist: </b> <a href={props.albuminfo.url_author} ><p>{props.albuminfo.artist || ''}</p></a>
            <i>released on {props.albuminfo.release}</i>
            <a href={props.albuminfo.url_id}  className="btn btn-success" role="button">Buy at {props.albuminfo.price || ''}</a>
            <p className="cp-b"> {props.albuminfo.rights || ''}</p>
         </Col>

       </Row>
      </ModalBody>
      <ModalFooter>

      </ModalFooter>
    </Modal>
  );
}

export default AlbumModal;
