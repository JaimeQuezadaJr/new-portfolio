import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Home = (props) => {
  return (
    <div className='top-padding'>
        <Container>
            <Row>
                <Col className='d-flex justify-content-center'>
                    <h1 className='m-2'>Software Developer</h1>
                </Col>
                <Col>
                <img
                    className="d-block w-100"
                    src="logo512.png"
                    alt="First slide"
                    />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home;