import {useState} from "react";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
// Pages
import Splash from "./pages/Splash"
import Home from "./pages/Home";
import ThankYou from "./pages/ThankYou";
import NotFound from "./pages/NotFound";
// Styles
import './App.css';

function App() {
    const location = useLocation();
    const [imageSize] = useState({height: 350, width: 550});

    return (
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Splash imageSize={imageSize}/>}/>
                <Route path='/home' element={<Home imageSize={imageSize}/>}/>
                <Route path='/thank-you' element={<ThankYou/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
