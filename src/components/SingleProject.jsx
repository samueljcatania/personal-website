import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {splashTransition} from "../data/transitionData";

function SingleProject({projectInfo, id}) {
    return (
        <div className='grid grid-cols-12 gap-10'>
            {id % 2 !== 0 &&
                <div className='col-span-4 col-start-3 text-end pr-16'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                        {projectInfo.name}
                    </h3>
                    <p className='font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                        {projectInfo.description}
                    </p>
                </div>
            }
            <motion.div
                className={'h-[600px] rounded-xl overflow-hidden col-span-5 border-y-[100px] ' + (id % 2 !== 0 ? 'col-end-12 border-l-[150px]' : 'col-start-2 border-r-[150px]')}
                whileHover={{scale: 1.05}}
                transition={splashTransition}>
                <Link to='/projects'>
                    <img className={'' + (id % 2 !== 0 ? 'rounded-l-xl' : 'rounded-r-xl')}
                        src={require('../assets/splash/splash_3000x1907.webp')}
                         alt={projectInfo.name}/>
                </Link>
            </motion.div>
            {id % 2 === 0 &&
                <div className='col-span-3 col-start-7 text-start pl-16'>
                    <h3 className='font-bold font-nunito text-4xl md:text-5xl mb-1 dark:text-dark-theme-text'>
                        {projectInfo.name}
                    </h3>
                    <p className='font-nunito dark:text-dark-theme-text'>
                        {projectInfo.description}
                    </p>
                </div>
            }
        </div>
    )
}

export default SingleProject;
