import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { AnimatePresence } from 'framer-motion';


function App() {
    const location = useLocation();
    return (
        <div>
            <NavBar/>
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path={'/'} element={<Home/>}/>
                        <Route path={'/about'} element={<About/>}/>
                    </Routes>
                </AnimatePresence>
      </div>
    );
  }

export default App;
