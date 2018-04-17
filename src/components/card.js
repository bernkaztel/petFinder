import React from 'react'
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col} from 'reactstrap';

const petsCards = (props) => {
  return (
    <Row>
    <Col className="d-block mx-auto" sm="5">
      <Card>
        <CardImg top width="30%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=200%C3%97180&w=318&h=180" alt="Card image cap" />
        <CardBody>
          <CardTitle>Cabrd title</CardTitle>
          <CardSubtitle>Card subtitle</CardSubtitle>
          <CardText>'Some quick example text to build on the card title and make up the bulk of the card'</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </Col>
    </Row>
  );
};

export default petsCards;
