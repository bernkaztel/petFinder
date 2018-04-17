import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import "./home.css";

export default class home extends Component {
  render() {
    return (
      <Container className="m-0 p-0">
        <Container className="banner m-0 p-0">
          <br />
          <br />
          <h1 className="text-center text-white">
            Nosotros somos <img src="./images/logo.png" />{" "}
          </h1>
          <h3 className="text-center text-white font-italic">
            ¡Y queremos ayudarte a encontrar tu perro ideal!
          </h3>
          <br />
          <br/>
        </Container>
        <Container class>
          <Row clasName="margin-top-5">
            <Col>
              <div className="icon-banner mt-4">
                <i className="fas fa-check-circle d-block mx-auto icon" />
              </div>
              <h6 className="smallfont mt-2 text-center text-font-weight-bold mt-3">
                Aségurate de que sea el indicado
              </h6>
              <span className="text-center smallerfont mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            culpa asperiores non ratione facere consequuntur est autem eos quas.
          </span>
            </Col>
            <Col>
              <div className="icon-banner mt-4">
                <i className="fas fa-home d-block mx-auto icon" />
              </div>
              <h6 className="smallfont mt-2 text-center text-font-weight-bold mt-3">Házlo parte de tu hogar</h6>
              <span className="text-center smallerfont mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            culpa asperiores non ratione facere consequuntur est autem eos quas.
          </span>
            </Col>
            <Col>
              <div className="icon-banner mt-4">
                <i className="fas  fa-hands-helping d-block mx-auto icon" />
              </div>
              <h6 className="smallfont mt-2 text-center text-font-weight-bold mt-3">Ayúdanos a ayudarlos</h6>
              <span className="text-center smallerfont mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            culpa asperiores non ratione facere consequuntur est autem eos quas.
          </span>
            </Col>
            <Col>
              <div className="icon-banner mt-4">
                <i className="fas  fa-question-circle d-block mx-auto icon" />
              </div>
              <h6 className="smallfont mt-2 text-center text-font-weight-bold mt-3">Resuelve tus dudas</h6>
              <span className="text-center smallerfont mt-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
            culpa asperiores non ratione facere consequuntur est autem eos quas.
          </span>
            </Col>
          </Row>
          <Row className="mt-5 my-3">
          <div className="d-block mx-auto"/>
            <div className="line"/><h2 className="text-center" >¡Nuestros increíbles perros</h2> <div className="line"/>
            <hr/>
          </Row>
        </Container>
      </Container>
    );
  }
}
