import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
// Pages
import Splash from "./pages/Splash"
import Home from "./pages/Home";
// Styles
import './App.scss';
import {useState} from "react";

function App() {
    const location = useLocation();
    const [imageSize] = useState({height: 350, width: 550});

    return (
        <AnimatePresence initial={false} mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Splash imageSize={imageSize}/>}/>
                <Route path='/home' element={<Home imageSize={imageSize}/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
