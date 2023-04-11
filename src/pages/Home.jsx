import {useEffect, useState} from "react";
import {motion} from "framer-motion";
// Pages
import About from "../components/About";

// Hooks

function Home({imageSize}) {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        const handleWindowResize = () => {
            setWindowSize([window.innerWidth, window.innerHeight]);
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    });

    return (
        <div className='container-fluid g-0 mt-6'>
            <motion.div className='container-fluid px-0'
                        initial='initial'
                        animate='animate'
                        exit='exit'>
                <div className='container'>
                    {/*    <motion.div className='row row-cols-2 text-center'*/}
                    {/*                style={{width: 700}}*/}
                    {/*                initial={{opacity: 1}}>*/}
                    {/*        <div className='col p-0 text-start'>*/}
                    {/*            Web Developer*/}
                    {/*        </div>*/}
                    {/*        <motion.div className='col p-0 text-end'*/}
                    {/*                    initial={{opacity: 1}}>*/}
                    {/*            Student*/}
                    {/*        </motion.div>*/}
                    {/*    </motion.div>*/}
                </div>
                <motion.div className='text-center'
                            initial={{opacity: 1}}>
                    <span className='display-'>S</span>
                    <span className='display-'>a</span>
                    <span className='display-'>m</span>
                    <span className='display-'>u</span>
                    <span className='display-'>e</span>
                    <span className='display-'>l</span>
                    <span className='display-'> </span>
                    <span className='display-'>C</span>
                    <span className='display-'>a</span>
                    <span className='display-'>t</span>
                    <span className='display-'>a</span>
                    <span className='display-'>n</span>
                    <span className='display-'>i</span>
                    <span className='display-'>a</span>
                </motion.div>
            </motion.div>
            <div className='row g-0'>
                <motion.div className='container text-center g-0'
                            style={{
                                height: windowSize[1],
                                width: windowSize[0],
                                overflow: 'hidden',
                            }}>
                    <img className='img-fluid'
                         src={require("../images/splash_image.webp")}
                         alt='Samuel Catania'
                         style={{
                             height: windowSize[0],
                             width: 'auto'
                         }}/>
                </motion.div>
            </div>
            <About/>
        </div>
    )
}

export default Home;
