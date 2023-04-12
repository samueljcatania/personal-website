import {useEffect, useState} from "react";
import {motion, useScroll, useTransform} from "framer-motion";
// Components
import About from "../components/About";

const transition = {duration: 1.4, ease: [0.6, 0.01, 0.05, 0.9]}

const firstName = {
    initial: {
        y: 0,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
            opacity: {
                delay: 0.7,
            },
        },
    },
};

const lastName = {
    initial: {
        y: 0,
        opacity: 0
    },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
            opacity: {
                delay: 0.7,
            },
        },
    },
};

const letter = {
    initial: {
        y: 400
    },
    animate: {
        y: 0,
        transition: {duration: 1, ...transition},
    },
};

function Home({imageSize}) {
    const [windowSize, setWindowSize] = useState([
        window.innerWidth,
        window.innerHeight,
    ]);

    const {scrollYProgress} = useScroll();
    const scale = useTransform(scrollYProgress, [0, 1], [1, 2]);

    const [canScroll, setCanScroll] = useState(false);

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
        <div className=''>
            <div className='flex justify-center items-center h-screen'>
                <div className='mt-56 grid grid-cols-1 flex justify-center'>
                    <center>
                        <motion.div onAnimationComplete={() => setCanScroll(true)}
                                    className='grid flex items-center justify-center'
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
                                            transition: {delay: 1.2, ...transition},
                                        }}>
                                <motion.div className='grid grid-cols-2 h-10'>
                                    <motion.span className=' text-start'>
                                        Western University
                                    </motion.span>
                                    <motion.span className=' text-end'>
                                        London, Canada
                                    </motion.span>
                                </motion.div>
                            </motion.div>
                            <motion.div className='grid grid-cols-2 mb-6' style={{opacity: scale}}>
                                <motion.span className='flex' variants={firstName}>
                                    <motion.span className='text-9xl' variants={letter}>S</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>a</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>m</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>u</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>e</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>l</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>&nbsp;</motion.span>
                                </motion.span>
                                <motion.span className='flex' variants={lastName}>
                                    <motion.span className='text-9xl' variants={letter}>&nbsp;</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>C</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>a</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>t</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>a</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>n</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>i</motion.span>
                                    <motion.span className='text-9xl' variants={letter}>a</motion.span>
                                </motion.span>
                            </motion.div>
                        </motion.div>
                        <motion.div className='flex rounded-lg w-screen overflow-hidden'
                                    style={{
                                        height: windowSize[1] - 200
                                    }}
                                    initial={{
                                        width: imageSize.width,
                                        height: imageSize.height,
                                        y: '-56%',
                                    }}
                                    animate={{
                                        y: 0,
                                        height: windowSize[1] - 200,
                                        width: windowSize[0],
                                        transition: {delay: 0.2, ...transition}
                                    }}>
                            <motion.div whileHover='hover' transition={transition}>
                                <motion.img className='flex object-cover w-full items-center justify-center'
                                            src={require('../images/splash_image3.webp')}
                                            alt='Samuel Catania'
                                            style={{scale: scale}}
                                            initial={{scale: 1.1}}
                                            animate={{
                                                scale: 1.0,
                                                transition: {delay: 0.2, ...transition}
                                            }}/>
                            </motion.div>
                        </motion.div>
                    </center>
                </div>
            </div>
            <About/>
            <About/>
            <About/>
            <About/>
        </div>
    )
}

export default Home;
