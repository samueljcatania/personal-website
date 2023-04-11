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
    const [imageWidth] = useState(550);

    return (
        //initial={false}
        <AnimatePresence mode='wait'>
            <Routes location={location} key={location.pathname}>
                <Route path='/' element={<Splash imageWidth={imageWidth}/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </AnimatePresence>
    );
}

export default App;
