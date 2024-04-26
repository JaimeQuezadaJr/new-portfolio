import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { motion } from 'framer-motion';


const NavBar = () => {
    const [show, setShow] = useState(false);
    const [show1, setShow1] = useState(false);
    const [show2, setShow2] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleClose1 = () => setShow1(false);
    const handleShow1 = () => setShow1(true);
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
        <motion.div initial={{ opacity: 0 }} animate={{ opacity:1 }} exit={{ opacity: 0}} transition={{duration:1}}>
        <Navbar bg="light" variant='light' className='fixed-top'>
            <Container>
            <Navbar.Brand as={Link} to="/" style={{fontSize:'x-large'}}>Jaime Quezada Jr</Navbar.Brand>
                    {windowWidth<640?(
                    <Nav className=" justify-contend-end">
                        <Nav.Link as={Link}><h1><i className="bi bi-list" onClick={handleShow2}></i></h1></Nav.Link>
                        <Offcanvas placement='end' show={show2} onHide={handleClose2}>
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title>Info</Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                        <Nav className=" justify-contend-end">
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/about" show={show2} onClick={handleClose2}>About</Nav.Link></motion.div>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/projects" show={show2} onClick={handleClose2}>Projects</Nav.Link></motion.div>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/contact" show={show2} onClick={handleClose2}>Contact</Nav.Link></motion.div>
                            </Nav>
                        </Offcanvas.Body>
                        </Offcanvas>
                    </Nav>
                    ):(
                    <Nav className=" justify-contend-end">
                        <Nav.Link style={{fontSize:'medium'}} as={Link} to="/productinfo" className='d-flex align-items-center'>About</Nav.Link>
                        <Nav.Link style={{fontSize:'medium'}}  as={Link} to="/login"className='d-flex align-items-center'>Projects</Nav.Link>
                        <Nav.Link style={{fontSize:'medium'}} as={Link} to="/login" className='d-flex align-items-center'>Contact</Nav.Link>
                    </Nav>
                    )}
                    
            </Container>
        </Navbar>
        </motion.div>
        </>
    );
}

export default NavBar;