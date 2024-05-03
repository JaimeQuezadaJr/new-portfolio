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
                    <motion.button whileHover={{scale: 1.6}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow mb-5">About Me</motion.button>
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
                <h1 className='display-5 roboto-thin'>Developer</h1>
                <TypeAnimation
                    className='display-5 roboto-thin'
                    sequence={[
                        'Skillset', // Types 'One'
                        2000, // Waits 1s
                        '', // Deletes 'One' and types 'Two'
                        2000, // Waits 2s
                        'Skillset', // Types 'Three' without deleting 'Two'
                        () => {
                        console.log('Sequence completed');
                        },
                    ]}
                    wrapper="span"
                    cursor={true}
                    repeat={Infinity}
                    style={{ display: 'inline-block' }}
            />
                
                <p className='info-top-padding roboto-thin pt-2'>&#60; Proven experience using web fundamentals as well as full stack python and MERN development. /&#62;</p>
                <motion.button whileHover={{scale:1.6}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow m-3">My Resume</motion.button>
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
            <Row className='mb-5 pb-5 mt-5 pt-5'>
                <Col lg={8}>
                    <video className='img-fluid video-corners' autoPlay muted loop>
                        <source src="nutrilogvideo720.mp4" type="video/mp4"/>
                    </video>
                </Col>
                <Col lg={4}>
                    <h1 className='roboto-regular mb-5'>nutrilog</h1>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; MongoDB / Express.js / Node.js / React.js /&#62;</p></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; Created RESTful API in order to allow user CRUD operations /&#62;</p></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; Integrated the USDA FoodData Central API to incorporate nutrition data /&#62;</p></motion.div>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow mb-5">Learn More</motion.button>
                </Col>
            </Row>
            <Row className='pt-5 mt-5 pb-5 mb-5'>
                <Col lg={4}>
                    <h1 className='roboto-regular mb-5'>TravelMem</h1>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; Python / Flask / MySQL /&#62;</p></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; Used back end validation to verify user input and keep data consistent for user CRUD operations /&#62;</p></motion.div>
                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; Utilized one-to-many and many-to-many relationships within MySQL to connect all registered users, allowing for liking posts and adding comments /&#62;</p></motion.div>
                    <motion.button whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow mb-5">Learn More</motion.button>
                </Col>
                <Col lg={8}>
                    <video className='img-fluid video-corners' autoPlay muted loop>
                        <source src="TravelMem New Copy.mp4" type="video/mp4"/>
                    </video>
                </Col>
            </Row>
            <hr></hr>
                <Row className='mb-5 mt-5 pt-5'>
                    <Col>
                        <h1 className='text-center roboto-light'>Design</h1>
                        <p className='info-top-padding roboto-thin pt-2 text-center'>&#60; Focus on clean code and learning the newest technologies /&#62;</p>
                    </Col>
                    <Col md className='d-flex align-items-center'>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                            <Image fluid
                                className=""
                                src="Web-Developer-Header.png"
                                alt="web developer photo"
                                />
                        </motion.div>
                    </Col>
                    <Col>
                        <h1 className='text-center roboto-light'>Development</h1>
                        <p className='info-top-padding roboto-thin pt-2 text-center'>&#60; Focus on clean code and learning the newest technologies /&#62;</p>
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
                {/* <p className='m-0 roboto-light'>Designed & Developed by Jaime Quezada Jr</p> */}
                <p className='m-0 roboto-light'>Copyright &#169; Jaime Quezada Jr 2024</p>
            </div>
                
        </footer>
    </div>
  )
}

export default Home;