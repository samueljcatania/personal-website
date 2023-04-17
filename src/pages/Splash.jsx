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
        <div className='flex justify-center items-center h-screen'>
            <div className="grid grid-cols-1 justify-center">
                <div className='flex rounded-lg overflow-hidden'
                     style={{
                         width: imageSize.width,
                         height: imageSize.height
                     }}>
                    <Link to={`/home`}>
                        <ProgressiveImage
                            src={require('../assets/larger-compressed-splash-image.jpg')}
                            placeholder={require('../assets/compressed-splash-image.jpg')}>
                            {(src) => <motion.img whileHover={{scale: 1.1}}
                                                  transition={splashTransition}
                                                  src={src}
                                                  alt='Samuel Catania'/>}
                        </ProgressiveImage>
                    </Link>
                </div>
                <div className='flex h-10'>
                    <div className='grid grid-cols-2 h-10' style={{width: imageSize.width}}>
                        <motion.div className='container text-start font-nunito'
                                    exit={{opacity: 0}}
                                    transition={splashTransition}>
                            Western University
                        </motion.div>
                        <motion.div className='container text-end font-nunito'
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
