import React, { useState } from "react";
import { Button, Col, Form, Modal, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../../features/slice/curdSlice";

const UpdateForm = ({ setIsUpdateTrue }) => {
  const { firstName, lastName, email, phone, gender } = useSelector(
    (state) => state.userDetails.selectedUser
  );
  const { selectedUser } = useSelector((state) => state.userDetails);
  const dispatch = useDispatch();

  const [data, setData] = useState(selectedUser);
  const getFormData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsUpdateTrue(false);
    dispatch(updateUser(data));
  };

  return (
    <div
      className="modal show"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backdropFilter: "brightness(0.3)",
      }}
    >
      <Form>
        <Modal.Dialog>
          <Modal.Header closeButton onClick={() => setIsUpdateTrue(false)}>
            <Modal.Title>Update Your Info</Modal.Title>
          </Modal.Header>

          <Modal.Body>
            <Row className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="First name"
                  name="firstName"
                  defaultValue={firstName}
                  onChange={getFormData}
                />
              </Form.Group>
              <Form.Group as={Col}>
                <Form.Control
                  type="text"
                  placeholder="Last name"
                  name="lastName"
                  defaultValue={lastName}
                  onChange={getFormData}
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col}>
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="text"
                  plaintext
                  readOnly
                  defaultValue={email}
                  onChange={getFormData}
                />
              </Form.Group>

              <Form.Group as={Col}>
                <Form.Label>Phone</Form.Label>
                <Form.Control
                  type="text"
                  name="phone"
                  placeholder="Phone"
                  defaultValue={phone}
                  onChange={getFormData}
                />
              </Form.Group>
            </Row>

            <Form.Group>
              <Form.Label>Gender</Form.Label>
              <div className="d-flex gap-3">
                <Form.Check
                  label="Male"
                  type="radio"
                  name="gender"
                  value="Male"
                  defaultChecked={gender === "Male" && true}
                  onChange={getFormData}
                />
                <Form.Check
                  label="Female"
                  type="radio"
                  name="gender"
                  value="Female"
                  defaultChecked={gender === "Female" && true}
                  onChange={getFormData}
                />
              </div>
            </Form.Group>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={() => setIsUpdateTrue(false)}>
              Close
            </Button>
            <Button variant="primary" type="submit" onClick={handleSubmit}>
              Save changes
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Form>
    </div>
  );
};

export default UpdateForm;
