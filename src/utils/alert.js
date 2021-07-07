import React from 'react'
import { Alert, Container, Row, Col } from 'react-bootstrap';


export const AlertPopUp = (props) => {
  const setShow = props.setShow;
  const variantType = props.variantType
  console.log(props);

  const autoClose = () =>{
      setTimeout((()=>{
        setShow(false)
      }),3000)
  }
  autoClose();
  return (
    <div className="alert-container">
      <Container fluid>
        <Row>
          <Col>
            <Alert variant={variantType} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
              <p>
                Change this and that and try again. Duis mollis, est non commodo
                luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit.
                Cras mattis consectetur purus sit amet fermentum.
              </p>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
