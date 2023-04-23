import {Link} from "react-router-dom";
import {motion} from "framer-motion";
import {splashTransition} from "../data/transitionData";

function SingleProject({projectInfo, id}) {
    return (
        <div className='grid grid-cols-6 gap-10'>
            {id % 2 !== 0 &&
                <div className='bg-black col-span-2 col-start-2'>
                </div>
            }
            <div
                className={'h-[600px] rounded-xl overflow-hidden bg-black col-span-3 ring-[50px] ' + (id % 2 !== 0 && 'col-end-7')}>
                <Link to='/projects'>
                    <motion.div whileHover={{scale: 1.1}}
                                transition={splashTransition}>
                        <img src={require('../assets/splash/splash_image3.webp')}
                             alt={projectInfo.name}/>
                    </motion.div>
                </Link>
            </div>
            {id % 2 === 0 &&
                <div className='bg-black col-span-2'>
                </div>
            }
        </div>
    )
}

export default SingleProject;
