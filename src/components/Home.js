import React from 'react';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';


const Home = (props) => {
  return (
    <div className='top-padding'>
        <Container className='p-5'>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:3}}>
            <Row className='pb-5 mb-5'>
                <Col md>
                <h1 className='display-1'>Software</h1>
                <TypeAnimation
                className='display-1'
                sequence={[
                    'Developer', // Types 'One'
                    2000, // Waits 1s
                    '', // Deletes 'One' and types 'Two'
                    2000, // Waits 2s
                    'Developer', // Types 'Three' without deleting 'Two'
                    () => {
                    console.log('Sequence completed');
                    },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                style={{ display: 'inline-block' }}
            />
                    <p className='info-top-padding roboto-medium'>Team oriented Full Stack Software Developer with hands-on experience in multiple stacks including Python and MERN. </p>
                    <div className='d-flex'>
                        <p className='info-top-padding roboto-thin pt-2'>&#60; Focus on clean code and learning the newest technologies /&#62;</p>
                        <p className='info-top-padding roboto-thin p-4 pt-2'>&#60; Bringing creative approaches to research, analysis, and decision making /&#62; </p>
                    </div>
                    <motion.button whileHover={{scale: 1.6}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow">About Me</motion.button>
                </Col>
                <Col md>
                    <i class="bi bi-code-slash"></i>
                    <Image fluid roundedCircle
                        className="responsive rounded shadow-lg p-1 mb-1 bg-white"
                        src="portoflio photo.jpeg"
                        alt="web developer"
                        />
                    <i class="bi bi-code-slash"></i>
                </Col>
            </Row>
        

        <hr></hr>

            <Row className='info-top-padding text-center pt-5 pb-5 mt-5 mb-5'>
                <Col>
                <h1 className='display-5 roboto-thin'>Developer Skills</h1>
                <p className='info-top-padding roboto-thin pt-2'>&#60; Proven experience using web fundamentals as well as full stack python and MERN development. /&#62;</p>
                <motion.button whileHover={{scale:1.6}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow m-3">My Work</motion.button>
                </Col>
                <Col md className='d-flex align-items-center'>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                        <Image fluid
                            className=""
                            src="web-fun.png"
                            alt="web fun photo"
                            />
                    </motion.div>
                </Col>
                <Col md className='d-flex align-items-center'>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                        <Image fluid
                            className=''
                            src="python-flask-mysql-sample.png"
                            alt="python stack photo"
                            />
                    </motion.div>
                </Col>
                <Col md className='d-flex align-items-center'>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                        <Image fluid
                            className=""
                            src="The MERN Stack.jpg"
                            alt="mern stack photo"
                            />
                    </motion.div>
                </Col>
            </Row>

            <hr></hr>

            <Row className='d-flex justify-content-center mb-5 mt-5 pt-5'>
                <Col className='d-flex justify-content-center' >
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                        <h5 className='roboto-light'><i className="bi bi-envelope"></i> Email</h5>
                    </motion.div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                        <h5 className='roboto-light'><i className="bi bi-linkedin"></i> LinkedIn</h5>
                    </motion.div>
                </Col>
                </Row>
            <Row className='mb-5'>
                <Col className='d-flex justify-content-center'>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                        <h5 className='roboto-light'><i className="bi bi-github"></i> GitHub</h5>
                    </motion.div>
                </Col>
                <Col className='d-flex justify-content-center'>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                        <h5 className='roboto-light'><i className="bi bi-file-earmark-text-fill"></i> Resume</h5>
                    </motion.div>
                </Col>
            </Row>
            </motion.div>
        </Container>
        <footer className='bg-light p-2'>
            <div className='d-flex justify-content-around'>
                <p className='m-0 roboto-light'>Designed & Developed by Jaime Quezada Jr</p>
                <p className='m-0 roboto-light'>Copyright &#169; Jaime Quezada Jr 2024</p>
            </div>
                
        </footer>
    </div>
  )
}

export default Home;