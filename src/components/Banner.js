import { Col, Container, Row } from "react-bootstrap";
import { GrConnect } from "react-icons/gr";
import imageDev from "../assets/images/imageDevWeb.gif";
import { useEffect, useState } from "react";
import "./Banner.css";
const Banner = () => {
  const [loopNumber, setLoopNumber] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  let period = 2000;
  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => {
      clearInterval(ticker);
    };
  }, [text]);
  const tick = () => {
    let i = loopNumber % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta((preDelta) => preDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNumber(loopNumber + 1);
      setDelta(500);
    }
  };
  const toRotate = [
    "Web Dev",
    "Full-Stack Web",
    "Front-end Dev",
    "Back-end Web",
  ];
  return (
    <>
      <section className="banner" id="home">
        <Container>
          <Row className="align-items-center">
            {/* https://stackoverflow.com/questions/43445592/what-is-the-meaning-of-xs-md-lg-in-css-flexbox-system */}
            <Col xs={12} md={6} xl={7}>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1 className="txt-rotate">
                {`Hi I'm `}
                <span className="wrap">{text}</span>
              </h1>
              <p>Introduce my self</p>
              <button onClick={() => console.log("connect")}>
                Connect
                <GrConnect size={25} className="svg" />
              </button>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img src={imageDev} alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};
export default Banner;
