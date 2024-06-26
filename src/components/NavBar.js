import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';
import resume from './Resume/Jaime Quezada.pdf'



const NavBar = (props) => {
    const {currentLightMode, setCurrentLightMode} = props
    const {currentDarkMode, setCurrentDarkMode} = props
    const [dark, setDark] = useState(false)
    const [light, setLight] = useState(true)
    const handleDark = ()=> {
            setCurrentDarkMode(true);
            setCurrentLightMode(false)
}
    const handleLight = ()=> {
        setCurrentLightMode(true);
        setCurrentDarkMode(false)
}
    const [show2, setShow2] = useState(false);
    const handleClose2 = () => setShow2(false);
    const handleShow2 = () => setShow2(true);
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
        <>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:3}}>
            {windowWidth < 640 ? (
                <Navbar className={currentDarkMode?('fixed-top bg-dark'):('fixed-top bg-light')} style={{height:'100px'}}>
                    <Container className='p-5'>
                        <Navbar.Brand as={Link} to="/" style={currentDarkMode? {color:'white'}:null} className='roboto-medium'>Jaime Quezada</Navbar.Brand>
                            <Nav className=" justify-contend-end">
                                <Nav.Link style={currentDarkMode? {color:'white'}:{color:'black'}} as={Link}><h1><i className="bi bi-list" onClick={handleShow2}></i></h1></Nav.Link>
                                <Offcanvas placement='end' show={show2} onHide={handleClose2}>
                                    <Offcanvas.Header closeButton>
                                    <Offcanvas.Title></Offcanvas.Title>
                                    </Offcanvas.Header>
                                    <Offcanvas.Body>
                                <Nav className="justify-contend-end roboto-light">
                                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/" show={show2} onClick={handleClose2}><i className="bi bi-house"></i> Home</Nav.Link></motion.div>
                                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/about" show={show2} onClick={handleClose2}><i className="bi bi-file-person"></i> About Me</Nav.Link></motion.div>
                                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link className='pb-5 mb-5' style={{fontSize:'large'}} as={Link} to={resume} target='_blank' rel='noreferrer' show={show2} onClick={handleClose2}><i className="bi bi-file-earmark-text-fill"></i> My Resume</Nav.Link></motion.div>
                                    <Nav.Link className='pt-5 mt-5 pb-0 roboto-thin' style={{fontSize:'large'}} as={Link} to="/contact" show={show2} onClick={handleClose2}>Contact Me</Nav.Link>
                                    <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to={'mailto:jaimequezadajr@gmail.com'} show={show2} onClick={handleClose2}>jaimequezadajr@gmail.com</Nav.Link></motion.div>
                                    </Nav>
                                </Offcanvas.Body>
                                </Offcanvas>
                            </Nav>
                    </Container>
                </Navbar>
            ):(
            <Navbar className={currentDarkMode?('fixed-top bg-dark'):('fixed-top bg-light')} style={{height:'120px'}}>
                <Container className='p-5'>
                    <Navbar.Brand as={Link} to="/" style={currentDarkMode? {fontSize:'x-large', color:'white'}:{fontSize:'x-large'}} className='roboto-medium'>Jaime Quezada</Navbar.Brand>
                        <Nav className=" justify-contend-end">
                            <Nav.Link style={currentDarkMode? {color:'white'}:{color:'black'}} as={Link}><h1><i className="bi bi-list" onClick={handleShow2}></i></h1></Nav.Link>
                            <Offcanvas placement='end' show={show2} onHide={handleClose2}>
                                <Offcanvas.Header closeButton>
                                <Offcanvas.Title></Offcanvas.Title>
                                </Offcanvas.Header>
                                <Offcanvas.Body>
                            <Nav className="justify-contend-end roboto-light">
                                <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/" show={show2} onClick={handleClose2}><i className="bi bi-house"></i> Home</Nav.Link></motion.div>
                                <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/about" show={show2} onClick={handleClose2}><i className="bi bi-file-person"></i> About Me</Nav.Link></motion.div>
                                <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link className='pb-5 mb-5' style={{fontSize:'large'}} as={Link} to={resume} target='_blank' rel='noreferrer' show={show2} onClick={handleClose2}><i className="bi bi-file-earmark-text-fill"></i> My Resume</Nav.Link></motion.div>
                                <Nav.Link className='pt-5 mt-5 pb-0 roboto-thin' style={{fontSize:'large'}} as={Link} to="/contact" show={show2} onClick={handleClose2}>Contact Me</Nav.Link>
                                <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to={'mailto:jaimequezadajr@gmail.com'} show={show2} onClick={handleClose2}>jaimequezadajr@gmail.com</Nav.Link></motion.div>
                                </Nav>
                            </Offcanvas.Body>
                            </Offcanvas>
                        </Nav>
                </Container>
        </Navbar>
            )}
        </motion.div>
        </>
    );
}

export default NavBar;

