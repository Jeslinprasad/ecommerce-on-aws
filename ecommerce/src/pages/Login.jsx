import { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Mock authentication logic
    if (email === "example@example.com" && password === "password") {
      // Successful login
      console.log("Login successful!");
      setError("");
      // Redirect to the dashboard or another page
    } else {
      // Failed login
      setError("Invalid email or password");
    }
  };

  return (
    <Container className="login-container">
      <h3 className="login-heading">Login</h3>
      <Form className="login-form" onSubmit={handleSubmit}>
        <Form.Group controlId="email" className="mb-3"> {/* Add margin bottom spacing */}
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password" className="mb-3"> {/* Add margin bottom spacing */}
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        {error && <p className="text-danger">{error}</p>}
        <Button variant="primary" type="submit" className="mb-3"> {/* Add margin bottom spacing */}
          Login
        </Button>
        <p className="mt-3">Don't have an account? <Link to="/signup">Sign up</Link></p> {/* Signup link */}
      </Form>
    </Container>
  );
};

export default Login;
