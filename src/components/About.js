import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';

const About = () => {
    const navigate = useNavigate();
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [windowHeight, setWindowHeight] = useState(window.innerHeight)
    const setWindowDimensions = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    useEffect(() => {
      window.addEventListener('resize', setWindowDimensions);
      return () => {
        window.removeEventListener('resize', setWindowDimensions)
      }
    }, [])
    useEffect(() => {
        window.scrollTo({top:0, left:0, behavior:'instant'})
      },[])
    return (
        <div className={windowWidth < 640 ? ('mobile-top-padding'):('top-padding')}>
            <Container className='p-5'>
                <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:3}}>
                    <Row className='pb-5 mb-5'>
                        <Col md>
                        <h1 className='display-1 roboto-regular'>Who I Am</h1>
                            <p className='info-top-padding roboto-regular'>Hello, my name is <span className='roboto-bold'>Jaime Quezada</span> an aspiring software developer passionate about leveraging technology to create innovative solutions that make a positive impact. With a background in designing and optimizing mechanical systems, I bring a unique perspective to the world of software engineering. Having spent several years in the field of mechanical engineering, I've developed a strong foundation in critical thinking, attention to detail, and analytical reasoning—skills that seamlessly translate into the realm of software development. Motivated by a desire to expand my horizons and explore new avenues of innovation, I've embarked on a journey to transition into software engineering. <p></p>Through self-study, coding bootcamp, and hands-on projects, I've acquired proficiency in programming languages like Python and Javascript, as well as familiarity with software development tools and methodologies. I'm excited about the opportunity to apply my engineering mindset and technical expertise to create intuitive software solutions that address real-world challenges. As I make this transition, I'm eager to collaborate with like-minded professionals and contribute my diverse skills to projects that push the boundaries of technological advancement. Let's embark on this transformative journey together! </p>
                            
                        </Col>
                        <Col md className=''>
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
            <footer className= {windowWidth < 640 ? ('bg-light p-2'):('bg-light p-2')}>
                <div className='d-flex justify-content-around'>
                {/* <p className='m-0 roboto-light'>Designed & Developed by Jaime Quezada Jr</p> */}
                    <p className='m-0 roboto-light' style={{fontSize:'0.8rem'}}>Copyright &#169; Jaime Quezada Jr 2024</p>
                </div>
            </footer>
        </div>
  )
}

export default About