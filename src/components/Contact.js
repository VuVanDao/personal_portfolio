import { use, useState } from "react";
import "./Contact.css";
import { Col, Container, Row } from "react-bootstrap";
import contactImg from "../assets/images/contact-img.svg";
const Contact = () => {
  let formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  let [formDetails, setFormDetail] = useState(formInitialDetails);
  let [buttonText, setButtonText] = useState("Send");
  let [status, setStatus] = useState({});
  const onFromUpdate = (id, value) => {
    setFormDetail({
      ...formDetails,
      [id]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending....");
    let res = await fetch("http://localhost:5000/contact", {
      method: "post",
      headers: {
        "Content-Type": "Application/json;charset=utf-8",
      },
      body: JSON.stringify(formDetails),
    });
    setButtonText("Send");
    let result = await res.json();
    setFormDetail(formInitialDetails);
    if (result.code === 200) {
      setStatus({ success: true, message: "Message sent successfully" });
    } else {
      setStatus({
        success: false,
        message: "Something wrong. Try again later",
      });
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImg} alt="contact-us" />
          </Col>
          <Col md={6}>
            <h2>Get In Touch</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formInitialDetails.firstName}
                    placeholder="First Name"
                    onChange={(event) =>
                      onFromUpdate("firstName", event.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formInitialDetails.lastName}
                    placeholder="Last Name"
                    onChange={(event) =>
                      onFromUpdate("lastName", event.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formInitialDetails.email}
                    placeholder="Email"
                    onChange={(event) =>
                      onFromUpdate("email", event.target.value)
                    }
                  />
                </Col>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formInitialDetails.phone}
                    placeholder="Phone"
                    onChange={(event) =>
                      onFromUpdate("phone", event.target.value)
                    }
                  />
                </Col>
                <Col>
                  <textarea
                    rows="6"
                    value={formInitialDetails.message}
                    placeholder="Message"
                    onChange={(event) =>
                      onFromUpdate("message", event.target.value)
                    }
                  ></textarea>
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p className={!status.success ? "danger" : "success"}>
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default Contact;
