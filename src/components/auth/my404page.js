import React from 'react'
import { Container, Row, Col} from 'react-bootstrap';
import unavailablePage from '../../assets/icon/404icon.png'

export const My404page = () => {
    return (
        <div className="unavailable-page-container">
            <Container>
                <Row className="justify-content-md-center">
                    <Col>
                        <div><img className="unavailable-image" src={unavailablePage} alt="login-bg" /></div>
                        <h1>404 Page Not Found :(</h1>
                   </Col>
                </Row>
            </Container>
        </div>
    )
}
