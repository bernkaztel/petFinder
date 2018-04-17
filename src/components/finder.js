import React, { Component } from 'react';
import Card from './card';
import {Button, ButtonGroup, Row, Col } from 'reactstrap';


export default class finder extends Component {
  render() {
    return (
      <div>
      <Card></Card>
      <Row>
      <Col sm="0" className="d-block mx-auto">
        <Button color="success" size="lg"><i class="far fa-heart"></i></Button>
        <Button color="success" size="lg"><i class="fas fa-times"></i></Button>
      </Col>
      </Row>

      </div>
    )
  }
}
