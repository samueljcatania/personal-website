import {useEffect, useRef, useState} from "react";
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
import useWindowSize from "../hooks/useWindowSize";


function Home() {
    const refs = {about: useRef(null), skills: useRef(null), projects: useRef(null), contact: useRef(null)}
    const titleFirstName = ['S', 'a', 'm', 'u', 'e', 'l']
    const titleLastName = ['C', 'a', 't', 'a', 'n', 'i', 'a']
    const [canScroll, setCanScroll] = useState(false);
    const [isReloading, setIsReloading] = useState(false);
    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);
    const windowSize = useWindowSize()

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

    return (
        !isReloading && <div>
            <div className='grid grid-cols-1 w-screen h-screen justify-items-center overflow-hidden'>
                <motion.div className='grid justify-items-center h-[100px] md:h-[200px] mt-10'
                            onAnimationComplete={() => {
                                setCanScroll(true);
                            }}
                            initial='initial'
                            animate='animate'
                            exit='exit'>
                    <motion.div className='container h-auto'
                                key='homeTitleHeadings'
                                initial={{
                                    opacity: 0,
                                    y: 20
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    transition: {delay: 1.2, ...homeTransition},
                                }}>
                        <motion.div className='grid grid-cols-2 h-auto text-xs sm:text-base font-nunito'>
                            <motion.span className='text-start'>
                                Western University
                            </motion.span>
                            <motion.span className='text-end'>
                                London, Ontario
                            </motion.span>
                        </motion.div>
                    </motion.div>
                    <motion.div
                        className='grid grid-cols-2 gap-4 md:gap-10 text-4xl sm:text-6xl
                            md:text-7xl lg:text-8xl xl:text-9xl font-hahmlet h-auto'
                        style={{opacity: scale}}>
                        <motion.span className='flex' variants={firstName}>
                            {titleFirstName.map((titleLetter, id) => (
                                <motion.span key={id} variants={letter}>
                                    {titleLetter}
                                </motion.span>
                            ))}
                        </motion.span>
                        <motion.span className='flex' variants={lastName}>
                            {titleLastName.map((titleLetter, id) => (
                                <motion.span key={id} variants={letter}>
                                    {titleLetter}
                                </motion.span>
                            ))}
                        </motion.span>
                    </motion.div>
                </motion.div>
                <motion.div
                    className='flex justify-center overflow-hidden w-3/4 md:w-[500px] md:h-[318px]'
                    key='homeImageContainer'
                    id='homeImageContainer'
                    onAnimationStart={() => {
                        const element = document.getElementById('homeImageContainer')
                        element.classList.add('rounded-lg')
                    }}
                    onAnimationComplete={() => {
                        const element = document.getElementById('homeImageContainer')
                        element.classList.remove('rounded-lg')
                    }}
                    initial={{
                        y: windowSize[0] < 768 ? '-69%' : '-44%',
                        marginBottom: windowSize[0] < 768 ? 2 : 1,
                    }}
                    animate={{
                        y: 0,
                        width: windowSize[0],
                        height: windowSize[0] < 768 ? windowSize[1] - 140 : windowSize[1] - 240,
                        transition: {delay: 0.35, ...homeTransition}
                    }}
                >
                    <motion.div className='flex justify-center' transition={homeTransition}>
                        <motion.img
                            className='flex object-cover items-center justify-center object-top md:w-[500px]'
                            key='homeImage'
                            src={require('../assets/splash/splash_image3.webp')}
                            alt='Samuel Catania'
                            initial={{
                                scale: windowSize[0] < 768 ? 1 : 1.1,
                                height: '100%',
                            }}
                            animate={{
                                scale: 1.0,
                                width: windowSize[0],
                                height: windowSize[0] < 768 ? windowSize[1] - 140 : windowSize[1] - 240,
                                transition: {delay: 0.35, ...homeTransition}
                            }}/>
                    </motion.div>
                </motion.div>
            </div>
            {canScroll &&
                <div className='relative z-10'>
                    <Navbar refs={refs}/>
                    <div className='scroll-mt-32' ref={refs.about}>
                        <About/>
                    </div>
                    <div className='scroll-mt-32' ref={refs.skills}>
                        <Skills/>
                    </div>
                    <div className='scroll-mt-32' ref={refs.projects}>
                        <Projects/>
                    </div>
                    <div className='scroll-mt-32' ref={refs.contact}>
                        <Contact/>
                    </div>
                </div>
            }
        </div>
    )
}

export default Home;
