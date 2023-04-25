import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {splashTransition} from "../data/transitionData";

function SingleProject({projectInfo, id}) {
    return (
        <div className='grid grid-cols-2 gap-10 z-10'>
            {id % 2 !== 0 &&
                <div className='text-start pr-12'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text mt-24'>
                        {projectInfo.name}
                    </h3>
                    <p className='font-nunito text-xl dark:text-dark-theme-text'>
                        {projectInfo.description}
                    </p>
                </div>
            }
            <motion.div
                className={'sm:h-[600px] relative bg-blue-100 z-0 '
                    + (id % 2 !== 0 ? ' rounded-l-3xl' : ' rounded-r-3xl')}
                whileHover={{scale: 1.05}}
                transition={splashTransition}>
                <Link to='/projects'>
                    <img className={'h-3/4 w-11/12 object-cover absolute '
                        + (id % 2 !== 0 ?
                            'rounded-l-3xl right-0 top-1/2 transform -translate-y-1/2'
                            : 'rounded-r-3xl left-0 top-1/2 transform -translate-y-1/2')}
                         src={require('../assets/splash/splash_3000x1907.webp')}
                         alt={projectInfo.name}/>
                </Link>
            </motion.div>
            {id % 2 === 0 &&
                <div className='text-start pl-12 z-10'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text mt-24'>
                        {projectInfo.name}
                    </h3>
                    <p className='font-nunito text-xl dark:text-dark-theme-text'>
                        {projectInfo.description}
                    </p>
                </div>
            }
        </div>
    )
}

export default SingleProject;
