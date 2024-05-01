import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';


const Home = (props) => {
  return (
    <div className='top-padding'>
        <Container className='p-5'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:3}}>
            <Row className='pb-5'>
                <Col md>
                    <h1 className='display-1'>Software Developer</h1>
                    <p className='info-top-padding roboto-medium'>Team oriented Full Stack Software Developer with hands-on experience in multiple stacks including Python and MERN. </p>
                    <div className='d-flex'>
                    <p className='info-top-padding roboto-thin pt-2'>&#60; Focus on clean code and learning the newest technologies /&#62;</p>
                    <p className='info-top-padding roboto-thin p-4 pt-2'>&#60; Bringing creative approaches to research, analysis, and decision making /&#62; </p>
                    </div>
                    

                </Col>
                <Col md>
                    <Image fluid roundedCircle
                        className="responsive"
                        src="portoflio photo.jpeg"
                        alt="web developer"
                        />
                </Col>
            </Row>
        </motion.div>
            <Row className='info-top-padding text-center'>
                <Col md>
                    <Image fluid
                        className=""
                        src="web-fun.png"
                        alt="web fun photo"
                        />
                </Col>
                <Col md>
                    <Image fluid
                        className=""
                        src="python-flask-mysql-sample.png"
                        alt="python stack photo"
                        />
                </Col>
                <Col md>
                    <Image fluid
                        className=""
                        src="The MERN Stack.jpg"
                        alt="mern stack photo"
                        />
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Home;