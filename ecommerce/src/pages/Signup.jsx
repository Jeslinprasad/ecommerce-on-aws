import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // eslint-disable-next-line
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your signup logic here
    console.log("Signing up with:", email, password);
    // Clear form fields after submission
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };

  return (
    <Container className="signup-container">
      <h3 className="signup-heading">Sign Up</h3>
      <Form className="signup-form" onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3">
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="confirmPassword" className="mb-3">
          <Form.Control
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit" className="mb-3">
          Sign Up
        </Button>
        {error && <p className="text-danger">{error}</p>}
      </Form>
    </Container>
  );
};

export default Signup;
