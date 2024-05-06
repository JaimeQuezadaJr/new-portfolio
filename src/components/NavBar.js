import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { motion } from 'framer-motion';



const NavBar = () => {
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
        <Navbar className='fixed-top bg-light' style={{height:'160px'}}>
            <Container>
            <Navbar.Brand as={Link} to="/" style={{fontSize:'x-large'}} className='roboto-black'>Jaime Quezada Jr</Navbar.Brand>
                    <Nav className=" justify-contend-end">
                        <Nav.Link as={Link}><h1><i className="bi bi-list" onClick={handleShow2}></i></h1></Nav.Link>
                        <Offcanvas placement='end' show={show2} onHide={handleClose2}>
                            <Offcanvas.Header closeButton>
                            <Offcanvas.Title></Offcanvas.Title>
                            </Offcanvas.Header>
                            <Offcanvas.Body>
                        <Nav className="justify-contend-end roboto-light">
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/" show={show2} onClick={handleClose2}><i className="bi bi-house"></i> Home</Nav.Link></motion.div>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to="/about" show={show2} onClick={handleClose2}><i className="bi bi-file-person"></i> About Me</Nav.Link></motion.div>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link className='pb-5 mb-5' style={{fontSize:'large'}} as={Link} to="/projects" show={show2} onClick={handleClose2}><i className="bi bi-file-earmark-text-fill"></i> My Resume</Nav.Link></motion.div>
                            <Nav.Link className='pt-5 mt-5 pb-0 roboto-thin' style={{fontSize:'large'}} as={Link} to="/contact" show={show2} onClick={handleClose2}>Contact Me</Nav.Link>
                            <motion.div whileHover={{scale:0.9}} whileTap={{ scale: 1.1 }}><Nav.Link style={{fontSize:'large'}} as={Link} to={'mailto:jaimequezadajr@gmail.com'} show={show2} onClick={handleClose2}>jaimequezadajr@gmail.com</Nav.Link></motion.div>
                            </Nav>
                        </Offcanvas.Body>
                        </Offcanvas>
                    </Nav>
            </Container>
        </Navbar>
        </motion.div>
        <footer className='bg-light p-2 fixed-bottom'>
                <div className='d-flex justify-content-around'>
                    {/* <p className='m-0 roboto-light'>Designed & Developed by Jaime Quezada Jr</p> */}
                    <p className='m-0 roboto-light' style={{fontSize:'0.8rem'}}>Copyright &#169; Jaime Quezada Jr 2024</p>
                </div>
                    
        </footer>
        </>
    );
}

export default NavBar;

{/* <Container fluid>
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
            <Nav.Link style={{fontSize:'medium'}} as={Link} to="/about" className='d-flex align-items-center'>About</Nav.Link>
            <Nav.Link style={{fontSize:'medium'}}  as={Link} to="/projects"className='d-flex align-items-center'>Projects</Nav.Link>
            <Nav.Link style={{fontSize:'medium'}} as={Link} to="/contact" className='d-flex align-items-center'>Contact</Nav.Link>
        </Nav>
        )}
        
</Container> */}