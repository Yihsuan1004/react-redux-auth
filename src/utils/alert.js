import React from 'react'
import { Alert, Container, Row, Col } from 'react-bootstrap';


export const AlertPopUp = (props) => {
  const{variantType,setShow,alertTitle,content} = props
  const autoClose = () =>{
      setTimeout((()=>{
        setShow(false)
      }),2000)
  }
  
  autoClose();
  return (
    <div className="alert-container">
      <Container>
        <Row>
          <Col>
            <Alert variant={variantType} onClose={() => setShow(false)} dismissible>
              <Alert.Heading>{alertTitle}</Alert.Heading>
              <p>{content}</p>
            </Alert>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
