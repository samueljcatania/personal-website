import {Route, Routes} from "react-router-dom";
// Pages
import Splash from "./pages/Splash"
import Home from "./pages/Home";
// Styles
import './App.scss';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Splash/>}/>
            <Route path='/home' element={<Home/>}/>
        </Routes>
    );
}

export default App;
