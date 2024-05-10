import { React, useState, useEffect  } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { TypeAnimation } from 'react-type-animation';
import resume from './Resume/Jaime Quezada.pdf'


const About = (props) => {
    const {currentLightMode, setCurrentLightMode} = props
    const {currentDarkMode, setCurrentDarkMode} = props
    const [dark, setDark] = useState(false)
    const [light, setLight] = useState(true)
    const handleDark = ()=> {
            setCurrentDarkMode(true);
            setCurrentLightMode(false);
}
    const handleLight = ()=> {
        setCurrentLightMode(true);
        setCurrentDarkMode(false);
}
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
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
        <div className={windowWidth < 640 ? ('mobile-top-padding'):('top-padding')} style={currentDarkMode? {backgroundColor:'black', color:'white'}:null}>
            <Container className='p-5'>
                <motion.div className="progress-bar" style={currentDarkMode? {backgroundColor:'white',  scaleX }:{backgroundColor:'black',scaleX}} />  
                <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:3}}>
                <Row className='d-flex justify-content-end'>
                    <Col className='d-flex justify-content-end'>
                    {currentLightMode?(<motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} className="btn btn-light roboto-light shadow m-0" onClick={handleDark}><Link style={currentDarkMode? {textDecoration:'none', color:'white'}:{textDecoration:'none', color:'black'}}><i className="bi bi-moon"></i></Link></motion.div>):
                    (<motion.div whileHover={{scale: 1.1}} whileTap={{ scale: 0.9 }} type="button" className="btn btn-light roboto-light shadow m-0" onClick={handleLight}><Link style={currentDarkMode? {textDecoration:'none', color:'black'}:{textDecoration:'none', color:'black'}}><i className="bi bi-brightness-high"></i></Link></motion.div>)}
                    </Col>
                </Row>
                    <Row className='pb-5 mb-5'>
                        <Col lg>
                        <h1 className={windowWidth < 640 ? ('display-3 roboto-regular'):('display-1 roboto-regular')}>Who I Am</h1>
                            <p className={windowWidth < 640 ? ('info-top-padding roboto-regular mobile-font'):('info-top-padding roboto-regular')}>Hello, my name is <span className='roboto-bold'>Jaime Quezada</span> a software developer passionate about leveraging technology to create innovative solutions that make a positive impact. With a background in designing and optimizing mechanical systems, I bring a unique perspective to the world of software engineering. Having spent several years in the field of mechanical engineering, I've developed a strong foundation in critical thinking, attention to detail, and analytical reasoning—skills that seamlessly translate into the realm of software development. Motivated by a desire to expand my horizons and explore new avenues of innovation, I've embarked on a journey to transition into software engineering.
                            <p></p> 
                            Through self-study, coding bootcamp, and hands-on projects, I've acquired proficiency in programming languages like Python and Javascript, as well as familiarity with software development tools and methodologies. I recently worked in a fuel cell startup developing Python code to interface with electrical testing equipment and hardware controllers that allowed me to be in an environment where every day was a dynamic journey filled with innovation, collaboration, and problem-solving. 
                            <p></p>
                            I'm excited about the opportunity to apply my engineering mindset and technical expertise to create intuitive software solutions that address real-world challenges. As I make this transition, I'm eager to collaborate with like-minded professionals and contribute my diverse skills to projects that push the boundaries of technological advancement. Let's embark on this transformative journey together!</p>  
                            
                        </Col>
                        <Col lg className=''>
                            <i class="bi bi-code-slash"></i>
                            <Image fluid roundedCircle
                                className={windowWidth < 940 ? ('responsive rounded shadow-lg p-1 mb-1 bg-white'):('rounded shadow-lg p-1 mb-1 bg-white')}
                                src="portoflio photo.jpeg"
                                alt="web developer"
                                />
                            <i class="bi bi-code-slash"></i>
                        </Col>
                    </Row>

                    <hr></hr>
                        <Row>
                            <Col md>
                                <p className={windowWidth < 640 ? ('roboto-light mobile-font'):('roboto-light')}>August 2023 - January 2024</p>
                            </Col>
                            <Col md>
                                <p className={windowWidth < 640 ? ('text-start roboto-medium'):('text-start roboto-medium')}>Jinetics Inc.</p>
                                <p className={windowWidth < 640 ? ('text-start roboto-medium mobile-font'):('text-start roboto-medium mobile-font')}>Controls Software Engineer; Contract</p>
                                <p className={windowWidth < 640 ? ('text-start roboto-light mobile-font'):('text-start roboto-light')}>Collaborated in refactoring complex legacy codebase using OOP in Python resulting in improved code readability and overall software quality.</p>
                                <p className={windowWidth < 640 ? ('text-start roboto-light mobile-font'):('text-start roboto-light')}>Utilized protocols, inheritance, and encapsulation to enhance code maintainability, reduce redundancy and foster modular organized code structures.</p>
                                <p className={windowWidth < 640 ? ('text-start roboto-light mobile-font'):('text-start roboto-light')}>Created unit tests using pytest to execute tests that cover various scenarios, from edge cases to typical user inputs, validating each component's behavior in isolation. </p>
                            </Col> 
                        </Row>


                    <hr></hr>

                    <Row className='d-flex justify-content-center mb-5 mt-5 pt-5 pb-5'>
                        <Col className='d-flex justify-content-center' >
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Link style={currentDarkMode? {textDecoration:'none', color:'white'}:{textDecoration:'none', color:'black'}} to={'mailto:jaimequezadajr@gmail.com'}><h3 className='roboto-light'><i className="bi bi-envelope"></i></h3></Link>
                            </motion.div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Link style={{textDecoration:'none'}} onClick={() => navigate('//www.linkedin.com/in/jaimequezadajr/')}><h3 className='roboto-light'><i className="bi bi-linkedin"></i></h3></Link>
                            </motion.div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                                <Link style={currentDarkMode? {textDecoration:'none', color:'white'}:{textDecoration:'none', color:'black'}} onClick={() => navigate('//github.com/JaimeQuezadaJr')}><h3 className='roboto-light'><i className="bi bi-github"></i></h3></Link>
                            </motion.div>
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}>
                            <Link to={resume} target='_blank' rel='noreferrer' style={currentDarkMode? {textDecoration:'none', color:'white'}:{textDecoration:'none', color:'black'}}><h3 className='roboto-light'><i className="bi bi-file-earmark-text-fill"></i></h3></Link>
                            </motion.div>
                        </Col>
                    </Row>
                </motion.div>
            </Container>
            <footer className={currentDarkMode? ('bg-dark p-2 footer'):('bg-light p-2 footer')}>
                <div className='d-flex justify-content-around'>
                {/* <p className='m-0 roboto-light'>Designed & Developed by Jaime Quezada Jr</p> */}
                    <p className='m-0 roboto-light' style={currentDarkMode? {fontSize:'0.8rem', color:'white'}:{fontSize:'0.8rem', color:'black'}}>Copyright &#169; Jaime Quezada Jr 2024</p>
                </div>
            </footer>
        </div>
  )
}

export default About