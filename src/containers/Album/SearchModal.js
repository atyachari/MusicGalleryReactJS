import React from 'react';
import {debounce} from 'lodash';
import { Modal,ModalBody,ModalHeader,ModalFooter,Row,Col } from "reactstrap";

const SearchModal = (props) => {
    return(
        <Modal isOpen={props.isOpen} className={'modal-lg'} toggle={props.isClose} >
      <ModalHeader>Search</ModalHeader>
      <ModalBody>
            <Row>
                <Col sm={4}>
                    <form>
                        <input className="form-control" type="text" id="search-input" onChange={()=>{debounce(props.handleChange, 300)}} onSubmit={()=>{props.handleChange(); props.isClose()}} placeholder="Enter to Search" />
                    </form>
                </Col>
            </Row>
      </ModalBody>
      <ModalFooter>

      </ModalFooter>
    </Modal>
    )
}

export default SearchModal;