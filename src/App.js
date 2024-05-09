import './App.css';
import { Routes, Route, useLocation} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import NavBar from './components/NavBar';
import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';


function App() {
    const location = useLocation();
    const [currentDarkMode, setCurrentDarkMode] = useState(false)
    const [currentLightMode, setCurrentLightMode] = useState(true)
    return (
        <div>
            <NavBar currentDarkMode={currentDarkMode} setCurrentDarkMode={setCurrentDarkMode} currentLightMode={currentLightMode} setCurrentLightMode={setCurrentLightMode}/>
                <AnimatePresence mode='wait'>
                    <Routes location={location} key={location.pathname}>
                        <Route path={'/'} element={<Home currentDarkMode={currentDarkMode} setCurrentDarkMode={setCurrentDarkMode} currentLightMode={currentLightMode} setCurrentLightMode={setCurrentLightMode}/>}/>
                        <Route path={'/about'} element={<About currentDarkMode={currentDarkMode} setCurrentDarkMode={setCurrentDarkMode} currentLightMode={currentLightMode} setCurrentLightMode={setCurrentLightMode}/>}/>
                    </Routes>
                </AnimatePresence>
      </div>
    );
  }

export default App;
