import React from 'react';
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';

const About = () => {
    const navigate = useNavigate();
    useEffect(() => {
        window.scrollTo({top:0, left:0, behavior:'instant'})
      },[])
    return (
        <div className='top-padding'>
            <Container className='p-5'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:3}}>
                    <Row className='pb-5 mb-5'>
                        <Col md>
                        <h1 className='display-1 roboto-regular'>Who I Am</h1>
                            <p className='info-top-padding roboto-regular'>Hello, my name is <span className='roboto-bold'>Jaime Quezada Jr</span>. Learning has always been a core part of who I am. The world is constantly changing and gaining new knowledge is key in order to keep moving forward. From my first "Hello World" program in college I have always had a desire to learn how to code and in 2022 I finally made the effort to fully submerge myself into the developer journey. 
                            <p></p>Joining the Coding Dojo program has taught me many industry relevant skills. I have been able to transfer many of my mechanical engineering skills such as learning abilities, communication and analytical thinking. I am a team oriented Full Stack Software Developer with hands-on experience in multiple stacks including Python and MERN along with their respective frameworks. Currently seeking to contribute to an innovative team that promotes advancement opportunities for a results-driven developer. </p>
                            
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

                    <Row className='d-flex justify-content-center mb-5 mt-5 pt-5 pb-5'>
                        <Col className='d-flex justify-content-center' >
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Link style={{textDecoration:'none', color:'black'}} to={'mailto:jaimequezadajr@gmail.com'}><h3 className='roboto-light'><i className="bi bi-envelope"></i></h3></Link>
                            </motion.div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Link style={{textDecoration:'none'}} onClick={() => navigate('//www.linkedin.com/in/jaimequezadajr/')}><h3 className='roboto-light'><i className="bi bi-linkedin"></i></h3></Link>
                            </motion.div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Link style={{textDecoration:'none', color:'black'}} onClick={() => navigate('//github.com/JaimeQuezadaJr')}><h3 className='roboto-light'><i className="bi bi-github"></i></h3></Link>
                            </motion.div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <h3 className='roboto-light'><i className="bi bi-file-earmark-text-fill"></i></h3>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
            <footer className='bg-light p-2'>
                <div className='d-flex justify-content-around'>
                {/* <p className='m-0 roboto-light'>Designed & Developed by Jaime Quezada Jr</p> */}
                    <p className='m-0 roboto-light' style={{fontSize:'0.8rem'}}>Copyright &#169; Jaime Quezada Jr 2024</p>
                </div>
            </footer>
        </div>
  )
}

export default About