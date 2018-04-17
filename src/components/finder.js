import React, { Component } from 'react';
import Card from './card';
import {Button, ButtonGroup} from 'reactstrap';


export default class finder extends Component {
  render() {
    return (
      <div>
      <Card></Card>
      <ButtonGroup >
        <Button className="d-block mx-auto">me gusta</Button>
        <Button className="d-block mx-auto">me gusta</Button>
      </ButtonGroup>
      </div>
    )
  }
}
