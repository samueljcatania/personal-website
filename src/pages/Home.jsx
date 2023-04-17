import {useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
// Components
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
// Data
import {firstName, lastName, letter} from "../data/variantData"
import {homeTransition} from "../data/transitionData"

export const setPageLoaded = () => {
    const storage = window.sessionStorage;
    storage.setItem('hasPageLoaded', true);
};


const getPageLoaded = () => {
    const storage = window.sessionStorage;
    return JSON.parse(storage.getItem('hasPageLoaded') || false);
};


function Home({imageSize}) {
    const titleFirstName = ['S', 'a', 'm', 'u', 'e', 'l']
    const titleLastName = ['C', 'a', 't', 'a', 'n', 'i', 'a']
    const [canScroll, setCanScroll] = useState(false);
    const [isReloading, setIsReloading] = useState(false);
    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    useEffect(() => {
        window.onbeforeunload = function () {
            setIsReloading(true)
        };
    }, []);

    useEffect(() => {
        if (canScroll === false) {
            document.querySelector("body").classList.add('overflow-y-hidden');
        } else {
            document.querySelector("body").classList.remove('overflow-y-hidden');
        }
    }, [canScroll]);

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
        !isReloading && <div>
            <div className='flex justify-center items-center h-screen mb-20'>
                <div className='mt-20 grid grid-cols-1 place-items-center'>
                    <motion.div className='grid items-center justify-center'
                                onAnimationComplete={() => {
                                    setCanScroll(true);
                                }}
                                initial='initial'
                                animate='animate'
                                exit='exit'>
                        <motion.div className='container h-10'
                                    initial={{
                                        opacity: 0,
                                        y: 20
                                    }}
                                    animate={{
                                        opacity: 1,
                                        y: 0,
                                        transition: {delay: 1.2, ...homeTransition},
                                    }}>
                            <motion.div className='grid grid-cols-2 h-10'>
                                <motion.span className='text-start font-nunito'>
                                    Western University
                                </motion.span>
                                <motion.span className='text-end font-nunito'>
                                    London, Ontario
                                </motion.span>
                            </motion.div>
                        </motion.div>
                        <motion.div className='grid grid-cols-2 mb-8 gap-10' style={{opacity: scale}}>
                            <motion.span className='flex' variants={firstName}>
                                {titleFirstName.map((titleLetter, id) => (
                                    <motion.span key={id}
                                                 className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl::text-10xl font-hahmlet'
                                                 variants={letter}>{titleLetter}</motion.span>
                                ))}
                            </motion.span>
                            <motion.span className='flex' variants={lastName}>
                                {titleLastName.map((titleLetter, id) => (
                                    <motion.span key={id}
                                                 className='text-5xl sm:text-6xl md:text-7xl lg:text-9xl xl::text-10xl font-hahmlet'
                                                 variants={letter}>{titleLetter}</motion.span>
                                ))}
                            </motion.span>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='flex justify-center overflow-hidden w-3/4 md:w-[500px] md:h-[318px]'
                        id='imageContainer'
                        onAnimationStart={() => {
                            const element = document.getElementById('imageContainer')
                            element.classList.add('rounded-lg')
                        }}
                        onAnimationComplete={() => {
                            const element = document.getElementById('imageContainer')
                            element.classList.remove('rounded-lg')
                        }}
                        initial={{
                            y: '-50%',
                            marginBottom: 3,
                        }}
                        animate={{
                            y: 0,
                            height: windowSize[1] - 200,
                            width: windowSize[0],
                            transition: {delay: 0.35, ...homeTransition}
                        }}>
                        <motion.div transition={homeTransition}>
                            <motion.img
                                className='flex object-cover items-center justify-center object-top w-3/4 md:w-[500px]'
                                src={require('../assets/splash_image3.webp')}
                                alt='Samuel Catania'
                                // style={{scale: scale}}
                                initial={{scale: 1.1, height: '100%'}}
                                animate={{
                                    scale: 1.0,
                                    width: windowSize[0],
                                    height: windowSize[1] - 200,
                                    transition: {delay: 0.35, ...homeTransition}
                                }}
                            />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
            {canScroll &&
                <div>
                    <Navbar/>
                    <About/>
                    <Skills/>
                    <Projects/>
                    <Contact/>
                </div>
            }
        </div>
    )
}

export default Home;
