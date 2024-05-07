import { React } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import { useState, useEffect } from 'react';


const Home = (props) => {
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

    return (
        <div className= {windowWidth < 640? ('mobile-top-padding'):'top-padding'}>
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
                        {windowWidth < 640 ? (
                        <div className='d-flex'>
                            <p className='roboto-thin pt-2 mobile-font text-center'>&#60; Focus on clean code and learning the newest technologies /&#62;</p>
                            <p className='roboto-thin p-4 pt-2 mobile-font text-center'>&#60; Bringing creative approaches to research, analysis, and decision making /&#62; </p>
                            </div>
                        ):(
                        <div className='d-flex'>
                            <p className='info-top-padding roboto-thin pt-2'>&#60; Focus on clean code and learning the newest technologies /&#62;</p>
                            <p className='info-top-padding roboto-thin p-4 pt-2'>&#60; Bringing creative approaches to research, analysis, and decision making /&#62; </p>
                        </div>)}
                        <motion.button whileHover={{scale: 1.6}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow mb-5" onClick={() => navigate('/about')}>About Me</motion.button>
                    </Col>
                    <Col md>
                        <i class="bi bi-code-slash"></i>
                        <Image fluid roundedCircle
                            className= {windowWidth < 640 ? ("mobile-responsive rounded shadow-lg p-1 mb-1 bg-white") :"responsive rounded shadow-lg p-1 mb-1 bg-white"}
                            src="portoflio photo.jpeg"
                            alt="web developer"
                            />
                        <i class="bi bi-code-slash"></i>
                    </Col>
                </Row>
            

            <hr></hr>
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}>
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
                </motion.div>

                <hr></hr>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}>
                <Row className='mb-5 pb-5 mt-5 pt-5'>
                    <Col lg={8}>
                        <video className='img-fluid video-corners' autoPlay muted loop>
                            <source src="nutrilogvideo720.mp4" type="video/mp4"/>
                        </video>
                    </Col>
                    <Col lg={4}>
                        <h1 className='roboto-regular mb-2'>nutrilog</h1>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; MongoDB / Express.js / Node.js / React.js /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Architected an intuitive single page app with React and implemented responsive design with React-Bootstrap for a consistent user experience across screen sizes /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Developed back-end with Express and MongoDB for their flexible structure and ease of data access /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Implemented a user login and registration using back-end validation, Cookies, and JSON Web Token for secure user experience /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Created RESTful API in order to allow user CRUD operations /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info mb-5'>&#60; Integrated the USDA FoodData Central API to incorporate nutrition data /&#62;</p></motion.div>
                        <div className='d-flex justify-content-start'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Link className='roboto-light display-5' style={{textDecoration:'none', color:'black'}} onClick={() => navigate('//github.com/JaimeQuezadaJr/nutrilog')}><i className="bi bi-github"></i></Link>
                            </motion.div>
                        </div>
                        {/* <motion.button whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow mb-5 mt-5">Learn More</motion.button> */}
                    </Col>
                </Row>
                </motion.div>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}>
                <Row className='pt-5 mt-5 pb-5 mb-5'>
                    <Col lg={4}>
                        <h1 className='roboto-regular mb-2'>TravelMem</h1>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-regular'>&#60; Python / Flask / MySQL /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Employed Flask framework for fast implementation of additional features via Jinja2 template such as user dashboard, varied logic for authorization, and flash messages /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Encrypted user password through the use of Bcrypt and hashing for user security /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Used back end validation to verify user input and keep data consistent for user CRUD operations /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Utilized one-to-many and many-to-many relationships within MySQL to connect all registered users, allowing for liking posts and adding comments /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info'>&#60; Integrated Open Weather API to view up-to-date weather from the travel locations /&#62;</p></motion.div>
                        <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><p className='roboto-light project-info mb-5'>&#60; Implemented Bootstrap for responsive design and styled with HTML5 and CSS for engaging UI components and page layouts /&#62;</p></motion.div>
                        <div className='d-flex justify-content-start'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.0 }}>
                                <Link className='roboto-light display-5' style={{textDecoration:'none', color:'black'}} onClick={() => navigate('//github.com/JaimeQuezadaJr/TravelMem')}><i className="bi bi-github"></i></Link>
                            </motion.div>
                        </div>
                        
                        {/* <motion.button whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow mb-5 mt-5">Learn More</motion.button> */}
                    </Col>
                    <Col lg={8}>
                        <video className='img-fluid video-corners' autoPlay muted loop>
                            <source src="TravelMem New Copy.mp4" type="video/mp4"/>
                        </video>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <TypeAnimation
                        className='display-5 roboto-light'
                        sequence={[
                            'More projects coming soon...', // Types 'One'
                            2000, // Waits 1s
                            '', // Deletes 'One' and types 'Two'
                            2000, // Waits 2s
                            'More projects coming soon...', // Types 'Three' without deleting 'Two'
                            () => {
                            console.log('Sequence completed');
                            },
                        ]}
                        wrapper="span"
                        cursor={true}
                        repeat={Infinity}
                        style={{ display: 'inline-block', fontSize:'1.2rem' }}
                />
                    </Col>
                </Row>
                </motion.div>

                <hr></hr>
                <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once:false }} transition={{duration:3}}>
                    <Row className='mb-5 mt-5 pt-5'>
                        <Col>
                            <h1 className='text-center roboto-light'>Communication</h1>
                            <p className='info-top-padding roboto-thin pt-2 text-center'>&#60; By delivering messages clearly, there is no room for misunderstanding or alteration of messages, which decreases the potential for conflict. In situations where conflict does arise, effective communication is a key factor to ensure that the situation is resolved in a respectful manner. /&#62;</p>
                        </Col>
                        <Col md className='d-flex align-items-center'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Image fluid
                                    className="p-5"
                                    src="Web-Developer-Header.png"
                                    alt="web developer photo"
                                    />
                            </motion.div>
                        </Col>
                        <Col>
                            <h1 className='text-center roboto-light'>Problem Solving</h1>
                            <p className='info-top-padding roboto-thin pt-2 text-center'>&#60; Problem-solving enables us to identify and exploit opportunities in the environment and exert (some level of) control over the future. Problem solving skills and the problem-solving process are a critical part of daily life both as individuals and organizations. /&#62;</p>
                        </Col>
                    </Row>
                </motion.div>   
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

export default Home;