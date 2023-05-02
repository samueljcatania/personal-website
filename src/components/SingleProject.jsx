import {useRef} from "react";
import {motion, useInView} from "framer-motion";
// Hooks
import useWindowSize from "../hooks/useWindowSize";
// Data
import {splashTransition} from "../data/transitionData";

function SingleProject({projectInfo, id}) {
    const windowSize = useWindowSize()
    const ref = useRef(null);
    const isInView = useInView(ref, {
        once: true, margin: '0px 300px -15% 300px'
    })

    return (
        <motion.div className='grid grid-cols-1 lg:grid-cols-2 lg:gap-4 z-10'
                    ref={ref}
                    style={{
                        transform: isInView ? 'none' : (id % 2 === 0 ? (windowSize[0] < 1280 ? 'translateX(-15%)' : 'translateX(-300px)') : (windowSize[0] < 1280 ? 'translateX(15%)' : 'translateX(300px)')),
                        opacity: isInView ? 1 : 0,
                        transition: 'all 1s cubic-bezier(0.17, 0.55, 0.55, 1)'
                    }}>
            {id % 2 !== 0 && windowSize[0] >= 1024 &&
                <div className='text-start md:pr-24 justify-self-end ml-8 md:ml-24 min-[1900px]:ml-44'>
                    <h3 className={'font-bold font-nunito text-3xl md:text-4xl xl:text-5xl mb-1 ' +
                        'dark:text-dark-theme-text ' + projectInfo.margins}>
                        {projectInfo.name}
                    </h3>
                    <p className='font-nunito text-lg xl:text-xl dark:text-dark-theme-text mb-12'>
                        {projectInfo.description}
                    </p>
                    <a className='bg-black hover:bg-opacity-75 text-white text-lg font-bold py-4 px-6 rounded dark:bg-white
                             dark:text-black dark:hover:bg-opacity-75 duration-200 dark:duration-200'
                       href={projectInfo.github}
                       target='_blank'
                       rel='noopener noreferrer'>
                        GitHub
                    </a>
                </div>
            }
            <motion.div
                className={'aspect-[8/6] min-[1024px]:aspect-[8/10] ' +
                    'min-[1200px]:aspect-[9/10] min-[1400px]:aspect-[10/9] min-[1600px]:aspect-[4/3] ' +
                    'min-[2100px]:aspect-video relative z-0 bg-[#64574D] dark:bg-[#8c8076] '
                    + (id % 2 !== 0 ?
                        'rounded-3xl lg:rounded-l-3xl lg:rounded-r-none mx-8 sm:mx-12 md:mx-24 lg:ml-12 lg:mx-0'
                        : 'rounded-3xl lg:rounded-r-3xl lg:rounded-l-none mx-8 sm:mx-12 md:mx-24 lg:mr-12 lg:mx-0')}
                whileHover={{
                    scale: 1.05,
                    x: id % 2 !== 0 ? -(windowSize[0] * 0.01) : (windowSize[0] * 0.01)
                }}
                transition={splashTransition}>
                <a href={projectInfo.github}
                   target='_blank'
                   rel='noopener noreferrer'>
                    <img className={'h-5/6 xl:h-3/4 w-11/12 object-cover absolute '
                        + (id % 2 !== 0 ?
                            'rounded-3xl lg:rounded-l-3xl lg:rounded-r-none right-1/2 lg:right-0 top-1/2 transform -translate-y-1/2 ' +
                            'translate-x-1/2 lg:translate-x-0'
                            : 'rounded-3xl lg:rounded-r-3xl lg:rounded-l-none left-1/2 lg:left-0 top-1/2 transform -translate-y-1/2 ' +
                            '-translate-x-1/2 lg:translate-x-0')}
                         src={require('../assets/projects/' + projectInfo.image)}
                         alt={projectInfo.name}/>
                </a>
            </motion.div>
            {(id % 2 === 0 || windowSize[0] < 1024) &&
                <div
                    className='text-start lg:pl-12 z-10 mx-8 sm:mx-12 md:mx-24 lg:mr-8 min-[1900px]:mr-44 min-[1900px]:mx-8'>
                    <h3 className={'font-bold font-nunito text-3xl md:text-4xl xl:text-5xl mb-1 ' +
                        'dark:text-dark-theme-text ' + projectInfo.margins}>
                        {projectInfo.name}
                    </h3>
                    <p className='font-nunito text-lg xl:text-xl dark:text-dark-theme-text mb-12'>
                        {projectInfo.description}
                    </p>
                    <a className='bg-black hover:bg-opacity-75 text-white text-lg font-bold py-4 px-6 rounded dark:bg-white
                             dark:text-black dark:hover:bg-opacity-75 duration-200 dark:duration-200'
                       href={projectInfo.github}
                       target='_blank'
                       rel='noopener noreferrer'>
                        GitHub
                    </a>
                </div>
            }
        </motion.div>
    )
}

export default SingleProject;
