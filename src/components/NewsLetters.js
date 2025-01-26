import { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

const NewsLetters = ({ onValidated, status, message }) => {
  let [email, setEmail] = useState("");

  const omSubmit = (e) => {
    e.preventDefault();
    email &&
      email.indexOf("@") > -1 &&
      onValidated({
        email,
      });
  };
  const clearFields = () => {
    setEmail("");
  };
  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);
  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col xl={5} md={6} lg={12}>
            <h3>Hiiiiiiiiii</h3>
            {status === "Sending" && <Alert variant="">Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}...</Alert>}
            {status === "success" && (
              <Alert variant="success">{message}...</Alert>
            )}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={() => omSubmit}>
              <div className="new-email-bx">
                <input
                  value={email}
                  type="email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};
export default NewsLetters;
