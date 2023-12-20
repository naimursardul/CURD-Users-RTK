import { useState } from "react";
import { Alert, Button, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { create } from "../../features/slice/curdSlice";
import { useNavigate } from "react-router-dom";

function UserForm() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { error } = useSelector((state) => state.userDetails);

  const [data, setData] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const getFormData = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(create(data));
    navigate("/");
    setIsSubmitted(true);
  };

  return (
    <Form
      className="bg-dark text-white px-5 py-4 rounded w-50 mx-auto mt-5"
      onSubmit={handleSubmit}
    >
      <p className="text-white mb-4 h1 text-center">Please! Fill the Form</p>

      <Row className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Group as={Col}>
          <Form.Control
            placeholder="First name"
            name="firstName"
            onChange={getFormData}
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Control
            placeholder="Last name"
            name="lastName"
            onChange={getFormData}
            required
          />
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col}>
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={getFormData}
            required
          />
        </Form.Group>

        <Form.Group as={Col}>
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={getFormData}
            required
          />
        </Form.Group>
      </Row>

      <Form.Group className="mb-4 d-flex justify-content-start align-items-start gap-4">
        <Form.Label>Gender</Form.Label>
        <div>
          <Form.Check
            label="Male"
            type="radio"
            name="gender"
            value="Male"
            onChange={getFormData}
            required
          />
          <Form.Check
            label="Female"
            type="radio"
            name="gender"
            value="Female"
            onChange={getFormData}
            required
          />
        </div>
      </Form.Group>

      {isSubmitted && (
        <Alert
          key={error ? "danger" : "success"}
          variant={error ? "danger" : "success"}
        >
          {error ? { error } : "Successfully submited"}
        </Alert>
      )}
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default UserForm;
