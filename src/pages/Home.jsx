import {useEffect, useState} from "react";
import {motion} from "framer-motion";
// Pages
import About from "../components/About";

const transition = {duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9]}

const firstName = {
    initial: {
        margin: 0,
        opacity: 0
    },
    animate: {
        margin: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: -1,
            transition: {delay: 1.2, ...transition},
            opacity: {
                delay: 0.8,
            },
        },
    },
};

const lastName = {
    initial: {
        margin: 0,
        opacity: 0

    },
    animate: {
        margin: 0,
        opacity: 1,
        transition: {
            delayChildren: 0.6,
            staggerChildren: 0.04,
            staggerDirection: 1,
            opacity: {
                delay: 0.8,
            },
        },
    },
};

const letter = {
    initial: {
        position: 'absolute',
        marginTop: 300,
    },
    animate: {
        marginTop: 0,
        transition: {
            duration: 1, ...transition
        },

    },
};

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
        <div className='container-fluid g-0 mt-3 ' style={{}}>
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
                <motion.div className='text-center'>
                    <motion.span className='container' variants={firstName}>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: -400 - 23
                                     }}>S
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: -320 - 23
                                     }}>a
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: -252 - 23
                                     }}>m
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: -152 - 23
                                     }}>u
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: -85 - 23
                                     }}>e
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: -18 - 23
                                     }}>l
                        </motion.span>
                    </motion.span>
                    <motion.span className='display-'></motion.span>
                    <motion.span variants={lastName}>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: 20 - 23
                                     }}>C
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: 109 - 23
                                     }}>a
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: 183 - 23
                                     }}>t
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: 220 - 23
                                     }}>a
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: 290 - 23
                                     }}>n
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: 352 - 23
                                     }}>i
                        </motion.span>
                        <motion.span className='display-' variants={letter}
                                     style={{
                                         marginLeft: 375 - 23
                                     }}>a
                        </motion.span>
                    </motion.span>
                </motion.div>
            </motion.div>
            <motion.div className='container-fluid text-center g-0 rounded-3'
                        style={{
                            height: windowSize[1] - 260,
                            overflow: 'hidden',
                        }}
                        initial={{
                            marginTop: ((windowSize[1] - 576 - imageSize.height) / 2),
                            width: imageSize.width,
                            height: imageSize.height,
                        }}
                        animate={{
                            width: windowSize[0],
                            height: windowSize[1] - 260,
                            marginTop: (windowSize[1] - 1000),
                            transition: {delay: 0.4, ...transition}
                        }}>
                <motion.img className='img-fluid'
                            src={require('../images/splash_image3.webp')}
                            alt='Samuel Catania'
                            initial={{scale: 1.1}}
                            animate={{
                                transition: {delay: 0, ...transition}
                            }}/>
            </motion.div>
        </div>
    )
}

export default Home;
