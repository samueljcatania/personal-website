import {Link} from 'react-router-dom';
import ProgressiveImage from 'react-progressive-graceful-image';
import {motion} from "framer-motion";
// Hooks
import UseImagePreloader from "../hooks/useImagePreloader";
// Images
import img1 from "../assets/splash_image3.webp";
import img2 from "../assets/larger-compressed-splash-image.jpg";
import img3 from "../assets/compressed-splash-image.jpg";
// Data
import {splashTransition} from "../data/transitionData";

const pictures: string[] = [
    img1, img2, img3
]

function Splash({imageSize}) {
    UseImagePreloader(pictures)

    return (
        <div className='flex justify-center items-center h-screen w-screen'>
            <div className='grid grid-cols-1 place-items-center w-screen'>
                <div className='flex rounded-lg overflow-hidden w-3/4 md:w-[500px]'>
                    <Link to={`/home`}>
                        <ProgressiveImage
                            src={require('../assets/larger-compressed-splash-image.jpg')}
                            placeholder={require('../assets/compressed-splash-image.jpg')}>
                            {(src) => <motion.img className='w-full'
                                                  whileHover={{scale: 1.1}}
                                                  transition={splashTransition}
                                                  src={src}
                                                  alt='Samuel Catania'/>}
                        </ProgressiveImage>
                    </Link>
                </div>
                <div className='flex justify-center h-10 w-screen'>
                    <div className='grid grid-cols-2 h-10 w-3/4 md:w-[500px]'>
                        <motion.div className='container text-start font-nunito text-xs sm:text-base'
                                    exit={{opacity: 0}}
                                    transition={splashTransition}>
                            Western University
                        </motion.div>
                        <motion.div className='container text-end font-nunito text-xs sm:text-base'
                                    exit={{opacity: 0}}
                                    transition={splashTransition}>
                            London, Ontario
                        </motion.div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Splash;
