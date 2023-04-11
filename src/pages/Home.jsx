import {motion} from "framer-motion";
// Pages
import About from "../components/About";

function Home() {
    return (
        <motion.div className='m-md-6 container-fluid px-0'
                    initial='initial'
                    animate='animate'
                    exit='exit'>
            <div className='container'>
                <motion.div className='row row-cols-2 m-4'
                            initial={{opacity: 0}}>
                    <div className='col p-0 text-start'>
                        Web Developer
                    </div>
                    <motion.div className='col p-0 text-end'
                                initial={{opacity: 0}}>
                        Student
                    </motion.div>
                </motion.div>
                <motion.div className='text-center'
                            initial={{opacity: 0}}>
                    <span className='display-'>S</span>
                    <span className='display-'>a</span>
                    <span className='display-'>m</span>
                    <span className='display-'>u</span>
                    <span className='display-'>e</span>
                    <span className='display-'>l</span>
                    <span className='display-'>C</span>
                    <span className='display-'>a</span>
                    <span className='display-'>t</span>
                    <span className='display-'>a</span>
                    <span className='display-'>n</span>
                    <span className='display-'>i</span>
                    <span className='display-'>a</span>
                </motion.div>
            </div>
            <div className='row g-0'>
                <div className='container text-center'>
                    <img className='img-fluid w-50 rounded-3'
                         src={require("../images/splash_image.webp")}
                         alt='Samuel Catania'/>
                </div>
            </div>
            <About/>
        </motion.div>
    )
}

export default Home;
