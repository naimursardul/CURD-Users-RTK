import React from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../features/slice/curdSlice';

const DeleteForm = ({setIsDeleteTrue}) => {
  const dispatch = useDispatch();
  const { selectedUser } = useSelector(state => state.userDetails);
    return (
        <div
          className="modal show "
          style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',  backdropFilter: 'brightness(0.3)' }}
        >
          <Modal.Dialog >
            <Modal.Header closeButton onClick={() => setIsDeleteTrue(false)}>
              <Modal.Title>Confirmation for Deletion</Modal.Title>
            </Modal.Header>
        
            <Modal.Body>
              <Form.Label>Are you sure want to delete this data?</Form.Label>
            </Modal.Body>
        
            <Modal.Footer>
              <Button variant="secondary" onClick={() => setIsDeleteTrue(false)}>Close</Button>
              <Button variant="danger" onClick={() => {
                setIsDeleteTrue(false);
                dispatch(deleteUser(selectedUser.id));
              }}>Confirm</Button>
            </Modal.Footer>
          </Modal.Dialog>
        </div>
    );
};

export default DeleteForm;